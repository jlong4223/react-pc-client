import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// imported pages/components
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { getUser, logout } from "./services/UserService";

function App() {
  const [userState, setUserState] = useState({ user: getUser() });

  // TODO figure out why a user is not being grabbed from localstorage after logging in
  function handleSignupOrLogin() {
    setUserState({ user: getUser() });
  }

  return (
    <div className="App">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
