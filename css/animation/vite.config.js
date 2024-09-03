// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        fundamentals: resolve(__dirname, "chapters/00-fundamentals/index.html"),
        transitions: resolve(__dirname, "chapters/01-transitions/index.html"),
        keyframes: resolve(__dirname, "chapters/02-keyframes/index.html"),
        choreography: resolve(__dirname, "chapters/03-choreography/index.html"),
        states: resolve(__dirname, "chapters/04-states/index.html"),
        layout: resolve(__dirname, "chapters/05-layout/index.html"),
        reactive: resolve(__dirname, "chapters/06-reactive/index.html"),
        examples: resolve(__dirname, "chapters/examples"),
      },
    },
  },
});
