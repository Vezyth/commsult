import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      repass: "",
      
    };
  }

  signUp = () => {
    this.props.changePage("Login");
  };

  onSignUp = () => {
    if (
      this.state.email === "" ||
      this.state.username === "" ||
      this.state.password === "" 
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
      <div>
        <div className="container login">
          <div className="box">
            <img src={"/logo.png"} alt="logo" className="logo-web" />
            <h1 className="title-form">Login</h1>
            <h4 className="heading-2-login">Welcome, Buyer</h4>
            {this.state.showUserError ? (
              <div
                class="alert alert-danger d-flex align-items-center"
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
              <label className="label-box">Email: </label>
              <input
                className="form-control input-email"
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
            {this.state.showPasswordError ? (
              <div
                class="alert alert-danger d-flex align-items-center"
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
            {this.state.errmessage ? (
              <div
                class="alert alert-danger d-flex align-items-center"
                role="alert"
              >
                <div>{this.state.errmessage}</div>
              </div>
            ) : (
              ""
            )}
              
              <button
                className="btn btn-primary button-login"
                onClick={this.onSignUp}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Test;
