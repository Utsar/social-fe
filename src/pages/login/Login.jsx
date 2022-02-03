import { useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import backend from "../../Backend";

const Login = () => {
  const email = useRef();
  const password = useRef();

  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await backend.post("/auth/login", {
        email: email.current.value,
        password: password.current.value,
      });
      localStorage.setItem("user", response.data.user);
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data.user });
      console.log(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(user);
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
            <form className="loginBox" onSubmit={handleClick}>
              <input
                placeholder="Email"
                type="email"
                required
                className="loginInput"
                ref={email}
              />
              <input
                placeholder="Password"
                type="password"
                required
                minLength="6"
                className="loginInput"
                ref={password}
              />
              <button
                className="loginButton"
                type="submit"
                disabled={isFetching}
              >
                {isFetching ? (
                  <CircularProgress color="white" size="20px" />
                ) : (
                  "Log In"
                )}
              </button>
              <span className="loginForgot">Forgot Password?</span>
              <Link
                to={"/register"}
                style={{
                  display: "flex",
                  alignSelf: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <button className="loginRegister">
                  {isFetching ? (
                    <CircularProgress color="white" size="20px" />
                  ) : (
                    "Create an account"
                  )}
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
