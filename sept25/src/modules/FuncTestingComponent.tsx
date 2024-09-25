import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";
import { useEffect, useState } from "react";

const ErrorFallback = ({ ErrorMsg }: { ErrorMsg: string }) => {
  return (
    <div
      style={{
        padding: "1rem",
        margin: "auto",
        border: "1px solid black",
        backgroundColor: "red",
        width: "500px",
        color: "yellow",
        textAlign: "center",
      }}
    >
      <h1>{`${ErrorMsg}`}</h1>
    </div>
  );
};

const ComponentThatMayFail = ({
  setErrorMsg,
}: {
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    try {
      throw new Error("Something went wrong");
    } catch (error) {
      setErrorMsg(`${error}`);
      showBoundary(error);
    }
  }, [setErrorMsg, showBoundary]);

  return (
    <div
      style={{
        padding: "1rem",
        margin: "auto",
        border: "1px solid black",
        backgroundColor: "green",
        width: "400px",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1>No Error</h1>
    </div>
  );
};

const FuncTestingComponent = () => {
  const [ErrorMsg, setErrorMsg] = useState<string>("");

  return (
    <ErrorBoundary fallback={<ErrorFallback ErrorMsg={ErrorMsg} />}>
      <ComponentThatMayFail setErrorMsg={setErrorMsg} />
    </ErrorBoundary>
  );
};

export default FuncTestingComponent;
