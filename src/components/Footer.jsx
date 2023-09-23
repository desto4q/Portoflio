import React from "react";
import { INFO } from "../data/data";
function Footer() {
  return (
    <footer className="footer">
      <div className="links">
        <div className="brand">Illumi code</div>
        <div className="link_items">
          {INFO.socials.map(({ Icon, name, link }, key) => {
            return (
              <a href={link} key={key}>
                <Icon /> {name}
              </a>
            );
          })}
        </div>
      </div>
      <hr/>
      <div className="copywright">© 2023 Illumi Code™</div>
    </footer>
  );
}

export default Footer;
