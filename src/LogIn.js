import React, { useState } from 'react';
import logo1 from './img1.jpeg'
import logo2 from './img2.png'
import logo3 from './img3.jpeg'
import './Log.css'; // Import your CSS file

const LoginForm = () => {
  const [isLogin, setLogin] = useState(true);

  // const navigate=useNavigate();
  // const SignUp=()=>{navigate("/signup")}
  return (
    
    <div className="hero">
    
      <div className="form-box">
        <div className="button-box">
        {isLogin ? (
          <form className="input-group">
            <center><h1>Login</h1></center>
            <input type="text" className="input-field" placeholder="User Id" required />
            <input type="password" className="input-field" placeholder="Enter password" required />
            <a href="#">
              <input type="checkbox" className="chech-box" />
              <span>
                <b style={{ textDecoration: 'none' }}>Forget Password</b>
              </span>
            </a>
            <button type="submit" className="submit-btn" style={{ textDecoration: 'none' }}>
              <a href="file:///D:/my%20project/center.html">Log In</a>
            </button>
          </form>
        ) : (
          <form className="input-group">
            <input type="text" className="input-field" placeholder="User Id" required />
            <input type="email" className="input-field" placeholder="EMAIL ID" required />
            <input type="checkbox" className="chech-box" />
            <span>I agree to terms & condition</span>
            <a href="file:///D:/my%20project/center.html">
              <button type="submit" className="submit-btn">
                Signup
                {/* <p>
                  <a>
                    <button class="sign" onClick={SignUp} >Not have an account?</button>
                  </a>
                </p> */}
              </button>
            </a>
          </form>
        )}
      </div>
    </div>
    </div>
  );
};

export default LoginForm;