import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Component/Body";
import Login from "./Component/Login";
import Profile from "./Component/Profile"
function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
            <Route path = "/login" element={<Login/>}/>
            <Route path = "/profile" element={<Profile/>}/>

          </Route>
          
        </Routes>

      </BrowserRouter>
      
    </>
  );
}

export default App;
