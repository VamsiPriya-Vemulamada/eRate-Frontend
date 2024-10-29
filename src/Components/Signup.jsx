import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
function Signup() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmpassword,setconfirmPassword]=useState('')


    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:7000/",{
                email,password,confirmpassword
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
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


    return (
        <div className="Signup">

            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input type="confirmpassword" onChange={(e) => { setconfirmPassword(e.target.value) }} placeholder="confirmpassword"  />


                <input type="submit" onClick={submit} />

            </form>

            

        </div>
    )
}

export default Signup