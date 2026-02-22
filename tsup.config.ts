import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  external: ["supertest"],
  outDir: "dist",
  format: ["cjs"],
  clean: true,
});
