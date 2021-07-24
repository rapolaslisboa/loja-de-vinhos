import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import classes from "./Toolbar.module.css";

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Logo}>
        <NavigationItem link="/">
          <font>
            <i className="fas fa-wine-glass-alt" />
          </font>
        </NavigationItem>
      </div>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <nav className={classes.DesktopOnly}></nav>
    </header>
  );
};

export default Toolbar;
