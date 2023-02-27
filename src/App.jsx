import FormRegister from "./components/FormRegister/FormRegister";

import DivTrigun from "./components/DivTrigun/DivTrigun";
import NavBar from "./components/NavBar/NavBar";
import DivBoton from "./components/DivBoton/DivBoton";
import "./App.css";

function App() {
  return (
    <>
      <div className="app-container">
        <NavBar />
        <DivTrigun />
        <DivBoton />
      </div>
      <div className="divForm">
        <FormRegister />
        <div className="img-form"></div>
      </div>
    </>
  );
}
export default App;
