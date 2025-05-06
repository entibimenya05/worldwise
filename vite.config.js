import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//add eslint rules by
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  //finally we add that eslint plugin as shown below
  plugins: [react(), eslint()],
});
