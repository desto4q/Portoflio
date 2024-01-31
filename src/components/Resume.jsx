import React from 'react'
import Resume_items from './Resume_items'
import { dummy_Resume } from '../data/data'

function Resume() {
  return (
    <div className="resume">
      <div className="resume_title">
        <h1>Resume</h1>

        
      </div>
        {dummy_Resume.map(({title,details,p},key)=> {
            return(
                <Resume_items title={title} key={key} details={details} date={p}/>
            )
        })}
    </div>
  )
}

export default Resume