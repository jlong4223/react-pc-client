import "./HomeContent.css";

const HomePageContent = (props) => {
  return (
    <div id="content-holder">
      <div className="contentDiv">
        <h4>Covid-19</h4>
        <p>
          When visiting the park, it is required that visitors use face
          coverings, practice social distancing and bring their own hand
          sanitizer. The total number of park visitors may be limited.
        </p>
      </div>
      <div className="contentDiv info-pic">
        <div>
          <h4>Port Chaveriat Information</h4>
          <p>
            Welcome to the Port Chaveriat Website. Find out what our unique
            destination has to offer, explore the natural beauty of Petoskey,
            and have an adventure with your friends and family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;
