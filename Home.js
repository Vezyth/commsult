import React from "react";
import "./App.css";
import axios from "axios";


class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [],
    };
  }

  componentDidMount() {
    axios.get("https://online.akomate.com/atma/api/products").then((res) => {
      this.setState({
       item: this.state.data,
      });
    });
  }


  searchItem= () => {
    const result = this.state.item.filter(element => {
      
    })
    this.setState({item: result})
    
  }



  render() {
    return (
      
      <main>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#!">E-Commerce</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
              </ul>

            </div>
          </div>
        </nav>

        <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Shop in style</h1>
              <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
            </div>
          </div>
        </header>


        <div className="search-bar" >
        <form className="d-flex" role="search" />
        <input
          className="form-control me-2 ini-bar"
          type="search"
          placeholder="Search"
          onChange={(event) =>
            this.setState({ search: event.target.value })
          } /> <button className="btn btn-outline-success" >
          Search
        </button>
        </div>





      </main>

      
      

      
      
      
    );
  }
}

export default Home;
