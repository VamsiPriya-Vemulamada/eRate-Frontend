import React, { useState }  from "react";
import { useNavigate, useLocation } from "react-router-dom"

// const API = import.meta.env.VITE_SERVICES_API_URI;
const API_KEY =  import.meta.env.VITE_SERVICES_API_KEY;
console.log(import.meta.env.VITE_SERVICES_API_KEY);

const services = ( )=>
    {
        const [search, setSearch] =useState( );
        const [data, setData] = useState( [ ]);
        const navigate = useNavigate( );
        const location=useLocation();
        const handleSearch = (event) =>{
            setSearch(event.target.value)
        }
    
        const getData = () => {
            console.log(search)
            if (search) {
                myFun(search);

            } else {
                console.error("Search value is empty");
            }
        };
    
    const myFun = async(searchVal)=>{
        const get = await fetch(`https://api.unsplash.com/search/photos/?page=1&query=${searchVal}&client_id=${API_KEY}`);

        const jsonData = await get.json();
        console.log(jsonData);
        setData(jsonData.results);
    }
    
const handleImageClick =(image)=>{
    console.log("Selected image:", image);
    navigate("/ErateCard", { state: { image } });
}

return (
        <>
    <div className='container'>
    <h3>Hello {location.state.id}, welcome to the eRate</h3>
        <p>Lookup for a desired image for a card</p>
        <div className ='inputs'>
        <input type='text' placeholder='Search Images..' onChange={handleSearch}/>
        <button onClick={getData} >Select an Image</button>
        </div>
           
     <div className='images'>
              {
                data.map((curVal, index)=>{
                  {/* console.log(curVal.urls.full) */}
                  return(
                    <img
                    key={index} // Add a unique key prop
    src={curVal.urls.full}
    alt={curVal.alt_description}
    onClick={() => {
        console.log("Image clicked:", curVal);
        handleImageClick(curVal);
    }}
/>

                  )
                })
              }
    
              </div>    
          </div>
    
        </>
    )
    }
    export default services;
    