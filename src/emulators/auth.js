import * as auth from '@firebase/auth';

const { getAuth, connectAuthEmulator } = auth;

const wrappedGetAuth = (...args) => {
    const authInstance = getAuth(...args);
    try {
        connectAuthEmulator(authInstance, 'http://127.0.0.1:9099');
        console.log('🔥 Auth emulator connected (127.0.0.1:9099)');
    } catch (e) {
        // Already connected or other error
    }
    return authInstance;
};

export * from '@firebase/auth';
export { wrappedGetAuth as getAuth };
