import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import New from "./Pages/New/New";
import Single from "./Pages/Single/Single";
import NewUser from "./Pages/New/NewUser";
import NewFarm from "./Pages/New/NewFarm";
import FarmList from "./Pages/List/FarmList";
import UserList from "./Pages/List/UserList";
import SingleInspection from "./Pages/Single/singleinspection";
import SingleFarmer from "./Pages/Single/SingleFarmer";
import SingleUser from "./Pages/Single/SingleUser";
import InspectionsList from "./Pages/List/InspectionsList";
import LoginPage from "./Components/Authentication/LoginPage";
import {useSelector } from 'react-redux';



function App() {

  const roles = {admin :'Admin'};
  const logged = useSelector((state) => state.isLoggedIn);
  const role = useSelector((state) => state.role);

  return (
    <div className="App">
      
        <Routes>
        <Route path="login">
              <Route index element={<LoginPage/>}/>
          </Route>
          { logged&& role === roles.admin &&
          <Route path="/">
            <Route index element={<Home />} />
            
            <Route path="users">
              <Route index element={<UserList />} />
              <Route path=":userId" element={<SingleUser/>} />
              <Route path="new" element={<NewUser />} />
            </Route>
            <Route path="farms">
              <Route index element={<FarmList/>} />
              <Route path=":farmId" element={<Single />} />
              <Route path="new" element={<NewFarm/>} />
            </Route>
            <Route path="farmers">
              <Route index element={<List />} />
              <Route path=":farmerId" element={<SingleFarmer />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="inspections">
              <Route index element={<InspectionsList />} />
              <Route path=":inspectionId" element={<SingleInspection />} />
            </Route>
            
          </Route>}
        </Routes>
      
    </div>
  );
}

export default App;
