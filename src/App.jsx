import { useSearchLocation } from "./hooks/use-search-location";

function App() {
  const { errorMessage, isLoading, onLocationSearch, onInputChange } =
    useSearchLocation();

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>60°F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">65°F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>

          {/* setting users search value */}
          <input onChange={onInputChange} />
          {/* submitting users search value */}
          <button onClick={onLocationSearch} disabled={isLoading}>
            {isLoading ? "loading...." : "search"}
          </button>
          {errorMessage && <p className="bold">{errorMessage}</p>}

          <div className="wind">
            <p className="bold">12MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
