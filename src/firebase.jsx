import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAITp0wHH1XrF_SAWQOornTzymjL-91TEE",
    authDomain: "spirit-25.firebaseapp.com",
    projectId: "spirit-25",
    storageBucket: "spirit-25.firebasestorage.app",
    messagingSenderId: "172526323885",
    appId: "1:172526323885:web:323da8c25236966cb75e24",
    measurementId: "G-8YBBXN8PPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firestore for data
const db = getFirestore(app);

// Storage for images
const storage = getStorage(app);

export { db, storage };

/*
Add this script in Apps Script editor

const firebaseConfig = {
apiKey: "AIzaSyAITp0wHH1XrF_SAWQOornTzymjL-91TEE",
authDomain: "spirit-25.firebaseapp.com",
projectId: "spirit-25",
storageBucket: "spirit-25.firebasestorage.app",
messagingSenderId: "172526323885",
appId: "1:172526323885:web:323da8c25236966cb75e24",
measurementId: "G-8YBBXN8PPV",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
function onFormSubmit(e) {
const formData = e.values; // Collect form response data
const formResponse = {
name: formData[0], // Adjust index based on form fields
email: formData[1],
otherData: formData[2],
timestamp: new Date(),
};
db.collection("formResponses").add(formResponse);
}

*/
