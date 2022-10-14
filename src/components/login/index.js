import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import "./index.css";
import Logo from "../../static/images/logo.png";
import {firebaseAuth} from "../../firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUserIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;

      console.log(user);

      if (user) {
        navigate ("/");
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, "\n", errorMessage);
    })
    console.log("Signing user in...");
  }

  const signUserUp = (e) => {
    e.preventDefault();
  
  createUserWithEmailAndPassword(firebaseAuth, email, password).then(
    (userCredentials) => {
      const user = userCredentials

      console.log (user);

      if(user) {
        navigate("/");
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log (errorCode, "\n", errorMessage);
    }) 
  };

console.log("Email:", email);
console.log("Password:", password);

  return (
    <div className='login'>
        <div>
            <div className="login-logo-section">
                <img src = {Logo} alt= "Logo"/>
                <h1>
                    SPARTAN <span>HUB</span>
                </h1>
            </div>

            <form>
            <input type="email"
             placeholder='Your Email'
              value={email}
               onChange={(e) => setEmail(e.target.value)} 
               />
            <input type="text" 
            placeholder='Your Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}  
            />

            <button type='submit' onClick={signUserIn}>LOGIN</button>
            <button type='submit' onClick={signUserUp}>REGISTER</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login
