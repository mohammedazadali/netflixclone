import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyB8WjZjoaNSg_tvz2G843stkZhR8_lOlY8",
  authDomain: "netflixclone-8c56e.firebaseapp.com",
  projectId: "netflixclone-8c56e",
  storageBucket: "netflixclone-8c56e.appspot.com",
  messagingSenderId: "3506263729",
  appId: "1:3506263729:web:6048581f7f4ad4ee04f490"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



const signup = async(name,email,password)=>{
    try {
        const response = await createUserWithEmailAndPassword(auth,email,password);
        const user = response.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authprovider:'local',
            email,
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}


const logout = ()=>{
    signOut(auth)
}


export {auth,db,login,signup,logout}