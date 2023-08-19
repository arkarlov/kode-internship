import eslintPlugin from "@nabla/vite-plugin-eslint";
import swcReactRefresh from "@vitejs/plugin-react-swc";
import autoprefixer from "autoprefixer";
import dns from "dns";
import postcssLogical from "postcss-logical";
import postcssNormalize from "postcss-normalize";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  base: "/kode-internship/",
  server: {
    host: "localhost",
    port: 3000,
  },
  plugins: [swcReactRefresh(), svgr(), eslintPlugin()],
  esbuild: { jsx: "automatic" },
  css: {
    postcss: {
      plugins: [autoprefixer, postcssLogical, postcssNormalize()],
    },
  },
});
