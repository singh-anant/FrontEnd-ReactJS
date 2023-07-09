import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { RegisterSchema } from "../schemas";
import axios from "axios";

const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: RegisterSchema,
      onSubmit: (values) =>
        axios
          .post("http://localhost:8081/register", values)
          .then((res) => navigate("/login"))
          .catch((err) => console.log(err)),
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="f-container">
        <h1>Welcome To SpiceUp</h1>
        <hr />
        <label htmlFor="name">Enter Your Name</label>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          autoComplete="off"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name ? (
          <p className="f-error">{errors.name}</p>
        ) : null}
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
        {errors.email && touched.email ? (
          <p className="f-error">{errors.email}</p>
        ) : null}
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
        {errors.password && touched.password ? (
          <p className="f-error">{errors.password}</p>
        ) : null}
        <label htmlFor="password">Enter Your Password</label>
        <input
          type="password"
          placeholder="Confirm Your Password"
          name="confirm_password"
          autoComplete="off"
          value={values.confirm_password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirm_password && touched.confirm_password ? (
          <p className="f-error">{errors.confirm_password}</p>
        ) : null}
        <hr />
        <p>
          By creating an account you agree to our{" "}
          <a href="#">Terms & Privacy</a>.
        </p>
        <button type="submit" className="f-registerbtn">
          <strong>Register</strong>
        </button>
      </div>
      <div className="f-container-signinUp">
        <p>
          Don't have an account? <Link to="/login">Login Here</Link>.
        </p>
      </div>
    </form>
  );
};

export default Register;
