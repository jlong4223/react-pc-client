import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// imported pages/components
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
