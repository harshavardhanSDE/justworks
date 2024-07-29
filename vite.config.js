import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions : {
      scss: {
        additionalData: `@import "src/globals.scss";`,
        includePaths: ["./src/**/*.scss", "node_modules", ], 
        outputStyle: 'compressed',
      }
    }
  }
})
