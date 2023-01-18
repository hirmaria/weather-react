import "./App.css";
import SearchEngine from "./SearchEngine";
import ReactAnimatedWeather from "react-animated-weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="recent-cities d-flex justify-content-start m-4">
        <div className="">
          <a href="/">Lisbon</a>
        </div>
        <div className="px-3">
          <a href="/">Paris</a>
        </div>
        <div className="px-3">
          <a href="/">Sydney</a>
        </div>
        <div className="px-3">
          <a href="/">San Francisco</a>
        </div>
      </div>
      <SearchEngine />
      <div className="current-weather ms-4 mt-2 text-start">
        <div className="row op">
          <ul>
            <li>
              <h3>Lisabon</h3>
            </li>
            <li>Tuesday</li>
            <li>Clouds</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <ReactAnimatedWeather
              icon="CLOUDY"
              color="black"
              size={50}
              animate={true}
            />
            <span className="current-temp">14</span>
            <span className="pos">°C</span>
          </div>
          <div className="col-6 op">
            <ul>
              <li>Precipitation: 69%</li>
              <li>Wind: 10km/h</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="forecast d-flex justify-content-start">
        <div className="daily m-4">
          <div className="op mb-2">Wen</div>
          <div>
            <ReactAnimatedWeather
              icon="CLOUDY"
              color="black"
              size={50}
              animate={true}
            />
          </div>
          <div className="op">9°</div>
        </div>
        <div className="daily m-4">
          <div className="op mb-2">Thu</div>
          <div>
            <ReactAnimatedWeather
              icon="RAIN"
              color="black"
              size={50}
              animate={true}
            />
          </div>
          <div className="op">14°</div>
        </div>
        <div className="daily m-4">
          <div className="op mb-2">Fri</div>
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="black"
            size={50}
            animate={true}
          />
          <div className="op">12°</div>
        </div>
        <div className="daily m-4">
          <div className="op mb-2">Sat</div>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="black"
            size={50}
            animate={true}
          />
          <div className="op">9°</div>
        </div>
        <div className="daily m-4">
          <div className="op mb-2">Sun</div>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="black"
            size={50}
            animate={true}
          />
          <div className="op">8°</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
