import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Friends from "./pages/Friends/Friends";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MyProfile from "./pages/MyProfile/MyProfile";
import './styles/style.scss'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>} />
          <Route path='friends' element={<Friends/>} />
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
          <Route path='myprofile' element={<MyProfile/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
