const fs = require('fs/promises');
const path = require('path');
const { optimize } = require('svgo');

const REMOVE_NAMESPACED_ATTRS = [
  'xmlns:xlink',
  'xmlns:svg',
  'xmlns:serif',
  'xml:space',
  'xml:lang',
  'xmlns:*',
];

async function optimizeSVGsInDir(srcDir, outDir) {
  const files = await fs.readdir(srcDir);

  for (const file of files) {
    const srcFilePath = path.join(srcDir, file);
    const stat = await fs.stat(srcFilePath);

    if (stat.isDirectory()) {
      const nestedOutDir = path.join(outDir, file);
      await fs.mkdir(nestedOutDir, { recursive: true });
      await optimizeSVGsInDir(srcFilePath, nestedOutDir);
    } else if (file.endsWith('.svg')) {
      const svg = await fs.readFile(srcFilePath, 'utf8');

      const result = optimize(svg, {
        path: srcFilePath,
        multipass: true,
        plugins: [
          {
            name: 'removeAttributesBySelector',
            params: {
              selectors: [
                {
                  selector: '*',
                  attributes: [
                    'xmlns:xlink',
                    'xmlns:svg',
                    'xmlns:serif',
                    'xml:space',
                    'xml:lang',
                    'enable-background',
                    'xmlns:*',
                    'xml:*',
                    'data-name',
                    'id',
                    'version',
                    'xlink:href',
                    'xmlns:svg',
                  ],
                },
              ],
            },
          },
          'removeDimensions',
          'cleanupAttrs',
          'convertStyleToAttrs',
          'removeUnknownsAndDefaults',
        ],
      });

      if ('data' in result) {
        const outFilePath = path.join(outDir, file);
        await fs.writeFile(outFilePath, result.data, 'utf8');
        console.log(`Optimized: ${srcFilePath} → ${outFilePath}`);
      } else {
        console.warn(`Failed to optimize: ${srcFilePath}`);
      }
    }
  }
}

// 优化入口
async function optimizeAll() {
  const inputRoot = path.resolve(__dirname, '../icons');
  const outputRoot = path.resolve(__dirname, '../optimize');
  const subDirs = ['chain', 'token'];

  for (const sub of subDirs) {
    const inputDir = path.join(inputRoot, sub);
    const outputDir = path.join(outputRoot, sub);
    await fs.mkdir(outputDir, { recursive: true });

    console.log(`Optimizing ${sub} icons...`);
    await optimizeSVGsInDir(inputDir, outputDir);
  }
}

optimizeAll().catch(err => {
  console.error(' Error during optimization:', err);
});