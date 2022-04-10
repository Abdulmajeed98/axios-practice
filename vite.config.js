import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@features": path.resolve(__dirname, "./src/features"),
    },
  },
  plugins: [
    react(),
    svgrPlugin({
      memo: true,
      icon: true,
      svgoConfig: { removeViewBox: false },
      enforce: "pre",
    }),
  ],
});
