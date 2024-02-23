import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import dts from 'vite-plugin-dts';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    //TODO: Change outDir to 'dist' when publishing
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'translate-emojis-to-js',
      formats: ['es', 'umd', 'cjs'],
    },
  },
  plugins: [
    checker({
      typescript: true,
    }),
    dts({
      tsconfigPath: 'tsconfig.json',
      insertTypesEntry: true,
    }),
  ],
});
