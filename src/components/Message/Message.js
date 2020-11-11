import React from "react";

import classes from "./Message.module.scss";

function Message({ message, timestamp, user, userImage }) {
  return (
    <div className={classes.message}>
      <img src={userImage} alt=""></img>
      <div className={classes.messageInfo}>
        <h4>
          {user}{" "}
          <span className={classes.timestamp}>
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p >{message}</p>
      </div>
    </div>
  );
}

export default Message;
