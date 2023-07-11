import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'
import "./skill.css"

function Skill() {
  return (
    <section className="skills" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>

        <div className="skills__container">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skill