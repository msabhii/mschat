import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      // Include Tailwind CSS and Autoprefixer
      include: ["react", "react-dom"],
    }),
  ],
});
