import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../utils/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) =>
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data === "Success") {
            dispatch(login());
            navigate("/");
          } else alert("NO RECORD");
        })
        .catch((err) => console.log(err)),
  });
  return (
    <form onSubmit={handleSubmit}>
      <div className="f-container">
        <h1>Login Please</h1>
        <hr />
        <label htmlFor="email">Enter Your Email</label>
        <input
          type="text"
          placeholder="Your Email"
          name="email"
          autoComplete="off"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <label htmlFor="password">Enter Your Password</label>
        <input
          type="password"
          placeholder="Your Password"
          name="password"
          autoComplete="off"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <hr />
        <p>
          By creating an account you agree to our{" "}
          <a href="#">Terms & Privacy</a>.
        </p>
        <button type="submit" className="f-registerbtn">
          <strong>Login</strong>
        </button>
      </div>
      <div className="f-container-signinUp">
        <p>
          Don't have an account? <Link to="/register">Register Here</Link>.
        </p>
      </div>
    </form>
  );
};

export default Login;
