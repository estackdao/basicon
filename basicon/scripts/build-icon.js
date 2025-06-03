const { transform } = require('@svgr/core');
const { writeFile, mkdir, pathExists } = require('fs-extra');
const fg = require('fast-glob');
const path = require('path');
const fs = require('fs');

const baseDir = path.resolve('icons');
const outputDir = path.resolve('src/generated');

const ensureDir = async (dir) => {
  if (!(await pathExists(dir))) await mkdir(dir, { recursive: true });
};

const generateComponentName = (filename) =>
  filename
    .replace(/\.svg$/, '')
    .replace(/[^a-zA-Z0-9]/g, '_')
    .replace(/^(\d)/, '_$1');

const generateIcons = async (type) => {
  const files = await fg(`${baseDir}/${type}/**/*.svg`);
  const outPath = path.join(outputDir, type);
  await ensureDir(outPath);

  const exports = [];

  for (const file of files) {
    const svgCode = fs.readFileSync(file, 'utf8');
    const baseName = path.basename(file, '.svg'); // e.g., polygon.dark
    const componentName = generateComponentName(baseName);
    const jsCode = await transform(
      svgCode,
      {
        typescript: true,
        icon: true,
        jsxRuntime: 'automatic',
        plugins: ['@svgr/plugin-jsx'],
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'removeAttrs',
              params: {
                attrs: [
                  'enable-background',
                  'xmlns:*',
                  'xml:*',
                  'data-name',
                  'id',
                  'version',
                  'xlink:href',
                  'xmlns:xlink',
                  'xmlns:svg',
                ],
              },
            },
            {
              name: 'removeDimensions',
              active: true,
            },
            {
              name: 'cleanupAttrs', // 清理重复属性
              active: true,
            },
            {
              name: 'convertStyleToAttrs',
              active: true,
            },
            {
              name: 'removeUnknownsAndDefaults', // 移除未知属性
              active: true,
            },
          ],
        },
      },
      { componentName }
    );
    const outFile = path.join(outPath, `${componentName}.tsx`);
    await writeFile(outFile, jsCode, 'utf8');

    exports.push(`export { default as ${componentName} } from './${componentName}';`);
  }

  // Write index.ts
  const indexPath = path.join(outPath, 'index.ts');
  await writeFile(indexPath, exports.join('\n'), 'utf8');
  console.log(`Generated ${type} icons and index.ts`);
};

const run = async () => {
  await generateIcons('token');
  await generateIcons('chain');
};

run();