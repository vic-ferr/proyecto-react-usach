import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://vic-ferr.github.io/proyecto-react-usach/",
  plugins: [react()],
});
