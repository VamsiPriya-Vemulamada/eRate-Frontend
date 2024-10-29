import Navbar from "../Components/Navbar.jsx"
import Footer from "../Components/Footer.jsx"
import Christmas from "../assets/videos/Christmas.mp4"
import Halloween from "../assets/videos/Halloween.mp4"
import HappyBirthday from "../assets/videos/HappyBirthday.mp4"
import NewYear from "../assets/videos/NewYear.mp4"
import ThanksGiving from "../assets/videos/ThanksGiving.mp4"
import ReactPlayer from "react-player"

console.log(Christmas)

import React from "react";
const Home =( )=>{ 
  const events = [
    {
      id: 1,
      url: "HappyBirthday.mp4",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "Halloween",
      title: "Halloween Planning",
    },
    {
      id: 3,
      url: "ThanksGiving",
      title: "ThanksGiving Planning",
    },
    {
      id: 4,
      url: "Christmas",
      title: "Christmas Planning",
    },
    {
      id: 5,
      url: "NewYear",
      title: "NewYear Planning",
    },
    
  ];
return(
        <> 
         <div className="app"> 
        <Navbar/>
        <main className="content">
          <h2>Event Videos</h2>
          <div className="videos">
            {events.map((event) => (
              <div key={event.id} className="video-item">

                <h3>{event.title}</h3>

                
                
              </div>
            ))}
          </div>
        </main>

        <Footer/> 
        </div>
        </>
    )
}
export default Home;
