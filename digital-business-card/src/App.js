import React from "react"
import About from "./components/about"
import Info from "./components/info";
import Interests from "./components/interests";
import Footer from "./components/footer"

function App() {
  return (
    <div className="App">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
