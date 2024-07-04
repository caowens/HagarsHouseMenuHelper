// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ5d99Q1ygVfimI1aKWDnMMM7ri-PGoBY",
  authDomain: "hagars-house-menu-helper.firebaseapp.com",
  projectId: "hagars-house-menu-helper",
  storageBucket: "hagars-house-menu-helper.appspot.com",
  messagingSenderId: "541620596575",
  appId: "1:541620596575:web:b1f093c7333b8f053810ea",
  measurementId: "G-Q1FXDVX0QX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Get a list of menus from the database
async function getMenus(db) {
  const menusCol = collection(db, 'menus');
  const menuSnapshot = await getDocs(menusCol);
  const menuList = menuSnapshot.docs.map(doc => doc.data());
  return menuList;
}

export { db, getMenus };