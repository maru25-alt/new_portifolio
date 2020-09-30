import React from 'react';
import Page from './Page';
import PropTypes from 'prop-types';


const SinglePage = ({id, resume }) => {
    if(resume){
        var {image} = resume
    }
 return(
   <>
      {resume &&  <Page singleMode={true} id={id}> 
         <section className="resume ">
            <img alt="profile" src={`../../images/${image}`}></img>       
        </section>
        </Page>
     }
   </>
  )
};

SinglePage.propTypes = {
    id: PropTypes.string.isRequired,
    resumeData: PropTypes.object.isRequired
  };
export default SinglePage;