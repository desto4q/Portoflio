import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { INFO, Links } from "../data/data";
import { Link as Smooth } from "react-scroll";
import {Twirl as Ham} from "hamburger-react"

const Nav = () => {
  let win_width = window.innerWidth;
  let [ham, setHam] = useState(false);
  if (win_width > 600) {
    return (
      <nav>
        <div className="nav_content">
          {Links?.map(({ name, to,type }, key) => {
            if  (type == "scroll" ) {
              return(
                <Smooth className="smooth_link" smooth={true} to={`${to}`} onClick={(e)=> {
                }}>
                  {name}
                </Smooth>
              )
            }
           else {
            return (
              <NavLink
                className={({ isActive }) => {
                  if (isActive == true) {
                    return "active";
                  }
                }}
                to={to}
                key={key}
              >
                {name}
              </NavLink>
              // <a href="#" className="active">
              // 	{name}
              // </a>
            );
           }
          })}
        </div>
      </nav>
    );
  }
  return (
    <nav>
      <div className="m_nav">
        <div className="logo">Illumi</div>
        <div
          className="ham"
         
        >
          <Ham  toggled={ham} toggle={setHam}/>
        </div>
      </div>

      <div
        className="side_bar"
        style={{ transform: `translateX(${ham == true ? 0 : -100}%` }}
      >
        {Links.map(({ name, type, to }, key) => {
          if (type == "scroll") {
            return (
              <a
                href={`#${to}`}
                onClick={(e) => {
                  setHam(false);
                }}
                key={key}
              >
                {name}
              </a>
            );
          } else {
            return (
              <Link
                to={to}
                onClick={(e) => {
                  setHam(false);
                }}
                key={key}
              >
                {name}
              </Link>
            );
          }
        })}
        <div className="socials">
          {INFO.socials.map(({ name, Icon, link }) => {
            return (
              <Smooth to={link} target="_blank" key={name} smooth={true}>
                <Icon></Icon>
              </Smooth>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
