
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import HomeContent from './components/HomeContent';
import PlayCenter from './components/PlayCenter';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}>
        <Route path="/" element={<HomeContent></HomeContent>}></Route>
        <Route path ="play" element ={<PlayCenter></PlayCenter>}></Route>
      </Route>
    </Routes>


  );
}

export default App;
