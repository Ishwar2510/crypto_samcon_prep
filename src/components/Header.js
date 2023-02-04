import React from 'react'
function Header() {
  return (
    <div style={{display:"flex" ,flexDirection:"row" ,backgroundColor:"grey",height:"20px",padding:"5px"}}>
    <div id="left" style={{width:"30%"}}></div>
    <div id ="right" style={{width:"70%"}}>
        <button>Signup</button>        
        <button>login</button>

    </div>

    </div>
  )
}

export default Header