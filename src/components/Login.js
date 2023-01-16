import {Button} from '@mui/material';
import React from "react";
import { auth , provider } from './firebase';
import "./Login.css";

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message))
    }
  
  return (
    <div className="login">
      <div className="login__logo">
        {/* <img src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png" alt="discord logo"/> */}
        <img src="https://logos-world.net/wp-content/uploads/2020/11/Discord-Logo.png" alt="discord logo"/>
      </div>
      <Button onClick={signIn}>SSSSign In</Button>
    </div>
  );
}

export default Login;
