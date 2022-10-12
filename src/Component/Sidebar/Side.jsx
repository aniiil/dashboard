import React, { useState } from "react";
import "./side.css";
import { FaTh, FaBars, FaUserAlt, FaCommentAlt, FaLock } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Side = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/customer",
      name: "customer",
      icon: <FaUserAlt />,
    },

    {
      path: "/chat",
      name: "chat",
      icon: <FaCommentAlt />,
    },
    {
      path: "/logout",
      name: "logout",
      icon: <FaLock />,
    },
  ];
  return (
    <div className="container-side">
      <div className="side_bar">
        <div style={{ width: isOpen ? "200px" : "50px" }} className="Set">
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              Logo
            </h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassname="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Side;
