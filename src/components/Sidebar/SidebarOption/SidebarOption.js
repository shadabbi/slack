import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import db from "../../../firebase/firebase.util";

import classes from "./SidebarOption.module.scss";
import { useStateValue } from "../../../context/stateProvider";

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory();

  const [{ showSidebar }, dispatch] = useStateValue();

  const selectChannel = () => {
    dispatch({ type: "SHOW_SIDEBAR", payload: !showSidebar });
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

  useEffect(() => {
    history.push(`/room/XH3tXhkfPdVGaVIkcy8Q`);
  }, []);

  if (!id) {
  }

  //default channel
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
