import { useAppContext } from "../../context/features/AppContextProvider";
import setBackgroundImage from "../../utils/setBackgroundImage";
import Loader from "../Loader/Loader";
import "./Main.scss";

function Main({ children }) {
  const { weather, error, isLoading } = useAppContext().state;
  const isDay = +weather?.current.is_day;
  const code = +weather?.current.condition.code;

  if (error) throw new Error(error);
  if (isLoading) return <Loader />;

  return (
    <main className="main" style={setBackgroundImage(isDay, code)}>
      {children}
    </main>
  );
}

export default Main;
