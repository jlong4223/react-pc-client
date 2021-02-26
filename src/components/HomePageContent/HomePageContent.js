import "./HomeContent.css";
// import Map from "../Map/Map";
// import Weather from "../Weather/Weather";

const HomePageContent = (props) => {
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
      {/* <div className="contentDiv">
        <div id="mapspace">
          <Map lat={props.lat} lng={props.lng} />
          <Weather icon={props.icon} temp={props.temp} />
        </div>
      </div> */}
    </>
  );
};

export default HomePageContent;
