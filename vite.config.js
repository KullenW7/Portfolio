import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Portfolio/", // Match your GitHub repo name
  plugins: [react()],
});
