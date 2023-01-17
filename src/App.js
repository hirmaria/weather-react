import "./App.css";
import SearchEngine from "./SearchEngine";

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
        <div className="row">
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
            <img src="/" alt="clouds" /> 14 <sup>°C</sup>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 69%</li>
              <li>Wind: 10km/h</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="forecast d-flex d-flex justify-content-start">
        <div className="card m-3">
          <div className="card-body">
            <h5 className="card-title">Wen</h5>
            <img src="" className="card-img-top" alt="..."></img>
            <p className="card-text">12°</p>
          </div>
        </div>
        <div className="card m-3">
          <div className="card-body">
            <h5 className="card-title">Thu</h5>
            <img src="" className="card-img-top" alt="..."></img>
            <p className="card-text">13°</p>
          </div>
        </div>
        <div className="card m-3">
          <div className="card-body">
            <h5 className="card-title">Fri</h5>
            <img src="" className="card-img-top" alt="..."></img>
            <p className="card-text">17°</p>
          </div>
        </div>
        <div className="card m-3">
          <div className="card-body">
            <h5 className="card-title">Sat</h5>
            <img src="" className="card-img-top" alt="..."></img>
            <p className="card-text">16°</p>
          </div>
        </div>
        <div className="card m-3">
          <div className="card-body">
            <h5 className="card-title">Sun</h5>
            <img src="" className="card-img-top" alt="..."></img>
            <p className="card-text">16°</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
