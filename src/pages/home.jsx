import Navbar from "../Components/Navbar.jsx"
import Footer from "../Components/Footer.jsx"
import VideoCarousel from "../Components/Carousel/VideoCarousel.jsx"
import backgroundImage from "../assets/Images/backgroundImage.jpg"
import React from "react";
const Home =( )=>{ 
  
    return(
        <> 
            <Navbar/>
            {/* for background page */}
         <div className="app"
         style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '50vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
         
         >
     <main>
        {/* video Carousel */}
    <VideoCarousel>
 </VideoCarousel>      
 </main>
  <Footer/> 
    </div>

        </>
    )
}
export default Home;
