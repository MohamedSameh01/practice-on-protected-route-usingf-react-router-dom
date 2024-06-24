// import React from 'react'

import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth"

const Profile = () => {
  
  const auth=useAuth();
  const navigate=useNavigate();
  const handleLogOut = () => {
    auth.logout();
    navigate("/" ,{replace:true})
  };

  return (
    <div>
      <h1 style={{color:"red"}}>Hello {auth.user}</h1>
      <button type="button" onClick={handleLogOut}>Log Out</button>
    </div>
  );
}

export default Profile