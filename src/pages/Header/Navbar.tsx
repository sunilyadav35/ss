"use client"

import React from "react";
import Headroom from "react-headroom";
import "./Header.css";
import { TopMenu, greeting } from "@/Editme";
import SparklesText from "@/components/ui/sparkal-text";

function Header() {
  return (
    <Headroom>
      <header className="header">
        <a href="/" className="logo"> 
          <SparklesText text={greeting.username}  />
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          {TopMenu.map((menu) => (
            <li key={menu.id} id={menu.id}>
              <a href={menu.id}>{menu.name}</a>
            </li>
          ))}
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
