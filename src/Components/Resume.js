import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} </p>
        <span><em className="date">{education.from} - {education.graduated}</em></span>
       </div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })

      var expectSkills = this.props.data.skills.filter(e => {
        return  e.level === "expect"
      })
      var intermediateSkills = this.props.data.skills.filter(e => {
        return  e.level === "intermediate"
      })
      var basicSkills = this.props.data.skills.filter(e => {
        return  e.level === "basic"
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
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
    );
  }
}

export default Resume;
