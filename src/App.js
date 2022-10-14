import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Test from "./Test";
import Cart from "./Cart";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "Login",
      users: [],
      cart: []
    };
  }



  addUser = (data) => {
    this.setState({
      users: this.state.users.concat(data),
    });
    console.log(this.state.users);
  };

  addCart = (products) => {
    this.setState({ cart: this.state.cart.concat(products) });
  };

  changePage = (newPage) => {
    this.setState({ page: newPage });
  };

  render() {
    return (
      <>
        <div className="App">
          {this.state.page === "Login" ? (
            <Login changePage={this.changePage} users={this.state.users} />
          ) : this.state.page === "Home" ? (
            <Home changePage={this.changePage} addCart={this.addCart} />
          ) : this.state.page === "Register" ?(
            <Test changePage={this.changePage} addUser={this.addUser} />
          ): (
            <Cart changePage={this.changePage} cart={this.state.cart}/>
          )}
        </div>
      </>
    );
  }
}

export default App;
