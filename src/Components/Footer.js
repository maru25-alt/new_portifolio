import React from 'react';

function Footer({data}) {

   const scrollTop = () => {
      window.scrollTo(0, 0)
   }
  
  return (
    <footer className="footer">
     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              { data &&  data.map(function(network){
              return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
             })}
           </ul>
           <ul className="copyright">
              <li>&copy; All  Copyright {new Date().getFullYear()}</li> 
           </ul>

        </div>
        <div id="go-top"><button className="smoothscroll" onClick={scrollTop}  title="Back to Top" type="button"><i className="icon-up-open"></i></button></div>
     </div>
  </footer>
  )
}

export default Footer


