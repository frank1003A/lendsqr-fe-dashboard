import { Link, useNavigate } from "react-router-dom";
import { logo, pablo_signin } from "utils/images";

const Login = () => {
  const navigate = useNavigate();
  return (
    <main className="login">
      <section className="container_1">
        <span className="logo_mx">
          <img src={logo} alt="Lendsqr_logo" />
        </span>
        <img src={pablo_signin} alt="pablo-sign-1" />
      </section>
      <section className="container_2">
        <span className="logo_sx">
          <img src={logo} alt="Lendsqr_logo" />
        </span>
        <form>
          <h1>Welcome!</h1>
          <h2>Enter details to login</h2>
          <input type="email" placeholder="Email" name="email" id="email" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
          />
          <Link to="/forgotpassword">forgot password</Link>
          <input
            type="button"
            value="LOG IN"
            onClick={() => navigate("/users")}
          />
        </form>
      </section>
    </main>
  );
};

export default Login;
