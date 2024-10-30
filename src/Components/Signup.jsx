import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
function Signup() {

    const history=useNavigate();
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
   

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:7000/user/signup",{
                username,email,password
            })
            .then(res=>{
                console.log(res.data)
                console.log(res)
                if(res.status="201"){
                    alert("User created successfully")
                    history("/login", {state:{id:email}})
                }
            })
        }
        catch(e){
            console.log(e);
            alert("catch: User already exist, please login")

        }

    }


    return (
        <div className="signup">

            <h1>SignUp</h1>

            <form action="POST">
            <input type="username" onChange={(e) => { setUsername(e.target.value) }} placeholder="username"/>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"/>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"/>
                <input type="submit" onClick={submit} />
</form>
</div>
    )
}

export default Signup