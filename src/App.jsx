import AppContextProvider from "./context/features/AppContextProvider";
import Main from "./components/Main/Main";
import Weather from "./components/Weather/Weather";
import Panel from "./components/Panel/Panel";

function App() {
  return (
    <AppContextProvider>
      <Main>
        <Weather />
        <Panel />
      </Main>
    </AppContextProvider>
  );
}

export default App;
