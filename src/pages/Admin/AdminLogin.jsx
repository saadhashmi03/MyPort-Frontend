import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await axios.post("https://localhost:5000/api/login", {
      email,
      password,
    });

    if (res.data.success === true){
      console.log(res.data.msg)
      dispatch(login());  // isLoggedIn = true
     navigate("/admin");
    }
  };


  const checkUser = async()=>{
    const res = await  axios.get("https://localhost:5000/api/checkUser",{
      withCredentials:true,
    });
    const data = await res.data;
    if(data.success){
      dispatch(login());
      navigate('/admin')
    }
  }

  useEffect(()=>{
          
    checkUser()
  },[])
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        className="flex flex-col justify-center items-center gap-3 w-[80vw] lg:w-[20vw] mx-auto "
        onSubmit={loginUser}
      >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="px-3 py-2 rounded-md bg-transparent border-2 text-white w-full"
        />
        <input
          type="current-password"
          name="password"
          id="password"
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="px-3 py-2 rounded-md bg-transparent border-2 text-white w-full"
        />
        <button
          type="submit"
          className="px-3 py-2 rounded-md bg-transparent border-2 text-white w-full hover:bg-white hover:bg-opacity-20"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
