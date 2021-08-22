import React,{useState} from "react";
import{useHistory} from 'react-router-dom';
function Register()
{
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");
    const histroy=useHistory();
    function signUp()

    {
        let item=(name,password,email);
        console.warn(item);


        let result=fetch("http://localhost:8000/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        result= result.json();
        //localStorage.setItem("user-info",JSON.stringify(result));
       // history.pushState("/add");
    }
    return(
        <div className="col-sm-6 offset-sm-3">
            <h1>registeration</h1>
            <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name"></input> <br></br>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"></input> <br></br>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email"></input> <br></br>
            <button onClick={signUp} className="btn btn-primary">Sign UP</button>
        </div>
        )
}
export default Register;