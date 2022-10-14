import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import React from "react";


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errmessage: "",
    };
  }

  onSignIn = () => {
    this.props.users.forEach((elements) => {
      console.log(elements);
      if (elements.username === "" && elements.password === "") {
        this.setState({ errmessage: "No Data Recorded" });
      } else if (
        elements.username === this.state.username &&
        elements.password === this.state.password
      ) {
        this.props.changePage("Home");
      } else {
        this.state({ errmessage: "Invalid Login" });
      }
    });
  }

  onSignUp = () => {
    console.log("Test")
    this.props.changePage("Register");
  }

  render() {
    return (
      <div>
        <div className="container login">
          <div className="box">
            <img src={"/logo.png"} alt="logo" className="logo-web" />
            <h1 className="title-form">Login</h1>
            <h4 className="heading-2-login">Welcome, Buyer</h4>
            {this.state.errmessage ? (
              <div
                className="alert alert-danger d-flex align-items-center"
                role="alert"
              >
                <div>{this.state.errmessage}</div>
              </div>
            ) : (
              ""
            )}
            <div
              className="mini-box"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <label className="label-box">Username: </label>
              <input
                className="form-control input-login"
                value={this.state.username}
                onChange={(event) =>
                  this.setState({
                    username: event.target.value,
                  })
                }
              ></input>
            </div>
           
            <div
              className="mini-box"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <label className="label-box">Password: </label>
              <input
                className="form-control input-login"
                type="password"
                value={this.state.password}
                onChange={(event) =>
                  this.setState({
                    password: event.target.value,
                  })
                }
              ></input>
            </div>
            <div>

            {this.state.showPasswordError ? (
              <div
                className="alert alert-danger d-flex align-items-center"
                role="alert"
              >
                <div>{this.state.errmessage}</div>
              </div>
            ) : (
              ""
            )}

              <button
                className="btn btn-primary button-login"
                onClick={this.onSignIn}
              >
                Login
              </button>
              <br></br>
              <p>Or</p>
              <button
                className="btn btn-success button-regis"
                onClick={this.onSignUp}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
