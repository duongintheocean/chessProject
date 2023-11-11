import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import HomeContent from "./components/HomeContent";
import PlayCenter from "./components/PlayCenter";
import LoginBackground from "./components/LoginBackground";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}>
        <Route path="/" element={<HomeContent></HomeContent>}></Route>
        <Route path="play" element={<PlayCenter></PlayCenter>}></Route>
      </Route>
      <Route
        path="/loginAndSignup"
        element={<LoginBackground></LoginBackground>}
      >
        <Route path="" element={<Login></Login>}></Route>
        <Route path="signup" element={<Signup></Signup>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
