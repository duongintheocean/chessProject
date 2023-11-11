import React from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate=useNavigate()
  return (
    <div className="login_container">
      <div className="login_content">
        <form action="" className="login_form">
          <input type="text" placeholder="Tên người dùng" />
          <input type="password" placeholder="Mật khẩu" />
          <button>Đăng nhập</button>
        </form>
        <div className="or_css">
          <hr />
          <span>Hoặc</span>
          <hr />
        </div>
        <button className="register_button" onClick={()=>{navigate("signup")}}>Đăng ký</button>
      </div>
    </div>
  );
}
