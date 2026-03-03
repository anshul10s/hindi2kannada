import * as firestore from '@firebase/firestore';

const { getFirestore, connectFirestoreEmulator } = firestore;

const wrappedGetFirestore = (...args) => {
    const db = getFirestore(...args);
    try {
        connectFirestoreEmulator(db, '127.0.0.1', 8080);
        console.log('🔥 Firestore emulator connected (127.0.0.1:8080)');
    } catch (e) {
        // Already connected or other error
    }
    return db;
};

export * from '@firebase/firestore';
export { wrappedGetFirestore as getFirestore };
