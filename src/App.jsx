import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Component/Body";
import Login from "./Component/Login";
import Profile from "./Component/Profile"
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./Component/Feed";
function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body/>}>
              <Route path = "/" element={<Feed/>}/>
              <Route path = "/login" element={<Login/>}/>
              <Route path = "/profile" element={<Profile/>}/>

            </Route>
            
          </Routes>

        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
