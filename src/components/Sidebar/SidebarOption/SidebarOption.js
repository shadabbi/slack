import React from "react";
import { useHistory } from "react-router-dom";
import db from "../../../firebase/firebase.util";

import classes from "./SidebarOption.module.scss";

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(`/room/${title}`);
    }
  };

  const addChannel = () => {
    const channleName = prompt("please enter the channel name");
    if (channleName) {
      db.collection("rooms").add({
        name: channleName,
      });
    }
  };

  return (
    <div
      className={classes.sidebarOption}
      // onClick={() =>}
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className={classes.sidebarOptionIcon} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3>
          {" "}
          <span>#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
