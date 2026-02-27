const { defineConfig, loadEnv } = require('vite');

module.exports = defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: '/',
    server: {
      proxy: {
        '/api': {
          target: 'https://generativelanguage.googleapis.com',
          changeOrigin: true,
          rewrite: (path) => {
            const cleanPath = path.replace(/^\/api/, '');
            const separator = cleanPath.includes('?') ? '&' : '?';
            return `${cleanPath}${separator}key=${env.GEMINI_API_KEY || ''}`;
          },
        },
      },
    },
  };
});
