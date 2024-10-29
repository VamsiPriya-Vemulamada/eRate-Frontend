import React, {useEffect, useState} from "react"
import Signup from "./Signup";
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function Login( ){

    const history= useNavigate( );
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:7000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/Home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }
    return( 
        <div className="login">
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