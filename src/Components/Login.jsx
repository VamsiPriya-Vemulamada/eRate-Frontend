import React, {useEffect, useState} from "react"
import Signup from "./Signup";
import axios from "axios"
import {useNavigate, Link, useLocation } from "react-router-dom"

function Login( ){
    const location = useLocation // to use this other location
    const erateNavigation = useNavigate( ); // for navigation
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:7000/user/login",{
                email,password
            })
            .then(res=>{
                console.log(res.status)
                console.log(res.data)
                const detailsData = res.data
                console.log(detailsData.user.username)
                if(res.status==200){
                    alert("sucess")
                    erateNavigation( "/services", {state:{id:detailsData.user.username}}) // sending username to appear on the page
                }
            })
        }
        catch(e){
            console.log(e);

        }

    }
    return( 
        <div className="login">
            <h1>Login</h1>
            <form action="POST">
            <label for="email">Email:</label>
            <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />

            <label for="password">Password:</label>
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />

            {<input type="submit" onClick={submit} />}
</form>

            <br />
        
            <br />

            <Link to="/Signup">Signup</Link>

        </div>


    )


}
export default Login;