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
    name: 'pkg-a:wd',
    globals: true,
    browser: {
      enabled: true,
      headless: true,
      name: 'firefox',
      provider: 'webdriverio',
    },
    // Make sure to adjust this pattern to match your stories files.
    include: [
      'src/**/*.stories.?(m)[jt]s?(x)',
      'src/**/*.test.ts?(x)',
    ],
    setupFiles: ['./.storybook/vitest.setup.ts'],
  },
})
