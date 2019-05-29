import React from "react";
import { Element, Menu, MenuItem } from "./styled";
import NavLink from "../../common/NavLink";

function Header() {
  return (
    <Element>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
      >
        <MenuItem key="1"><NavLink to="/">Home</NavLink></MenuItem>
        <MenuItem key="2"><NavLink to="/create">Create</NavLink></MenuItem>
      </Menu>
    </Element>
  );
}

export default Header;
