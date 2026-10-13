import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const githubPages =
  (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env
    ?.GITHUB_PAGES === "true";

export default defineConfig({
  base: githubPages ? "/giorgos-portfolio/" : "/",
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
  },
});
