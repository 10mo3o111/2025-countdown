import { defineConfig } from "vite";
import stylelint from "vite-plugin-stylelint"; // stylelintプラグインのインポート

export default defineConfig({
  base: "/2025-countdown/", // サブディレクトリに配置する場合
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        en: "index-en.html",
        zn: "index-zn.html",
      },
    },
  },
  plugins: [stylelint()], // stylelintプラグインを使用
});
