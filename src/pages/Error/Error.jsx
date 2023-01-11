import { useRouteError } from "react-router-dom";
import "./Error.scss";

function Error() {
  const error = useRouteError();
  const customErrorMessage = error?.message;
  const defaultErrorMessage = "Sorry, the requested page cannot be found.";

  return (
    <div className="error">
      <p className="error__message">
        {customErrorMessage || defaultErrorMessage}
      </p>
      <img
        src="../src/assets/icons/error.svg"
        alt="HTTP error image"
        className="error__image"
      />
    </div>
  );
}

export default Error;
