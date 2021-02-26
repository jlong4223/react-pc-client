import "./HomePage.css";
import HomePageContent from "../../components/HomePageContent/HomePageContent";

import Map from "../../components/Map/Map";
import Weather from "../../components/Weather/Weather";

const HomePage = (props) => {
  // TODO pass props to homepage content and move map there
  return (
    <>
      <main className="main">
        <div className="home"></div>
      </main>
      <HomePageContent
        lat={props.lat}
        lng={props.lng}
        icon={props.icon}
        temp={props.temp}
      />
    </>
  );
};

export default HomePage;
