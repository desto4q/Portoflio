import React from 'react'

function Skill_item({title,Icon}) {
  return (
    <div className="skill_item">
        {/* <div className="skill_title">
        <h2>{title && title}</h2>
        <p>{width}%</p>
        </div>
        <div className="skill_slider">
            <div className="skill_bar" style={{width: `${width ? width :  0}%`}}></div>
        </div> */}
        
        <div className="icon">
            <Icon/>
        </div>
        {title && title}
    </div>
  )
}

export default Skill_item