import React from "react"

const Home=({setLogin})=>{
  
    return (
      <div>
        <h1> Thank you for login </h1>

        <button type="submit" className="btn"  onClick={()=>{
          setLogin({})
        }}>logout</button>
      </div>
    );
}
export default Home