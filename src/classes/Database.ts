import { getApp, initializeApp } from "firebase/app";
import { getFirestore, getDoc, updateDoc, doc, setDoc } from 'firebase/firestore/lite';
import dotenv from "dotenv"; dotenv.config()

export const app = initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
})

export const firestore = getFirestore(app);
export class database {
    constructor() { }
    static async set(path: string, value: object) {
        const docRef = doc(firestore, path);
        await setDoc(docRef, value)
    }
    static async get(path: string) {
        const docRef = doc(firestore, path);
        return (await getDoc(docRef)).data()
    }
    static async update(path: string, value: object) {
        const docRef = doc(firestore, path);
        await updateDoc(docRef, value)

    }
};