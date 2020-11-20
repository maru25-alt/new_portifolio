import PrintButton from './DownloadResumeButton';
import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import options from '../utils/RichText'

function About({aboutMe, contact, address, profile, resume}) {
   let street = address?.street;
   let city = address?.city;
   let state = address?.state;
   let zip = address?.zip;
   let phone= contact?.phone;
   let email = contact?.email;
   return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"   src={profile?.fields.file.url}  alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p> {documentToReactComponents(aboutMe, options)}</p>
            {/* <p>{aboutMe}</p> */}
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
                     <PrintButton resumeImage={resume?.fields.file.url}/>
                     
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
   )
}

export default About

