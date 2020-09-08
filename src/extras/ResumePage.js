import React from 'react';
import Page from './Page';
import PropTypes from 'prop-types';
import  "./resume.css"

const SinglePage = ({id,resumeData, main, resume }) => {
    console.log("data",(resumeData.main))
    if(main){
        var {name, address, email,gender,image, occupation, phone , placeofBirth,social, website, DOB} = main;
        var { languages, education,objective, experience, reference, certifications,  skills} = resume
    }
 return(
   <div>
      {main &&  <Page singleMode={true} id={id}> 
      <section className="template_container row">
                   <div  className="sidebar col-md-4 col-xs-10 offset-xs-2 ">
                       <div className="name_section">
                             <img alt="profile" src={`../../images/${image}`}></img>
                             <div>
                                <p className="section-heading">{name}</p>
                                <p>Gender: {gender}</p>
                                <p>Date of Birth: {DOB}</p>
                                <p>Place of Birth: {placeofBirth}</p>
                                <p>Occupation: {occupation}</p>
                                <p>Website: {website}</p>
                             </div>
                       </div>
                       <div className="contact_section">
                            <div className="section-heading">Contact</div>
                            <div >
                                <span className="contact">
                                    <i className="fad fa-envelope-open"></i> &nbsp; &nbsp;
                                    <p >{email}</p>
                                    </span> 
                                    <span className="contact">
                                        <i className="far fa-phone-square-alt"></i>&nbsp; &nbsp;
                                        <p> {phone}</p>
                                    </span>
                                    <span className="contact">
                                        <i className="far fa-map-marker-alt"></i>&nbsp; &nbsp;
                                        <address>{address.street} {address.city} {address.state} {address.zip}</address>
                                    </span>
                           </div>
                           <div className="social-accounts">
                            {social && social.map((e) => {
                                return<a key={e.name} href={e.url} className="contact" ><i className={e.className}></i> &nbsp; &nbsp;{e.username}</a>
                            })}
                           </div>
                       </div>
                     
                       <div className="skills_section">
                          <div className="section-heading">Skills</div>
                          {skills && skills.map(skill => {
                              return(
                                      <div className=" my-1" key={skill.name} >
                                          <div className="clearfix">
                                            <label className="">{skill.name}</label>
                                            <label className="float-right">{skill.level}</label>
                                          </div>
                                           <div className="progress">
                                               <div class="progress-bar" style={{width: skill.level}} role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                           
                                    </div>
                              )
                          })}
                          
                       </div>
                     
                   
                   </div>
                   <div  className="col-md-8 col-xs-10 offset-xs-2 ">
                       <div className="main">
                       <div className="objective_section mb-5">
                          <div className="section-heading">Self Evaluation</div>
                          <p>{objective}</p>
                       </div>
                      <hr></hr>
                       <div className="education_section  mb-5">
                          <div className="section-heading">Education</div>
                              {education && education.map((e , i)=> {
                                  return (
                                <div className="education" key={i}>
                                    <div className="title">{e.school}</div>
                                    <div>{e.degree}</div>
                                    <p>{e.description}</p>
                                    <div className="content">
                                        <span>{e.from}</span>
                                        <span>{e.graduated}</span>
                                       
                                    </div>
                                </div> 
                                  )
                              })}
                         
                       </div>


                       <div className="experience_section  mb-5">
                          <div className="section-heading">Experience</div>
                          {experience && experience.map(ex => {
                              return(
                                <div className="experience" key={ex.id}>
                                      <div className="section-subheading">
                                        <div className="title">{ex.title}</div>
                                        <div className="date">{ex.year_from} - {ex.year_to}</div>
                                      </div> 
                                        <div>
                                            <p>{ex.description}</p>
                                       </div>
                                </div>
                              )
                          })}
                       </div>

                       <hr></hr>
                       <div className="reference_section  mb-5">
                          <div className="section-heading">Reference</div>
                          {reference && reference.map((e, i )=> {
                              return(
                            <div className="reference" key={i}>
                               <div className="name"> <i className="fas fa-user"></i>&nbsp; {e.name}</div>
                               <div className="email"><i className="fad fa-envelope-open"></i>&nbsp; {e.email}</div>
                               <div><i className="fas fa-mobile-alt"> </i>&nbsp; {e.phone}</div>
                               <address> <i className="fas fa-map-marker-alt"></i> &nbsp;{e.address}</address>
                            </div>
                              )

                          })}
                       </div>
                       <hr></hr>

                       <div className="certification_sections  mb-5">
                          <div className="section-heading">Certifications</div>
                          <ul>
                              {certifications && certifications.map(e => {
                                  return(
                                  <li key={e.id}>{e.title}, [{e.year}]</li>
                                  )
                              })}
                             
                          </ul>
                       </div>

                       <hr></hr>
                       <div className="language_section  mb-5">
                           <div className="section-heading">Languages</div>
                           <ul>
                               {languages && languages.map((language, i) => {
                                   return( <li key={i}>{language}</li>)
                               })}
                               
                           </ul>
                       </div>


                     </div>
                   </div>


               
        </section>
        </Page>
     }
   </div>
  )
};

SinglePage.propTypes = {
    id: PropTypes.string.isRequired,
    resumeData: PropTypes.object.isRequired
  };
export default SinglePage;