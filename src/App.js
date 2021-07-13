import './App.css';

import Tabs from "./components/Tabs";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const arr = [
    "Captain America",
    "Steve Rogers",
    "July 4, 1918",
    "Red Skull"
  ]

  return (
    <div>
      <br/>
      <div className="App">
        <Tabs arr= { arr } />
      </div>
    </div>
  );
}

export default App;
