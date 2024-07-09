import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [dropdownOptions] = React.useState(["Cancer", "Heart", "Diabetes"]);

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6">
        <h2 className="text-center mb-4">Login</h2>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <div className="dropdown mb-4" style={{ marginLeft: "500px" }}>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            value={dropdownOptions}
          >
            Symptoms
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {dropdownOptions.map((option, index) => (
              <li key={index}>
                <a className="dropdown-item" href="#">
                  {option}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={handleLogin}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
