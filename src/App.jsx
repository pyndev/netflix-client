import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { render } from "react-dom";
// import { useContext } from "react";
// import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  // const { user } = useContext(AuthContext);
  const rootElement = document.getElementById("root");
  const  user = true;

  render (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ user? <Home /> : <Register />}></Route>
      <Route path="/register" element={ !user? <Register /> : <Home />}></Route>
      <Route path="/login" element={ !user? <Login /> : <Home />}></Route>

      { user && (
        <>
        <Route path="/movies" element={<Home  type="movies"/>}></Route>
        <Route path="/series" element={<Home  type="series"/>}></Route>
        <Route path="/watch" element={<Watch />}></Route>
        </>
      )}
      
    </Routes>
  </BrowserRouter>,
  rootElement
  );
};

export default App;