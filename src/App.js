import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getUser, getPic, getId, logout } from "./services/UserService";

// imported pages/components
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import SchedulePage from "./pages/SchedulePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App(props) {
  const [userState, setUserState] = useState({
    user: getUser(),
    id: getId(),
    pic: getPic(),
  });

  function handleSignupOrLogin() {
    setUserState({ user: getUser(), pic: getPic(), id: getId() });
  }

  function handleLogout() {
    logout();
    setUserState({ user: null, pic: null });
    props.history.push("/");
  }

  return (
    <div className="App">
      <Header
        userState={userState.user}
        handleLogout={handleLogout}
        {...props}
      />
      <main className="page">
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} />} />
          <Route
            exact
            path="/signup"
            render={(props) => (
              <SignUpPage
                {...props}
                handleSignupOrLogin={handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => (
              <LoginPage {...props} handleSignupOrLogin={handleSignupOrLogin} />
            )}
          />
          <Route
            exact
            path={`/profile/${userState.user}`}
            // path="/profile"
            render={(props) =>
              getUser() ? (
                <ProfilePage {...props} user={userState} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            exact
            path="/schedule"
            render={(props) =>
              getUser() ? (
                <SchedulePage id={userState.id} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
