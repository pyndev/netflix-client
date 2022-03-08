import './App.scss';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  const rootElement = document.getElementById("root");
  const user = true;
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
}

export default App;
