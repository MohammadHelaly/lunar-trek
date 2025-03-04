import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
    VitePWA({
      devOptions: {
        enabled: true,
        type: "module",
      },
      strategies: "injectManifest",
      injectManifest: {
        swSrc: "src/service-worker.ts",
        swDest: "dist/service-worker.js",
        globDirectory: "dist",
        globPatterns: ["**/*.{js,css,html,png,jpg,svg,json,otf}"],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      },
      srcDir: "src",
      filename: "service-worker.ts",
      registerType: "autoUpdate",
      base: "/",
      manifest: {
        name: "Lunar Trek",
        short_name: "Lunar Trek",
        description: "Explore the secrets beneath the surface of Earth's moon.",
        theme_color: "#06060c",
        background_color: "#06060c",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/favicon.ico",
            sizes: "64x64",
            type: "image/x-icon",
          },
          {
            src: "/logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
