import "./Weather.css";

const Weather = (props) => {
  const celcius = (props.temp - 30) / 2;

  let p =
    props.temp <= 55 && props.temp > 40 ? (
      <p>You might need a heavy sweater or coat(Joy) right now 🥶</p>
    ) : props.temp > 50 && props.temp <= 70 ? (
      <p>A light jacket may be needed.🍂</p>
    ) : props.temp > 70 ? (
      <p>A beautiful summer day for shorts and a t-shirt! 😎</p>
    ) : (
      <p>
        <strong>Dont Go Outside</strong>
      </p>
    );

  return (
    <div id="weatherHolder">
      <h3>Weather</h3>
      <div id="temps">
        <p>{props.temp}&deg;F</p>
        <p>
          <img
            src={`https://openweathermap.org/img/w/${props.icon}.png`}
            alt="Current Conditions"
          />
        </p>
        <p>{celcius}&deg;C</p>
      </div>
      {p}
    </div>
  );
};

export default Weather;
