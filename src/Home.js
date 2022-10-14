import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "Homepage",
            item: "",
            items: [],
            items_filtered: [],
            cart: [],
        }
    }

    componentDidMount() {
        axios.get('https://online.akomate.com/atma/api/products').then(res => {
            this.setState({
                items: res.data,
            });
        });
    }

  addToCart = (item) => (e) => {
    e.preventDefault(e);
    this.props.addCart(item);
}
    

    onCart = () => {
        this.props.changePage("Cart");
    }

    findItems = () => {
      this.setState({
        items_filtered: this.state.items.filter((x) =>
          x.name.toLowerCase().includes(this.state.item.toLowerCase())
        ),
      });
    };



    render() {
        return (
            <main>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#!">
              MarketPlace.
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
                  <a className="nav-link active" aria-current="page" href="#!">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={this.onCart}>
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
              <h1 className="display-4 fw-bolder">MarketPlace.</h1>
              <p className="lead fw-normal text-white-50 mb-0">
                A wonderful place to satisfy your need
              </p>
            </div>
          </div>
        </header>

        <div className="search-fluid">
        <form className="d-flex" role="search">
        <input
            className="form-control me-2 ini-bar"
            type="search"
            placeholder="Search"
            value={this.state.item}
            onChange={(e) =>
              this.setState({ item: e.target.value, items_filtered: [] })
            }
          />
          <button className="btn btn btn-success" onClick={this.findItems}>
            Search
          </button>
        </form>
        </div>

        

                
<div className="Homepage">
          <ul style={{ listStyle: "none" }}>
            {this.state.item === ""
              ? this.state.items.map((item) => {
                  return (
                    <div className="container-konten">
                      <div className="col-lg-12" >
                        <div className="item">
                          <div className="row">
                            <div className="col-lg-4 col-sm-5">
                              <div className="image">
                                <img alt="" src={item.image}></img>
                              </div>
                            </div>
                            <div className="col-lg-8 col-sm-7">
                              <div className="right-content">
                                <h4 className="text-item-name">{item.name}</h4>
                                <hr className="garis-gatau"></hr>
                                <p className="text-detail">{item.detail}</p>
                                  <h4 className='harga'>Rp. {item.price}</h4>
                                
                                <div className="main-button">
                                  <a href="about.html"
                                  onClick={this.addToCart(item)}>Add to Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    
                    
                  );
                })
              : this.state.items_filtered.map((item) => {
                  return (
                    <div className="container-konten">
                      <div className="col-lg-12" >
                        <div className="item">
                          <div className="row">
                            <div className="col-lg-4 col-sm-5">
                              <div className="image">
                                <img alt="" src={item.image}></img>
                              </div>
                            </div>
                            <div className="col-lg-8 col-sm-7">
                            <div className="right-content">
                                <h4 className="text-item-name">{item.name}</h4>
                                <hr className="garis-gatau"></hr>
                                <p className="text-detail">{item.detail}</p>
                                <h4 className='harga'>Rp. {item.price}</h4>
                                
                                <div className="main-button">
                                  <a href="about.html"
                                  onClick={this.addToCart}>Add to Cart</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </ul>
        </div>
      </main>
    );
  }
}

export default Home;