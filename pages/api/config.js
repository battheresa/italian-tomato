import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const config = {
    apiKey: "AIzaSyBDoQpLNBNnOXFF2EJr7i1Z2vHCt273tf0",
    authDomain: "italian-tomato-dc5fd.firebaseapp.com",
    projectId: "italian-tomato-dc5fd",
    storageBucket: "italian-tomato-dc5fd.appspot.com",
    messagingSenderId: "240070316011",
    appId: "1:240070316011:web:ce8258fd64e6ef267c13ae"
};

const app = initializeApp(config);

export const firestore = getFirestore(app)
export const storage = getStorage(app)
