import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);


  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const { accessToken, roles } = await login({ username, password }).unwrap()
          const userRole = roles.includes("manager") ? "manager" : "employee"; 
          console.log(userRole)
          dispatch(setCredentials({ accessToken: accessToken, username: username, highestRole: userRole }))
          setUsername('')
          setPassword('')
          navigate('/menu')
      } catch (err) {
          if (!err.status) {
            setErrMsg('No Server Response');
          } else if (err.status === 400) {
            setErrMsg('Missing Username or Password');
          } else if (err.status === 401) {
              setErrMsg('Unauthorized');
          } else {
              setErrMsg(err.data?.message);
          }
          errRef.current.focus();
      }
  };

  const handleUserInput = (e) => setUsername(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);

  const errClass = errMsg ? "errmsg" : "offscreen";
  if (isLoading) {
    return <p>Loading...</p>;
  }
  const content = (
    <section className="public">
      <header>
        <h1 className="text-xl font-bold">Login</h1>
      </header>
      <p ref={errRef} className={errClass} aria-live="assertive">
        {errMsg}
      </p>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="buttonContainer">
          <label htmlFor="username">Username: </label>
          <input
            className="form_input"
            type="text"
            id="username"
            ref={userRef}
            value={username}
            onChange={handleUserInput}
            autoComplete="off"
            required
            placeholder="username"
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            className="form_input"
            type="password"
            id="password"
            onChange={handlePwdInput}
            value={password}
            required
            placeholder="********"
          />
          <br />
          <button className="pageButton">Sign In</button>
        </div>
      </form>
    </section>
  );
  return content;
};
export default Login;
