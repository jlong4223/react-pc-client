import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getUser, getPic, logout } from "./services/UserService";
import { getCurrentLatLng } from "./services/Geolocation";
import { getCurWeatherByLatLng } from "./services/WeatherAPI";

// imported pages/components
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Map from "./components/Map/Map";
import Weather from "./components/Weather/Weather";
import HomePage from "./pages/HomePage/HomePage";
import SchedulePage from "./pages/SchedulePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App(props) {
  // TODO move map and weather info to a different component/page (everything, state and all)
  const [mapData, setMapData] = useState({
    lat: null,
    lng: null,
    temp: null,
    icon: "",
  });

  async function getMapData() {
    // const { lat, lng } = await getCurrentLatLng();
    const lat = 45.386792;
    const lng = -84.761338;
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

  const [userState, setUserState] = useState({
    user: getUser(),
    pic: getPic(),
  });

  function handleSignupOrLogin() {
    setUserState({ user: getUser(), pic: getPic() });
  }

  function handleLogout() {
    logout();
    setUserState({ user: null, pic: null });
    props.history.push("/");
  }

  return (
    <div className="App">
      <Header userState={userState.user} handleLogout={handleLogout} />
      <main className="page">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <HomePage
                lat={mapData.lat}
                lng={mapData.lng}
                icon={mapData.icon}
                temp={mapData.temp}
                {...props}
              />
            )}
          />
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
          {/* TODO change the path to equal user.name or id */}
          <Route
            exact
            // path={`profile/${userState.user}`}
            path="/profile"
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
                <SchedulePage user={userState.user} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </Switch>
        <div id="mapspace">
          <Map lat={mapData.lat} lng={mapData.lng} />
          <Weather icon={mapData.icon} temp={mapData.temp} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
