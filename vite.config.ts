import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { hello } from "foo/bar";
hello();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
