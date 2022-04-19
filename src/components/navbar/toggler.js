import React from "react";

const NavToggler = props => {
  const classNames = ["navbar__toggler center flex-column"];
  if (props.navbarVisible) {
    classNames.push("navbar--visible");
  }

  return (
    <div onClick={props.toggleNavbar} className={classNames.join(" ")}>
      <div className="navbar__toggler-icon navbar__toggler-icon--1" />
      <div className="navbar__toggler-icon navbar__toggler-icon--2" />
      <div className="navbar__toggler-icon navbar__toggler-icon--3" />
      {/* <div className="navbar__toggler-line" />
      <span className="center">MENU</span> */}
    </div>
  );
};

export default NavToggler;
