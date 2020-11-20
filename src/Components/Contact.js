import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
import LoadingGif from '../images/loader.gif'

const Contact = ({contact, address,  myName }) => {
   const [name, setName] = useState('');
   const [subject, setSubject] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');
   const { register, handleSubmit, errors } = useForm();
   const [loading, setloading] = useState(false)
   const [showSentMessage, setshowSentMessage] = useState(false)

    const handleClick = () => {
         // window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
         setloading(true)
         emailjs.sendForm('gmail', 'contact', "#contactForm", 'user_MKMbkoKCK0PNJYbeaCWRm')
            .then((result) => {
               loading(false)
                console.log(result.text);
                alert("Successfully send message")
                setshowSentMessage(true)
            }, (error) => {
                console.log(error.text);
                loading(false)
                alert(error.text)
            });
            setName("");
            setSubject("");
            setEmail("");
            setMessage("");
    }
    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">Get in touch with me to receive further details.</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">
               <form id="contactForm"  onSubmit={handleSubmit(handleClick)}>
					<fieldset>
                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input ref={register({ required: true })} value={name} type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={e => setName(e.target.value)}/>
                     {errors.contactName && <span className="error">This field is required</span>}
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input ref={register({ required: true })} value={email} type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={e=> setEmail(e.target.value)}/>
                     {errors.contactEmail && <span className="error">This field is required</span>}
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input ref={register({ required: true })} value={subject} type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={e => setSubject(e.target.value)}/>
                     {errors.contactSubject && <span  size="35" className="error">This field is required</span>}
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea ref={register({ required: true })} value={message} onChange={e => setMessage(e.target.value)} cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                     {errors.contactMessage && <span className="error">This field is required</span>}
                  </div>

                  <div>
                     <button type='submit' className="submit">Submit</button>
                     {loading &&   <img alt="" src={LoadingGif} />}
                  </div>
					</fieldset>
				   </form>
         
           {showSentMessage &&  <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div> 
            }
				  
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {myName}<br />
                     {contact?.email} <br/>
						   {address?.street} <br />
						   {address?.city}, {address?.state} {address?.zip}<br />
						   <span>{contact?.phone}</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">

		         </div>
            </aside>
      </div>
   </section>
    );
}

export default Contact;
