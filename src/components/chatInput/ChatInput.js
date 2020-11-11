import React, { useState } from "react";

import classes from "./ChatInput.module.scss";
import db from "../../firebase/firebase.util";
import { useStateValue } from "../../context/stateProvider";
import firebase from "firebase";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessageHandler = (e) => {
    e.preventDefault();
    db.collection("rooms").doc(channelId).collection("messages").doc().set({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });
  };

  const changeHandler = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  return (
    <div className={classes.chatInput}>
      <form>
        <input
          onChange={changeHandler}
          placeholder={`Message #${channelName}`}
        />
        <button onClick={sendMessageHandler}>SEND</button>
      </form>
    </div>
  );
}

export default ChatInput;
