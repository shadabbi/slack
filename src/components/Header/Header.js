import React from "react";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

import classes from "./Header.module.scss";
import { useStateValue } from "../../context/stateProvider";

function Header() {
  const [{ user, showSidebar }, dispatch] = useStateValue();
  return (
    <div className={classes.header}>
      <div className={classes.headerLeft}>
        <Avatar
          className={classes.headerAvatar}
          alt={user?.displayName}
          src={user?.photoURL}
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
        <MenuIcon style={{cursor:'pointer'}} onClick={()=>dispatch({type:'SHOW_SIDEBAR', payload:!showSidebar})} />
      </div>
    </div>
  );
}

export default Header;
