import { Route, Routes } from "react-router-dom";
import Game from "./Components/Game";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Users from "./Components/Users";
import Videos from "./Components/Videos";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/users"  element={<Users/>}/>
          <Route path="/videos"  element={<Videos/>}/>
          <Route path="/shop"  element={<Shop/>}/>
          <Route path="/game"  element={<Game/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
