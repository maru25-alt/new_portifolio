import React, { Component } from 'react'
import PrintButton from './DownloadResumeButton';
export class About extends Component {
   render() {
      if(this.props.data){
         var profilepic= "images/"+this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone= this.props.data.phone;
         var email = this.props.data.email;
         var resumeImage = this.props.data.portifolioImage
       }
       console.log(resumeImage)
      return (
         <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>
   
               <p>{bio}</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <p className="address">
                        <span>Address:</span><span>{street}<br />
                              {city} {state}, {zip}
                      </span><br />
                        <span> Telephone: {phone}</span><br />
                        <span>Email: {email}</span>
                     </p>
                  </div>
                  <div className="columns download">
                     <p>
                        <PrintButton resumeImage={resumeImage}/>
                        <a href='/downloadResume' className="button"><i className="fa fa-download"></i>Download Resume</a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
   
      </section>
      )
   }
}

export default About

