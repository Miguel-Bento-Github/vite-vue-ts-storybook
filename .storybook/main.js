const { loadConfigFromFile, mergeConfig } = require("vite");
const vueI18n = require("@intlify/vite-plugin-vue-i18n").default;
const vue = require("@vitejs/plugin-vue").default;
const eslintPlugin = require("vite-plugin-eslint").default;
const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|ts)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-dark-mode",
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "storybook-builder-vite",
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  async viteFinal(previousConfig, { configType }) {
    const { config } = await loadConfigFromFile(
      path.resolve(__dirname, "../vite.config.ts")
    );

    return mergeConfig(previousConfig, {
      ...config,
      plugins: [
        vueI18n({
          include: path.resolve(__dirname, "../src/locales/**"),
          compositionOnly: false,
          runtimeOnly: false,
        }),
        eslintPlugin(),
      ],
    });
  },
};
