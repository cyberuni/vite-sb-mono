import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // See options at: https://storybook.js.org/docs/writing-tests/vitest-plugin#storybooktest
    storybookTest()
  ],
  test: {
    name: 'storybook',
    globals: true,
    browser: {
      enabled: true,
      headless: true,
      name: 'chromium',
      provider: 'playwright',
    },
    // Make sure to adjust this pattern to match your stories files.
    include: [
      '**/*.stories.?(m)[jt]s?(x)',
      '**/*.test.ts?(x)',
    ],
    setupFiles: ['./.storybook/vitest.setup.ts'],
  },
})
