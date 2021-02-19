import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// imported pages/components
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { getUser, logout } from "./services/UserService";

function App(props) {
  const [userState, setUserState] = useState({ user: getUser() });

  function handleSignupOrLogin() {
    setUserState({ user: getUser() });
  }

  function handleLogout() {
    logout();
    setUserState({ user: null });
    props.history.push("/");
  }

  return (
    <div className="App">
      <Header userState={userState.user} handleLogout={handleLogout} />
      <main className="page">
        <Route exact path="/" render={(props) => <HomePage />} />
        <Route
          exact
          path="/signup"
          render={(props) => (
            <SignUpPage
              {...props}
              history={props.history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={(props) => (
            <LoginPage
              {...props}
              history={props.history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          )}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
