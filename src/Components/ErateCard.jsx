import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const ErateCard = () => {
    const location = useLocation(); // Invoke useLocation as a function
    const { image } = location.state || {}; // Safely access image from location.state
const [eventName,setEventname] = useState("")
const [eventDate, setEventDate] = useState("")
const [eventlocation, setEventlocation] = useState("")
const [events,setEvents]= useState([]);

// fetching the events from backend
useEffect(() => {
    const fetchEvents = async ()=>{
        try{
            const response = await axios.get("http://localhost:7000/api/event");
        setEvents(response.data);
        }
        catch(error){
        console.error("error fetching events:", error);
        }
    }
    fetchEvents();
}, [])

const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
        const newEvent ={ eventName,eventDate,eventlocation};
        await axios.post(" ",newEvent);
        console.log("event added successfully");
    }
    catch(error)
    {
        console.error("error submitting event" , error);
    }
}

return (
        <>
            <div className="image-details">
                <h1 style={{textAlign: "center"
                }}>Build a Card</h1>
                {image ? ( // Check if image exists before trying to access its properties
                    <>
                        <img src={image.urls.full} alt={image.alt_description} style={{ width: "50%" , display: 'block', height: "auto", margin: " 0 auto"}} />
                        
                        
                        {/* Add any other details you want to display */}
                    </>
                ) : (
                    <p>No image data available.</p> // Fallback message if image is undefined
                )}
            </div>
        {/* Event Form */}
    <div className="event-form">   
<h4>Event details</h4>
<form onSubmit={handleSubmit}>
    <div>
        <label>Event Name:</label>
        <input 
        type ="text" value ={eventName} onChange={(e)=>setEventname(e.target.value)}
        required
        />
     </div>
     <div>
              <label>Date:</label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Location:</label>
              <input
                type="text"
                value={eventlocation}
                onChange={(e) => setEventlocation(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>

{/* Displaying fetched events */}
<div className="event-list">
          <h3>Events List</h3>
          {events.length > 0 ? (
            <ul>
              {events.map((event) => (
                <li key={event._id}>
                  {event.eventName} - {event.date} - {event.location}
                </li>
              ))}
            </ul>
          ) : (
            <p>No events available</p>
          )}
        </div>
     

        </>
    );
}

export default ErateCard;


