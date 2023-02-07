import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
 
  build: {
    outDir: "../server/dist",
    
    
  },
  hosting:{
    
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  },

  define: {global: 'window'}
});
