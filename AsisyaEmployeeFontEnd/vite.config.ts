import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "src/api"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
  server: {
    port: 7000,
    strictPort: true,
  },
});
