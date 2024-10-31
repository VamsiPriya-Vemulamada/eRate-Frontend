import React from "react";
import ReactPlayer from "react-player";
import { Carousel } from "react-bootstrap"; 
import Typewriter from "typewriter-effect";
import "bootstrap/dist/css/bootstrap.css";
import "./VideoCarousel.css"
import Christmas from "../../assets/videos/christmas.mp4";
import Halloween from "../../assets/videos/Halloween.mp4";
import HappyBirthday from "../../assets/videos/HappyBirthday.mp4";
import NewYear from "../../assets/videos/NewYear.mp4";
import ThanksGiving from "../../assets/videos/ThanksGiving.mp4";

// Carousel used with bootsrap

const VideoCarousel = () => {
  const videoProperties = [
    {
      id: 1,
      url: HappyBirthday,
      credit: "By eRate",
    },
    {
      id: 2,
      url: Halloween,
      credit: "By eRate",
    },
    {
      id: 3,
      url: ThanksGiving,
    credit: "By eRate",
    },
    {
      id: 4,
      url: Christmas,
     credit: "By eRate",
    },
    {
      id: 5,
      url: NewYear,
      credit:"By eRate",
    },
  ];

  return (
    <> 
    <div className="App"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
    
    >
      <Carousel>

      <h1 className ="VerticalGrid">
       {/* typewriter package for the animated text */}
      <Typewriter
    options={{
        autoStart: true,
        loop: true,
        delay: 10,
        strings: ["Welcome to eRate, share the happiness with just one click!"],
    }}
    
/>

       </h1>
        {videoProperties.map((videoObj) => (
          <Carousel.Item key={videoObj.id}>
            <ReactPlayer
              url={videoObj.url}
              pip={true}
              controls={true}
              playing={true}
              width="100%"
              height="100%"
            />
            <Carousel.Caption>
              <h3>{videoObj.title}</h3>
              <p>{videoObj.credit}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    </>
  );
};

export default VideoCarousel;
