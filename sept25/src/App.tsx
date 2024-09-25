import ClassTestingComponent from "./modules/ClassTestingComponent";
import FuncTestingComponent from "./modules/FuncTestingComponent";

const App = () => {
  return (
    <>
      <p style={{margin: '10px 10px', textAlign:'center'}}>Class Component: </p>
      <ClassTestingComponent />
      <br />
      <br />
      <br />
      <p style={{margin: '10px 10px', textAlign:'center'}}>Functional Component:</p>
      <FuncTestingComponent />
    </>
  );
};

export default App;
