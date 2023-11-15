
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {

//   apiKey: "AIzaSyBW6qAxbMvhHiPRUemjfFKwXMOSurhbz0U",

//   authDomain: "bistro-boss-10d30.firebaseapp.com",

//   projectId: "bistro-boss-10d30",

//   storageBucket: "bistro-boss-10d30.appspot.com",

//   messagingSenderId: "652198817210",

//   appId: "1:652198817210:web:0030944f5db98aa4708183",

//   measurementId: "G-P9NW2PGWNV"

// };



// const app = initializeApp(firebaseConfig);

// export default app; 



import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

const app = initializeApp(firebaseConfig); 
export default app;