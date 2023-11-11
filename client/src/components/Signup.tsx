import React from "react";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const navigate = useNavigate();
  return (
    <div className="login_container">
      <div className="login_content">
        <form action="" className="login_form">
          <input type="text" placeholder="Enter your name" />
          <input type="password" placeholder="Enter your password" />
          <input type="password" placeholder="Refill your password" />
          <button onClick={()=>{
            navigate("/loginAndSignup/signup")
          }}>Đăng kí</button>
        </form>
        <div className="or_css">
          <hr />
          <span>Hoặc</span>
          <hr />
        </div>
        <button
          className="register_button"
          onClick={() => {
            navigate("/loginAndSignup");
          }}
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
}
