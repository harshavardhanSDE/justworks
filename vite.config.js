import { defineConfig } from 'vite'; 
import react from '@vitejs/plugin-react';
import copy from 'rollup-plugin-copy'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // CSS: SCSS
  css: {
    preprocessorOptions : {
      scss: {
        additionalData: `@import "src/globals.scss";`,
        includePaths: ["./src/**/*.scss", "node_modules", ], 
        outputStyle: 'compressed',
      }
    }
  }, 


  // Rollup for copying and custom naming built files.

  build: {
    rollupOptions: {
      plugins: [
        copy({
          // targets: [
          //   {
            
          //   }
          // ], 

        hook: 'writeBundle'
        }),
      ],


      // output

      output: {
        entryFileNames: 'assets/overlay.js',
      }
    }
  }


})
