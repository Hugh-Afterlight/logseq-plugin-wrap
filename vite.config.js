import preact from "@preact/preset-vite"
import { defineConfig } from "vite"

export default defineConfig({
  base: "./",
  plugins: [preact()],
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
        codeSplitting: false,
      },
    },
  },
})
