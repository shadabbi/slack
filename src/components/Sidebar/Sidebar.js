import React, { useState, useEffect } from "react";
import CreateIcon from "@material-ui/icons/Create";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

import classes from "./Sidebar.module.scss";
import SidebarOption from "./SidebarOption/SidebarOption";
import db from "../../firebase/firebase.util";
import { useStateValue } from "../../context/stateProvider";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [narrowChannels, setNarrowChannels] = useState(true);
  const [narrowOptions, setNarrowOptions] = useState(true);
  const [{ user, showSidebar }, dispatch] = useStateValue();

  useEffect(() => {
    const channelsRef = db.collection("rooms").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  }, []);

  return (
    <div>
      {/* <div
        className={classes.toggle}
        onClick={() => setshowSideBar(!showSideBar)}
      >
        toggle
      </div> */}
      <div
        className={classes.backdrop}
        onClick={() => dispatch({ type: "SHOW_SIDEBAR", payload: false })}
        style={{ display: showSidebar ? "block" : "none" }}
      ></div>
      <div
        className={classes.sidebar}
        style={{
          transform: showSidebar ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <div className={classes.sidebarHeader}>
          <div className={classes.sidebarInfo}>
            <h2>Programmers</h2>
            <h3>
              <FiberManualRecordIcon className={classes.active} />
              {user?.displayName}
            </h3>
          </div>
          <div className={classes.icon}>
            <CreateIcon />
          </div>
        </div>
        <SidebarOption Icon={InsertCommentIcon} title="Threads" />
        <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
        <div className={narrowOptions ? classes.hide : classes.show}>
          <SidebarOption Icon={DraftsIcon} title="Saved items" />
          <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
          <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
          <SidebarOption Icon={AppsIcon} title="Apps" />
          <SidebarOption Icon={FileCopyIcon} title="File browser" />
        </div>
        <SidebarOption
          collapse={() => setNarrowOptions(!narrowOptions)}
          Icon={narrowOptions ? ExpandLessIcon : ExpandMoreIcon}
          title="Show less"
        />
        <hr></hr>
        <SidebarOption
          collapse={() => setNarrowChannels(!narrowChannels)}
          Icon={narrowChannels ? ExpandLessIcon : ExpandMoreIcon}
          title="Channels"
        />
        <hr></hr>
        <div className={narrowChannels ? classes.hide : classes.show}>
          <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
          {channels.map((channel) => (
            <SidebarOption
              title={channel.name}
              id={channel.id}
              key={channel.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
