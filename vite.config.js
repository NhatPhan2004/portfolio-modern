import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": "/src",
      "@styles": "/src/styles",
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@data": "/src/data",
      "@hooks": "/src/hooks",
      "@sections": "/src/sections",
      "@routes": "/src/routes",
    },
  },
});
