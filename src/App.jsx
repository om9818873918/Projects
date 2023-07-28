import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Cart from "./components/Cart";
import Home from "./components/Home";


const App = () => {
  return (<div className="">
    <div>    <Navbar/></div>
    <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>

    </Routes>
    

        
  </div>)
};

export default App;
