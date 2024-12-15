import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
const ReactCompilerConfig = { /* ... */ };

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig],
        ],
      },
    }),
  ],
  test: {
  globals: true,
  environment: 'jsdom',
  setupFiles: './vitest.setup.ts',
  coverage: {
    exclude: ['**/node_modules/**']
  }
}
})