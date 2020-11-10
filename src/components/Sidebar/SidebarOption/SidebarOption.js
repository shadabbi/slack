import React from "react";
import { useHistory } from "react-router-dom";

import classes from "./SidebarOption.module.scss";

function SidebarOption({ Icon, title, id }) {
  const history = useHistory();

  return (
    <div
      className={classes.sidebarOption}
      onClick={() => history.push(`/room/${id}`)}
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
