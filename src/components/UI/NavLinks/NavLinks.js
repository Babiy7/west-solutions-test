import React from "react";
import NavLink from "./NavLink/NavLink";

const NavLinks = props => {
  return [
    { title: "Home", link: "/" },
    { title: "Login", link: "/login" },
    { title: "News", link: "/news" },
    { title: "Profile", link: "/profile" }
  ].map((navLink, index) => (
    <NavLink key={index} link={navLink.link} active={navLink.active}>
      {navLink.title}
    </NavLink>
  ));
};

export default NavLinks;
