import {SkillsCardProps} from "../config/projects"
import React from 'react'

const SkillsCard = (props:SkillsCardProps)=>{
    return (

        <section id={props.id}>
        <h3 className="pb-3 pt-5 text-xl font-semibold">{props.title}</h3>
        <p>{props.description}</p>
      </section>
        
    )
}

export default SkillsCard