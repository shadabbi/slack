import React from "react";
import { useParams } from "react-router-dom";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';

import classes from "./Chat.module.scss";

function Chat() {
  const { roomId } = useParams();
  return (
    <div className={classes.chat}>
      <h1>Your are in the {roomId} room</h1>
          <div className={classes.chatHeader}>
              <div className={classes.chatHeaderLeft}>
                  <h4 className={classes.channelName}>
                      <strong>#general</strong>
                      <StarBorderIcon className={classes.starIcon}/>
                  </h4>
              </div>
              <div className={classes.chatHeaderRight}>
                  <p>
                      <InfoIcon className={classes.detailsIcon}/> Details
                    </p>
              </div>
      </div>
    </div>
  );
}

export default Chat;
