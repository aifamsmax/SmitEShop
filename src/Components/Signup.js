import './Signup.css';
import React,{useState} from 'react'
import NavBar from './Navbar'
import {Link, useNavigate} from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth,db} from '../FirebaseConfigs/firebaseConfig'
import {collection ,addDoc } from 'firebase/firestore';
const Signup = () => {
  const [username,setUserName]=useState("");
  const [password,setUserPassWord]=useState("");
  const [email,setUserEmail]=useState("");
  const navigate = useNavigate()
  const [errorMsg,setErrorMsg]=useState("");
  const [successMsg,setSuccessMsg]=useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password).then((userCredentials) => 
    {
      const user =userCredentials.user;
      const initialcartvalue =0;
      addDoc(collection(db,"user"),{
        email: email,
        password: password,
        username: username,
        uid: user.uid
      }).then(()=> {
        setSuccessMsg("Registered Successfully, You will now be automatically directed to login page")
        setUserName('')
        setUserEmail('')
        setUserPassWord('')
        setTimeout(()=>{
          setSuccessMsg('')
          navigate('/login');
        },5000);
      })
      .catch((error)=> {setErrorMsg(error.message)});
    }).catch((error)=>{
      if(error.message === 'Firebase: Error (auth/invalid-email).')
      {
        setErrorMsg("Please fill all the required fields")
      }
      if(error.message === 'Firebase: Error (auth/email-already-in-use).')
      {
        setErrorMsg("User already exists")
      }
    })
  }
  return (
    <>
    <NavBar/>
    <div  className="signupcontainer">
      <form  className="signup" onSubmit={handleSubmit}>
        <h3  >Creat Account</h3>
        {
          successMsg ? 
          <>
          <div className="success-msg">
          <p>
            {successMsg}
          </p>
          </div>
          </>:null
        }
        {
          errorMsg ? 
          <>
          <div className="error-msg">
            <p>
            {errorMsg}
            </p>
          </div>
          </>:null
        }
        <label>UserName</label>
        <input onChange={(e)=>setUserName(e.target.value)} type="text" placeholder='Enter your name' />
        <label>Email</label>
        <input onChange={(e)=>setUserEmail(e.target.value)} type="email" placeholder='Enter your email' />
        <label >UserName</label>
        <input  onChange={(e)=>setUserPassWord(e.target.value)} type="password" placeholder='Enter Password' />
        <button  type="submit">Sign Up</button>
        <div>
          <span>Already have an account? </span>
          <Link to='/login'>Sign In</Link>
        </div>
      </form>
    </div>
    </>
  )
}

export default Signup