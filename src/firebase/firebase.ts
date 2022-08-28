// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, CollectionReference, collection, DocumentData } from '@firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGJXLgboviCVZN6BrT3m9mwncw4cbzywA",
  authDomain: "sangue-bom-7cc61.firebaseapp.com",
  projectId: "sangue-bom-7cc61",
  storageBucket: "sangue-bom-7cc61.appspot.com",
  messagingSenderId: "1022078470757",
  appId: "1:1022078470757:web:1422f116df25a08b51948c",
  measurementId: "G-NEX5922ZTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

const createCollection = <T = DocumentData>(collectionName: string) => { 
  return collection(db, collectionName) as CollectionReference<T> 
}

import { IPublicao } from "../types/IPublicacao";

export const colecaoPublicacoes = createCollection<IPublicao>('publicacao') 
