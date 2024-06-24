import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Products from "../Products";
import About from "./About";
import Profile from "./Profile";
import { ContextProvider, useAuth } from "./Auth";
import Login from "./Login";
import Home from "./Home";
import RequireAuth from "./RequireAuth";

function App() {
  const auth = useAuth();
  return (
    <>
      <h1>Mohamed sameh</h1>
      <ContextProvider>
        <Navbar />
        {auth?.user ? <h1>Welcome {auth.user}</h1> : <></>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
