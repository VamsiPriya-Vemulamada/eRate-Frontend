import React from "react";
import { useState } from "react";
const Contact = ( ) => {
    return (
        <>
        {/*Adding address, email , Phone Number and Maps  */} 
        
        <div className="contact" style={{ border: 0, textAlign:"center",color:"Black", fontStyle:"italic", }}>Erate</div>
        <div className="item">
        < h4> Address</h4>
        <p>Party house, Detroit, Michigan,4444</p>
        </div>

        <div className="item">
            <h4>Call Us</h4>
            <p>Call Us: +92-321-1111111</p>
          </div>

          <div className="item">
            <h4>Mail Us</h4>
            <p>erate@gmail.com</p>
          </div>
        
          <div className="banner">
   
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188705.4153660345!2d-83.09920500000001!3d42.352711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ca0110cb1d75%3A0x5776864e35b9c4d2!2sDetroit%2C%20MI!5e0!3m2!1sen!2sus!4v1730060228137!5m2!1sen!2sus" 
        
        style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </div>


        </>
    )
}

  export default Contact;
