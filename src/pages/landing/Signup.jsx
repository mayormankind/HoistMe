import react, { useState } from 'react';
import { Box, Flex, Text, Button, IconButton, Input, Heading, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { RiFlag2Fill, RiFlagFill, RiGoogleFill, RiLockPasswordFill, RiMailFill, RiUser2Fill, RiEyeOffFill, RiEyeFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
// import {auth, db, store } from './firebase';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { toast } from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export default function Signup(){
    const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [Userinfo,setUserInfo] = useState({});
  const [ error, setError ] = useState({});
//   const { user } = useContext(Context);

  const handleClick = () => setShow(!show);

  const validate = ()=>{
    let errors = {}
    if(!Userinfo.username) errors.username = 'Username field is empty'
    if(!Userinfo.email) errors.email = 'Email field is empty'
    if(!Userinfo.password) errors.password = 'Password field is empty'
    if(!Userinfo.brandname) errors.brandname = 'Brandname field is empty'
    
    setError(errors)
    return Object.keys(errors).length === 0;
  }
  
//   const createAccount = async(e) =>{
//     e.preventDefault();
//     if(validate()){
//       try{
//         const res = await createUserWithEmailAndPassword(auth, Userinfo.email, Userinfo.password)
//         let user = res.user;
//         const imagesRef = ref(store,Userinfo.username);
//         const uploadTask = uploadBytesResumable(imagesRef,Userinfo.image)
//         uploadTask.on(
//           (err) => {
//               console.log(err);
//           },
//           ()=>{
//               getDownloadURL(uploadTask.snapshot.ref).then(async(imageURL)=>{
//                   await updateProfile(user, {
//                     displayName: Userinfo.username,
//                     photoURL: imageURL});
//                   await setDoc(doc(db, "users", user.uid), {
//                     uid:user.uid,
//                     displayName: Userinfo.username,
//                     email: Userinfo.email,
//                     photoURL: imageURL});
//                   await setDoc(doc(db, "userChats", user.uid), {});
//                   navigate('/');
//                 //   toast.success('Account created successfully')
//               });
//           })
//       }catch(err){
//         console.log(err)
//         // toast.error('account could not be created');
//       }
//     }
// }

    return(
        <Flex w='100%' h='100vh' flexDir='column' bg={'url(images/photography.jpg)'} bgPos={'center'} bgSize={'cover'}>
            <Flex p='30px' w='100%' maxW='450px' bg={'rgba(155,155,155,0.7)'} boxShadow='lg' borderRadius='lg' flexDir='column' gap='20px' m='auto'>
                <RiFlagFill fontSize='50px' style={{alignSelf:'center'}}/>
                <Heading as='h3' textAlign='center'>Hi there!</Heading>
                <Flex w='100%' flexDir='column' gap='15px'>
                    <InputGroup size='lg'>
                        <InputLeftElement pointerEvents={'none'}><RiUser2Fill/></InputLeftElement>
                        <Input fontSize='small' type='text' placeholder='Enter a username ...' w='100%' variant='solid'/>
                    </InputGroup>
                    <InputGroup size='lg'>
                        <InputLeftElement pointerEvents={'none'}><RiMailFill/></InputLeftElement>
                        <Input fontSize='small' type='text' placeholder='Your email' w='100%' variant='solid'/>
                    </InputGroup>
                    <InputGroup size='lg'>
                        <InputLeftElement pointerEvents={'none'}><RiFlag2Fill/></InputLeftElement>
                        <Input fontSize='small' type='text' placeholder='Enter your brand name ...' w='100%' variant='solid'/>
                    </InputGroup>
                    <InputGroup size='lg'>
                        <InputLeftElement pointerEvents={'none'}><RiLockPasswordFill/></InputLeftElement>
                        <Input fontSize='small' type={show? 'text' : 'password'} placeholder='Enter your password ...' w='100%' variant='solid'/>
                        <InputRightElement>
                            {!show ? <RiEyeOffFill onClick={handleClick}/> : <RiEyeFill onClick={handleClick}/> }
                        </InputRightElement>
                    </InputGroup>
                    <Button variant='with-bg'>
                        <Link to='/dashboard'>Login to Account</Link>
                    </Button>
                    <Text textAlign='center'>Already have an account? <Button variant='link' color='linkcolor'><Link to='/login' color='header.100'>Login</Link></Button></Text>
                </Flex>
            </Flex>
        </Flex>
    )
}
                        // <select defaultValue={'Business type'} style={{height:'50px',padding:'0 15px',borderRadius:'10px',background:'transparent',border:'1px solid gray'}}>
                        //     <option selected>Business type</option>
                        //     <option>Driver</option>
                        //     <option>Fashion designer</option>
                        //     <option>Web developer</option>
                        //     <option>Shoe maker</option>
                        // </select>