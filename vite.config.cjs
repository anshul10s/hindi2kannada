const { defineConfig, loadEnv } = require('vite');

module.exports = defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const firebaseConfig = JSON.parse(env.VITE_FIREBASE_CONFIG || '{"projectId":"kannada-setu"}');
  const projectId = firebaseConfig.projectId || 'kannada-setu';

  return {
    base: '/',
    resolve: {
      alias: command === 'serve' ? {
        'firebase/firestore': '/src/emulators/firestore.js',
        'firebase/auth': '/src/emulators/auth.js',
      } : {},
    },
    define: {
      __firebase_ai_proxy: JSON.stringify('/api'),
      __firebase_config: (env.VITE_FIREBASE_CONFIG || command === 'serve')
        ? JSON.stringify(env.VITE_FIREBASE_CONFIG || `{"apiKey":"emu-entry","projectId":"${projectId}"}`)
        : JSON.stringify('{}'),
      __app_id: env.VITE_FIREBASE_APP_ID ? JSON.stringify(env.VITE_FIREBASE_APP_ID) : JSON.stringify('default-app-id'),
    },
    server: {
      proxy: {
        '/api': {
          target: command === 'serve'
            ? `http://127.0.0.1:5001/${projectId}/us-central1/geminiProxy`
            : 'https://generativelanguage.googleapis.com',
          changeOrigin: true,
          rewrite: (path) => {
            const cleanPath = path.replace(/^\/api/, '');
            if (command === 'serve') {
              return cleanPath;
            }
            const separator = cleanPath.includes('?') ? '&' : '?';
            return `${cleanPath}${separator}key=${env.GEMINI_API_KEY || ''}`;
          },
        },
      },
    },
  };
});
