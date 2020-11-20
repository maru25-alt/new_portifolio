
import React from 'react'

function Resume({skills, work}) {

  var expectSkills = skills?.filter(e => {
    return  e.level === "expect"
  })
  var intermediateSkills = skills?.filter(e => {
    return  e.level === "intermediate"
  })
  var basicSkills = skills?.filter(e => {
    return  e.level === "basic"
  })

  return (
 <section id="resume">
<div className="row work">

   <div className="three columns header-col">
      <h1><span>Work</span></h1>
   </div>

   <div className="nine columns main-col">
      <div><h3>{work?.company}</h3>
         <p className="info">{work?.title}<span>&bull;</span> <em className="date">{work?.years}</em></p>
         <p>{work?.description}</p>
      </div>
  </div>
</div>

<div className="row skill">

   <div className="three columns header-col">
      <h1><span>Skills</span></h1>
   </div>

   <div className="nine columns main-col">
    <div className="bars">
      <h5>Expect</h5>
      <ul className="skills">
        {expectSkills && expectSkills?.map(skill => {
          return (<li key={skill.name}>{skill.name}</li>)
        })}
      </ul>
    </div>
    <div className="bars">
      <h5>Intermediate</h5>
      <ul className="skills">
        {intermediateSkills && intermediateSkills?.map(skill => {
          return (<li key={skill.name}>{skill.name}</li>)
        })}
      </ul>
    </div>
    <div className="bars">
      <h5>Intermediate</h5>
      <ul className="skills">
        {basicSkills &&  basicSkills?.map(skill => {
          return (<li key={skill.name}>{skill.name}</li>)
        })}
      </ul>
    </div>
</div>
</div>
</section>
   
  )
}

export default Resume


