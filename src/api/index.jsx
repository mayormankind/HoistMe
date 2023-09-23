// import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
// import { collection, addDoc,  onSnapshot, query, where, doc, setDoc, deleteDoc, orderBy, updateDoc } from 'firebase/firestore';
// import {auth,provider,db, store} from "./firebase";
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import { toast } from "react-toastify";
// import { v4 } from "uuid";

// export const SignUpWithEmail = (email, password) =>{
//   createUser(auth, email, password)
//   .then((res) => {
//       const user= res.user;
//       localStorage.setItem('username',Userinfo.email);
//       SaveUserData({userID:user.uid,username:Userinfo.username,email:Userinfo.email,photoURL:'',dob:'',bio:'', occupation:'',link:''})
//       // toast.success(`Account ${user} successfully created`);
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       toast.error('Could not create account');
//     });
//   // return response;
// }

// export const LoginWithGoogle=()=>{ 
//     signInWithPopup(auth, provider)
//     .then((res)=>{
//       let user = res.user;
//       SaveUserData({userID:user.uid,username:user.displayName,email:user.email,photoURL:user.photoURL,dob:'',bio:'', occupation:'',link:''})
//       localStorage.setItem('username',user.email);
//       toast('Account created successfully')
//     })
//     .catch((err)=>{
//       console.log(err)
//       toast('account could not be created');
//     })
// }

// export const SaveUserData = (props) =>{
//     addDoc(userRef, props)
//     .then(()=>{})
//     .catch((err)=>{
//       console.log(err);
//     })
//   }

//   export const postImageUpload = (file,setStatus,setProgress) =>{
//     const imagesRef = ref(store,`postImages/${file.name + v4()}`);
//     const uploadTask = uploadBytesResumable(imagesRef,file)
//     uploadTask.on("state_changed", (snapshot) =>{
//       const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
//       setProgress(progress);
//     },
//     (err) => {
//       console.log(err);
//     },
//     ()=>{
//       getDownloadURL(uploadTask.snapshot.ref).then((res)=>{
//         setStatus(res);
//       });
//     })
//   }

export const RandomizeColor = () =>{
  let color = '';
  const randInteger1 = Math.floor(Math.random() * 255);
  const randInteger2 = Math.floor(Math.random() * 255);
  const randInteger3 = Math.floor(Math.random() * 255);
  // console.log('randInteger1',randInteger1,randInteger2,randInteger3)
    color = `rgb(${randInteger1},${randInteger2},${randInteger3})`;
  return color;
}