import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
  onSnapshot,
  addDoc,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC63uD9Xpq_H7H23ruLmHrZr9APsrOE3Uk',

  authDomain: 'sencutarapp.firebaseapp.com',

  projectId: 'sencutarapp',

  storageBucket: 'sencutarapp.appspot.com',

  messagingSenderId: '639649261787',

  appId: '1:639649261787:web:975d504ac0642e84cd84fe'
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export const onDameDispositivos = (ref, callback) => onSnapshot(collection(db, ref), callback)

export const onDameSalas = (ref, callback) => onSnapshot(collection(db, ref), callback)

export const actualizaDisp = (ref, id, objeto) => updateDoc(doc(db, ref, id), objeto)
