import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
/* import { getFirestore, doc } from 'firebase/firestore' */
const app = firebase.initializeApp({
    apiKey: "AIzaSyAd9H-lc8OFHQSyXBfEWEqxG4M01d2fAmI",
    authDomain: "nft-market-837b0.firebaseapp.com",
    databaseURL: "https://nft-market-837b0-default-rtdb.firebaseio.com",
    projectId: "nft-market-837b0",
    storageBucket: "nft-market-837b0.appspot.com",
    messagingSenderId: "570247733629",
    appId: "1:570247733629:web:4562ec2c06f46bfcd2ac14",
    measurementId: "G-RG25Y3DCT9"
});

const firestore = firebase.firestore();
export const nftCollection = firestore.collection("products");


export const auth = app.auth()

export default app