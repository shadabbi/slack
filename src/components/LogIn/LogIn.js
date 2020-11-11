import React from "react";
import { Button } from "@material-ui/core";

import classes from "./LogIn.module.scss";
import { auth, provider } from "../../firebase/firebase.util";

function LogIn() {
  return (
    <div className={classes.logIn}>
      <div className={classes.logInContainer}>
        <img
          src="https://lh3.googleusercontent.com/ogw/ADGmqu_cXo5Vj2jAWkP-FVNKgNy4LcJwFl695T2yjM_zSA=s83-c-mo"
          alt=""
        />
        <h1>Sign in to Shadab chat</h1>
        <p>Shadab.chat.come</p>
        <Button onClick={() => auth.signInWithPopup(provider)}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
}

export default LogIn;
