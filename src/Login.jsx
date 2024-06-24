/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useAuth } from "./Auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  
  const navigate = useNavigate();
  const auth = useAuth();
  const [user, setUser] = useState("");
  const location=useLocation();

  const handleLogin = () => {
    auth.login(user);
    navigate("/",{replace:true})
  };

  return (
    <div>
      <h1>Login</h1>
      <form type="submit">
        <input
          type="text"
          placeholder="User Name"
          name="userName"
          onChange={(e) => setUser(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
