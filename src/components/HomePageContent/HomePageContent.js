import { useState, useEffect } from "react";
import { getCurWeatherByLatLng } from "../../services/WeatherAPI";
// import { getCurrentLatLng } from "../../services/Geolocation";
import "./HomeContent.css";
import Map from "../../components/Map/Map";
import Weather from "../../components/Weather/Weather";

const HomePageContent = (props) => {
  const [mapData, setMapData] = useState({
    lat: null,
    lng: null,
    temp: null,
    icon: "",
  });

  async function getMapData() {
    // uncomment geolocation to use commented out function
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

  return (
    <>
      <div id="content-holder">
        <div className="contentDiv">
          <h4>Covid-19</h4>
          <p>
            When visiting, it is required that visitors use face coverings,
            practice social distancing and bring their own hand sanitizer. The
            total number of visitors may be limited.
          </p>
        </div>
        <div className="contentDiv" id="info">
          <div id="info-pic">
            <div id="flower-pic">
              <img
                id="flowers"
                src="https://i.imgur.com/Ipwixfq.jpg"
                alt="flowers"
              />
            </div>
            <div>
              <h4>Port Chaveriat Information</h4>
              <p>
                Welcome to the Port Chaveriat Website. Find out what our unique
                destination has to offer, explore the natural beauty of
                Petoskey, and have an adventure with your friends and family.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="mapspace">
        <Map lat={mapData.lat} lng={mapData.lng} />
        <Weather icon={mapData.icon} temp={mapData.temp} />
      </div>
    </>
  );
};

export default HomePageContent;
