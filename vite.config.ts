

import { defineConfig as testConfig } from "vitest/config";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";


// Vite configuration
const config = defineConfig({
   plugins: [svgr(), react()],
});

// Vitest configuration
const tstConfig = testConfig({
  test: {
    globals:true,
    environment: "jsdom",
    setupFiles: 'src/tests/setup.ts'
  },
});

// Merge configurations
export default {
  ...config,
  ...tstConfig,
};