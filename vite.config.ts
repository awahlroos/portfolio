import { defineConfig } from "vite";
import { parse } from "path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      output: {
        assetFileNames: (asset) => {
          if (parse(asset.name).name === "externalImage") {
            return "images/src/[name][extname]";
          }
          return "assets/[name].[hash][extname]";
        },
      },
    },
  },
});
