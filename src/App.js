import { useContext } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Main from "./components/Main/Main";
import { validTextContext } from "./context/context-valid";

function App() {
  const validcontext = useContext(validTextContext);
  return (
    <div className="App">
      <Form />
      {validcontext.state && <Main />}
    </div>
  );
}

export default App;
