import React from 'react'
import Project from './Project'
import { PROJECTS } from '../data/data'


function Allproject() {
  return (
    <div className="all_projects">
        {PROJECTS.map(({title,description,tools,image,links},key)=> {
            return (
                <Project key={key} title={title} description={description} image={image[0]} tools={tools} link={links.link} source_code={links.source_code}/>
            )
        })}
    </div>
  )
}

export default Allproject