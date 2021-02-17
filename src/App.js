import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// imported pages/components
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/signup" render={(props) => <SignUpPage />} />
      <Footer />
    </div>
  );
}

export default App;
