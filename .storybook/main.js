const { mergeConfig } = require("vite")
const { default: tsconfigPaths } = require('vite-tsconfig-paths')

/** @type { import('storybook-solidjs-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "storybook-solidjs-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: [
    "../public"
  ]
};

module.exports = {
  ...config,
  viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()]
    })
  }
}
