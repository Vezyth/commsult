import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      repass: "",
      errmessage: "",
    };
  }

  signUp = () => {
    this.props.changePage("Login")
  }

  onSignUp = () => {
    if (
      this.state.email === "" ||
      this.state.username === "" ||
      this.state.password === "" ||
      this.state.repass === ""
    ) {
      this.setState({ errmessage: "Please Fill All Field" });
      return;
    } else {
      this.props.addUser({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      });
      this.props.changePage("Login");
    }
  };

  render() {
    return (
      <div className="container login">
        <div className="box ">
          <img src={"/logo.png"} alt="logo" className="logo-web-regist" />
          <h1 className="judul-login-form">Sign Up</h1>
          <div
            className="mini-box"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <label className="label-box">Email: </label>
            <input
              className="form-control input-login"
              value={this.state.email}
              onChange={(event) =>
                this.setState({
                  email: event.target.value,
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
              className="form-control input-login" type="Password"
              value={this.state.password}
              onChange={(event) =>
                this.setState({
                  password: event.target.value,
                })
              }
            ></input>
          </div>
          <div>
            <button
              className="btn btn-primary button-login"
              onClick={this.props.changePage("Login")}
            >Sign Up</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
