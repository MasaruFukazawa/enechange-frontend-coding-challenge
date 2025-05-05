import type { StorybookConfig } from "@storybook/nextjs";
import webpack from "webpack";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import dotenv from "dotenv";

// __dirname を ESM で再現
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Storybook の環境変数をロード
dotenv.config({ path: resolve(__dirname, "../.env.storybook") });

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  // 環境変数を Webpack に注入
  webpackFinal: async (config) => {
    config.plugins?.push(
      new webpack.DefinePlugin({ // webpack. をつける
        "process.env.NEXT_PUBLIC_API_BASE_URL": JSON.stringify(process.env.NEXT_PUBLIC_API_BASE_URL),
      })
    );
    return config;
  },
};
export default config;
