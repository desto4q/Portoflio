import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { INFO, PROJECTS } from "../data/data";
import Carousel from "nuka-carousel";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

let C_button = ({ reversed= false ,CLick}) => {
  return (
    <>
      {reversed ? (
        <div className="C_button left" onClick={(e)=> {
            CLick()
        }}>
          <IconArrowLeft />
        </div>
      ) : (
        <div className="C_button right" onClick={e=>{
            CLick()
        }}>
          <IconArrowRight />
        </div>
      )}
    </>
  );
};

function ProjectPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { id } = useParams();
  const data = PROJECTS.filter((item) => {
    if (item.title == id) {
      console.log(item);
      return { item };
    } else {
      return null;
    }
  });
  console.log(data);
  return (
    <div className="project_page">
      <div className="carousel">
        <Carousel className="my_carousel"
            renderCenterRightControls={({nextSlide})=> (
                <C_button CLick={nextSlide} />
            )}
            renderCenterLeftControls={({previousSlide})=> (
                <C_button reversed={true} CLick={previousSlide} />
            )}
            renderBottomCenterControls={false}
        >
          {data[0]?.image.map((item, key) => {
            return (
              <div className="carousel_item" key={key}>
                <img src={item} alt="" />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="content">
        <h1>{data[0]?.title}</h1>
        <p>{data[0]?.description}</p>
        <div className="title">
            features
        </div>

        <div className="features">
          {data[0]?.features.map((item, key) => {
            return <span key={key}>{item}</span>;
          })}
        </div>
        <div className="title">
            Tools
        </div>
        <div className="tools">
            
          {data[0]?.tools.map((item, key) => {
            return <span key={key}>{item}</span>;
          })}
        </div>

        <h2>{data[0]?.why}</h2>

        <div className="externals">
          <a href={data[0]?.links.source_code}>source</a>
          <a href={data[0]?.links.link}>link</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
