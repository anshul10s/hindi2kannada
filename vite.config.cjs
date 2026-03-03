const { defineConfig, loadEnv } = require('vite');

module.exports = defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: '/',
    resolve: {
      alias: command === 'serve' ? {
        'firebase/firestore': '/src/emulators/firestore.js',
        'firebase/auth': '/src/emulators/auth.js',
      } : {},
    },
    define: {
      __firebase_ai_proxy: command === 'serve' ? JSON.stringify('http://127.0.0.1:5001/kannada-setu/us-central1/geminiProxy') : JSON.stringify('/api'),
      __firebase_config: (env.VITE_FIREBASE_CONFIG || command === 'serve')
        ? JSON.stringify(env.VITE_FIREBASE_CONFIG || '{"apiKey":"emu-entry","projectId":"kannada-setu"}')
        : JSON.stringify('{}'),
      __app_id: env.VITE_FIREBASE_APP_ID ? JSON.stringify(env.VITE_FIREBASE_APP_ID) : JSON.stringify('default-app-id'),
    },
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
