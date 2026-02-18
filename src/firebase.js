import { initializeApp } from 'firebase/app';
import { getAuth, signInWithCustomToken, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, setDoc, onSnapshot, collection, deleteDoc } from 'firebase/firestore';

export function initFirebase(firebaseConfigJson, initialAuthToken, onUserChange) {
  const firebaseConfig = JSON.parse(firebaseConfigJson);
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  const initAuth = async () => {
    if (typeof initialAuthToken !== 'undefined' && initialAuthToken) {
      await signInWithCustomToken(auth, initialAuthToken);
    } else {
      await signInAnonymously(auth);
    }
  };

  initAuth();

  const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
    if (onUserChange) onUserChange(user);
  });

  return { app, auth, db, unsubscribeAuth };
}

export function subscribeProgress(db, user, appId, onUpdate) {
  if (!user) return () => {};
  const q = collection(db, 'artifacts', appId, 'users', user.uid, 'progress');
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const progress = {};
    snapshot.forEach(doc => { progress[doc.id] = true; });
    onUpdate(progress);
  }, (err) => console.error('Sync error:', err));

  return unsubscribe;
}

export async function toggleProgress(db, user, appId, charId, makeCompleted) {
  if (!user) return;
  const docRef = doc(db, 'artifacts', appId, 'users', user.uid, 'progress', charId);
  if (makeCompleted) {
    await setDoc(docRef, { learned: true, updatedAt: new Date().toISOString() });
  } else {
    await deleteDoc(docRef);
  }
}
