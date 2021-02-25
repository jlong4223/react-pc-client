import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getUser, logout } from "./services/UserService";
import { getCurrentLatLng } from "./services/Geolocation";
import { getCurWeatherByLatLng } from "./services/WeatherAPI";

// imported pages/components
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Map from "./components/Map/Map";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App(props) {
  const [mapData, setMapData] = useState({
    lat: null,
    lng: null,
    temp: null,
    icon: "",
  });

  async function getMapData() {
    const { lat, lng } = await getCurrentLatLng();
    const weatherData = await getCurWeatherByLatLng(lat, lng);
    console.log(Math.round(weatherData.main.temp));
    setMapData({
      lat,
      lng,
      temp: Math.round(weatherData.main.temp),
      icon: weatherData.weather[0].icon,
    });
  }

  useEffect(() => {
    getMapData();
  }, []);

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
      <Header
        userState={userState.user}
        handleLogout={handleLogout}
        icon={mapData.icon}
        temp={mapData.temp}
      />
      <main className="page">
        <Route exact path="/" render={(props) => <HomePage {...props} />} />
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
        <Route
          exact
          path="/profile"
          render={(props) =>
            getUser() ? (
              <ProfilePage {...props} user={userState.user} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        {/* <Route
          exact
          path="/weather"
          render={(props) => <Map lat={mapData.lat} lng={mapData.lng} />}
        /> */}
      </main>
      <div>
        <Map lat={mapData.lat} lng={mapData.lng} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
