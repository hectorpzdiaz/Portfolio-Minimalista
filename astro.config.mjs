import { defineConfig } from 'astro/config';

export default defineConfig({
  buildOptions: {
    // Configuración para copiar archivos estáticos
    files: [
      "src/image/**", // Rutas relativas a la carpeta src
      "src/cvEn.json",
      "src/cvEs.json"
    ]
  }
});