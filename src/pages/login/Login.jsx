import "./login.css";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Utsar Social</h3>
            <span className="loginDescription">
              Connect with friends around the world on Utsar Social
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input placeholder="Email" className="loginInput" />
              <input placeholder="Password" className="loginInput" />
              <button className="loginButton">Log In</button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegister">Create an Account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
