import React from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import Featured from './Components/Featured';
import {withRoomConsumer} from './Context';


function App({context}) {
  const { featuredBlogs, resumeData} = context;
  
  return (
    <div>
        <Header  name={resumeData.name} description={resumeData.description} social={resumeData.social}/>
        <Featured featuredBlogs={featuredBlogs}></Featured>
        <About aboutMe={resumeData.aboutMe} contact={resumeData.contacts} address={resumeData.address} profile={resumeData.profile} resume={resumeData.resumeImage}/>
        <Resume  skills={resumeData.skills} work={resumeData.workExperience}/>
        <Portfolio projects={resumeData.portifolio}/>
        <Testimonials data={resumeData.testimonials}/>
        <Contact  address={resumeData.address}  contact={resumeData.contacts}  myName={resumeData.name}/>
        <Footer data={resumeData.social}/>
    </div>
  )
}

export default  withRoomConsumer(App)

