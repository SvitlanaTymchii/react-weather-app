import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is created by Svitlana Tymchii and is{" "}
          <a
            href="https://github.com/SvitlanaTymchii/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
