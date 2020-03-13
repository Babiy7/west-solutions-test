import React from "react";

import { connect } from "react-redux";

import NavLink from "./NavLink/NavLink";

const NavLinks = props => {
  console.log("Navlinks rendering");
  return (
    <>
      {[
        { title: "Home", link: "/" },
        { title: "News", link: "/news" },
        { title: "Profile", link: "/profile" }
      ].map((navLink, index) => (
        <NavLink key={index} link={navLink.link}>
          {navLink.title}
        </NavLink>
      ))}
      {props.isLogin ? "" : <NavLink link="/login">Login</NavLink>}
    </>
  );
};

const mapStateToProps = state => ({ isLogin: state.authStore.isLogin });

export default connect(mapStateToProps)(NavLinks);
