import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoIcon from "@material-ui/icons/Info";

import classes from "./Chat.module.scss";
import db from "../../firebase/firebase.util";
import Message from "../Message/Message";
import ChatInput from "../chatInput/ChatInput";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState("");
  const [messages, setMessages] = useState([]);

  const scrollDownHandler = () => {
    const element = document.querySelector(".chat");
    element.scrollTop = element.scrollHeight;
  };

  useEffect(() => {
 
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomDetails(snapshot.data());
        });

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });

      scrollDownHandler();
    }
  }, [roomId]);
  return (
    <div className={[classes.chat, "chat"].join(" ")}>
      <h1>Your are in the {roomDetails?.name} room</h1>
      <div className={classes.chatHeader}>
        <div className={classes.chatHeaderLeft}>
          <h4 className={classes.channelName}>
            <strong>#{roomDetails?.name}</strong>
            <StarBorderIcon className={classes.starIcon} />
          </h4>
        </div>
        <div className={classes.chatHeaderRight}>
          <p>
            <InfoIcon className={classes.detailsIcon} /> Details
          </p>
        </div>
      </div>

      <div className={classes.messages}>
        {messages.map((message) => (
          <Message {...message} />
        ))}
      </div>
      <ChatInput
        scrollDownHandler={scrollDownHandler}
        channelName={roomDetails?.name}
        channelId={roomId}
      />
    </div>
  );
}

export default Chat;
