import React, { Component } from "react";
import Info from "./Components/Info/Info";
import About from "./Components/About/About";
import Interest from "./Components/Interest/Interest";
import Footer from "./Components/Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Info />
        <div className="content">
          <About />
          <Interest />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
