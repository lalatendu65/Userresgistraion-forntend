import React ,{useState} from "react";
import "./signup.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";
function Signup (){
  const navigate=useNavigate()
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterpassword:""

    })
    const handclik=(e)=>{
      const {name,value}=e.target
      setUser({
        ...user,
        [name]:value
      })
    }
    const signup=()=>{
      
      const {name,email,password,reEnterpassword}=user
      if (name && email && password && (password===reEnterpassword)){
         axios.post("http://localhost:1213/signup", user)
           .then(res => {alert(res.data.message)
            navigate('/login')
          })
           
       

      }else{
        alert("invalid input")
      }

    }
    return (
      <div className="resgister">
        {console.log(user)}
        <h1>Resgister</h1>
        
          <input
            type="text"
            name="name"
            value={user.name}
            placeholder="your name"
            onChange={handclik}
          />
          <br />
          <input
            type="email"
            name="email"
            value={user.email}
            placeholder=" your email"
            onChange={handclik}
          />
          <br />
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder=" your password "
            onChange={handclik}
          />
          <br />
          <input
            type="password"
            name="reEnterpassword"
            value={user.reEnterpassword}
            placeholder="Re-enter password"
            onChange={handclik}
          />
       
        <button type="submit" className="btn" onClick={signup}>
          signup
        </button>
        <p>or</p>
        <button type="submit" className="btn" onClick={()=>{
          navigate('/')
        }}>
          login
        </button>
      </div>
    );
}
export default Signup