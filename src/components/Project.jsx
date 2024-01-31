import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import cali from "../public/cali/cali.jpg"
import cali2 from "../public/cali/cali2.jpg"
import cali3 from "../public/cali/cali3.jpg"
import cali4 from "../public/cali/cali4.jpg"
import cali5 from "../public/cali/cali5.jpg"

function Project({ title, description, image, tools, source_code, link }) {
  return (
    <div  className="project">
      <div className="project_content">
        <Link to={`/projectpage/${title}`} className="img_link">
          <img src={image} alt="" />
        </Link>
        <Reveal Children={<div className="project_title">{title}</div>}/>
        <div className="project_description">
          <Reveal Children={<LinesEllipsis
            text={description}
            maxLine={4}
            trimRight
            ellipsis="..."
            basedOn="letters"
          ></LinesEllipsis>}/>
        </div>
        <div className="project_tools">
          {tools.map((item, key) => {
            return (
              <div className="tool" key={key}>
                {item}
              </div>
            );
          })}
        </div>
        <div className="project_links">
          <div className="ext_link">
            <a href={source_code} target="_blank">
              source code?
            </a>
          </div>
          <div className="ext_link">
            <a href={link} target="_blank">
              {title}
            </a>
          </div>

          <div className="ext_link">
          <Link to={`/projectpage/${title}`}>
            more?
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
