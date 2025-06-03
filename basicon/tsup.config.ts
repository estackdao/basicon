import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  outDir: 'dist',
  clean: true,
  external: ['react', 'react-dom'],
  tsconfig: './tsconfig.json',
  esbuildOptions(options) {
    options.jsx = 'automatic';
  }
});