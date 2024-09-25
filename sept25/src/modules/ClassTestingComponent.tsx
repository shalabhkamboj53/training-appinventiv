import ErrorBoundaryClass from "../components/ErrorBoundaryClass";

const ClassTestingComponent = () => {
  return (
    <ErrorBoundaryClass>
      <ErrorComponent />
    </ErrorBoundaryClass>
  );
};

export default ClassTestingComponent;

const ErrorComponent = () => {
  throw new Error("Something went wrong");

  return (
    <>
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
    </>
  );
};
