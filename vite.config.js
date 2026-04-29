import preact from "@preact/preset-vite"
import { defineConfig } from "vite"

// Strip the crossorigin attribute from <script type="module"> tags.
// Vite adds it for CDN/CORS deployments, but Electron file:// rejects
// the script under CORS, preventing the plugin from ever executing.
const stripCrossOriginPlugin = {
  name: "strip-crossorigin",
  enforce: "post",
  transformIndexHtml(html) {
    return html.replace(/\s+crossorigin(?==|>|\s)/g, "")
  },
}

export default defineConfig({
  base: "./",
  plugins: [preact(), stripCrossOriginPlugin],
  build: {
    outDir: "dist",
    assetsInlineLimit: 0,
    target: "esnext",
    modulePreload: { polyfill: false },
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "[name][extname]",
        chunkFileNames: "[name].js",
      },
    },
  },
})
