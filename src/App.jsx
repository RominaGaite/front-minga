

import DivTrigun from './components/DivTrigun/DivTrigun';
import NavBar from './components/NavBar/NavBar';
import DivBoton from './components/DivBoton/DivBoton';
import "./App.css"


function App() {
  return (
      <div className="app-container">
        <NavBar/>
        <DivTrigun/>
        <DivBoton/>
      </div>
  );
}
export default App;
