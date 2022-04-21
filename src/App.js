import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Main from "./routes/Main";
import GameMain  from "./routes/GameMain";
import Levels from "./routes/Levels";

function App() {
  return ( 
<Router>
        <Routes>          
          <Route path="/" element={<Main />}/>
          <Route path="/startGame" element={<GameMain /> }/>
          <Route path="/level/:currLevel" element={<Levels /> }/>
        </Routes>
    </Router>
  );
}

export default App;
