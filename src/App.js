
import { Switch, Route } from "react-router-dom";

import "./componentes/mylist.js";
import "./App.css";

import MyList from "./componentes/mylist";
import SliderHtml from "./componentes/A-Slider/slider.js";

function App() {
  return (
    <div className="App" id="root">
      <div>
      <Switch>
        <Route
          exact path="/"
          render= {()=>{
            return <SliderHtml/>
          }}  
        />
        
        </Switch>
      </div>
    </div>
  );
}

export default App;
