"use client";
import React, { useRef } from "react";
import Skill_item from "./Skill_item";
import { my_Skills } from "../data/data";
import { useScroll } from "framer-motion";
import Reveal from "./Reveal";

function Skills() {
  let skillref = useRef(null);
  useScroll({ target: skillref, offset: ["0 1.2", "1.33 1"] });
  return (
      <div className="skills" ref={skillref}>
        <h2>skills</h2>
        {/* <div className="disclamer">
          this is merely for design/placeholder purposes, and it does not represent my proficiency in any of the skillset listed below
        </div> */}
        <div className="skill_list">
          {my_Skills.map(({ name, Icon }, key) => {
            // return <Skill_item key={key} title={name} Icon={Icon} />;
            return <Reveal key={key}  Children={<Skill_item key={key} title={name} Icon={Icon} />}/> 
          })}
        </div>
      </div>
  );
}

export default Skills;
