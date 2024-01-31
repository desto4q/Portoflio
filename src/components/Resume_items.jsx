import { IconMail, IconNote, IconRectangularPrism } from "@tabler/icons-react";
import React from "react";

function Resume_items({ title, details, date }) {
  return (
    <div className="resume_items">
      <div className="line">
        <div className="icon">
          <IconNote />
        </div>
      </div>
      <div className="resume_content">
        <h1>{title}</h1>
        <h3>{date}</h3>
        <p>{details}</p>
      </div>
    </div>
  );
}

export default Resume_items;
