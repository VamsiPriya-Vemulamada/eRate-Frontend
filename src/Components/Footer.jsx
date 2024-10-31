
import React from "react";
import { FaYoutube, FaInstagram,FaTwitter  } from "react-icons/fa";

const Footer = ()=>
{
    return ( 
        <>
      <div className="footer">
          <div className="title">
            
            <p> eRrate Follow Us@</p>
            {/* icons from the react-icons */}
  <button> <FaYoutube /> </button>
  <button><FaInstagram /></button>
  <button><FaTwitter /></button>
  
 </div>
 </div> 
    </>
    )
    

}

export default Footer;