import Main from "./components/Main/Main";
import Weather from "./components/Weather/Weather";
import Panel from "./components/Panel/Panel";

function App() {
  return (
    <>
      <Main>
        <Weather />
        <Panel />
      </Main>
    </>
  );
}

export default App;
