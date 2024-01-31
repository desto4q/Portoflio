import React from "react";
// import INFO from "../data/data";
import AVATAR, { INFO } from "../data/data";
import Allproject from "../components/Allproject";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Lottie_Image from "../components/Lottie_Image";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import { Typewriter } from "react-simple-typewriter";
import { Link, animateScroll as scroll } from "react-scroll";
import Reveal from "../components/Reveal";
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  // let url =
  //   "https://images.unsplash.com/photo-1496989981497-27d69cdad83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1531&q=80";
  let url =
    "https://images.unsplash.com/photo-1495423204732-e41dd10e53a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80";
  return (
    <div className="home">
      <section className="hero">
          <img src={url} alt="" className="background" />
        <div className="hero_text">
          <a
            target="_blank"
            href="https://www.instagram.com/_desto4u/"
            className="icon"
          >
            <img src={AVATAR} alt="" className="hero_avatar" />
          </a>
          <Reveal
            Children={
              <div className="intro">
                <Typewriter loop={false} words={["hello", "hi", "halo"]} />
                <h1>, Im Destiny,</h1>
              </div>
            }
          />

          <Reveal Children={<h2>Graphic designer, Web developer, 3d Artist and more</h2>} />
          <Reveal Children={<p>{INFO.homepage.description}</p>}/>
          <div className="hero_socials" >
            {INFO.socials.map(({ name, link, Icon }, key) => {
              return (
                <Reveal key={key} Children={<a href={link} target="_blank" key={key}>
                {Icon && <Icon />}
                <div className="hero_tooltip">{name}</div>
              </a>}/>
              );
            })}
          </div>
          <div className="hero_links">
            <Reveal Children={<Link to="contact" smooth={true}>
              View Projects?
            </Link>}/>

            <Reveal Children={<Link to="contact" smooth={true}>
              Contact me
            </Link>}/>
          </div>
        </div>
        <img
          src={"Home.jpg"}
          alt=""
          className="hero_img"
        />
      </section>

      <div className="project_section" id="Projects">
        <h1 className="pro_title">Projects</h1>
        <Allproject />
      </div>

      <section className="resume_section" id="Skills"> 
        <Resume />
        <Skills />
      </section>

      <section id="Contact" className="contact_section">
        <Lottie_Image />
        <Contact />
      </section>
    </div>
  );
}

export default Home;
