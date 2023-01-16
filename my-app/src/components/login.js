import React,{useState} from "react"
import "./login.css"
import axios from "axios";
import {useNavigate} from "react-router-dom"
const Login = ({ setLogin }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handclik = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const login = () => {
    axios
      .post("http://localhost:1213/login", user)
      .then((res) => {alert(res.data.message)
      setLogin(res.data.user)
      navigate('/')
       
  })
  };
  return (
    <div className="login">
      {console.log(user)}

      <h1>Login</h1>

      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        value={user.email}
        onChange={handclik}
      />
      <br />
      <input
        type="password"
        placeholder="Enter your password "
        name="password"
        value={user.password}
        onChange={handclik}
      />
      <br />

      <button type="submit" className="btn" onClick={login}>
        login
      </button>
      <p>or </p>
      <button
        type="submit"
        className="btn"
        onClick={() => {
          navigate("/signup");
        }}
      >
        siginup
      </button>
    </div>
  );
};
export default Login
