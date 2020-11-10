import React from "react";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SearchIcon from "@material-ui/icons/Search";

import classes from "./Header.module.scss";

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.headerLeft}>
        <Avatar
          className={classes.headerAvatar}
          alt={"user?.displayName"}
          src={"user?.photoURL"}
        />
        <div>
          <AccessTimeIcon />
        </div>
      </div>

      <div className={classes.headerSearch}>
        <SearchIcon />
        <input></input>
      </div>
      <div className={classes.headerRight}>
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
