import Main from "./components/Main/Main";
import Weather from "./components/Weather/Weather";

function App() {
  return (
    <>
      <Main>
        <Weather />
        <div className="panel">RIGHT</div>
      </Main>
    </>
  );
}

export default App;
