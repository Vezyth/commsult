import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newCart: [],
    };
  }

  onHome= () =>{
    this.props.changePage("Home")
  }

  render() {
    return (
      <>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
              <a className="navbar-brand" href="#!">
                E-Commerce
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      onClick={this.onHome}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">
                      Shopping Cart
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
              <div className="text-center text-white">
                <h1 className="display-4 fw-bolder">Your Cart.</h1>
                <p className="lead fw-normal text-white-50 mb-0">
                  A wonderful place to satisfy your need
                </p>
              </div>
            </div>
          </header>

          <div className="container">
            <hr />
            <div className="row">
              {this.props.cart.map((products) => (
                <div className="container-konten">
                  <div className="col-lg-12">
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-4 col-sm-5">
                          <div className="image">
                            <img alt="" src={products.image}></img>
                          </div>
                        </div>
                        <div className="col-lg-8 col-sm-7">
                              <div className="right-content">
                                <h4 className="text-item-name">{products.name}</h4>
                                <hr className="garis-gatau"></hr>
                                <p className="text-detail">{products.detail}</p>
                                  <h4 className='harga'>Rp. {products.price}</h4>
                              </div>
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cart;
