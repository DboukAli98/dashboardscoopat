import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Authentication from "./Pages/Authentication/Authentication";
import List from "./Pages/List/List";
import New from "./Pages/New/New";
import Single from "./Pages/Single/Single";
import NewUser from "./Pages/New/NewUser";
import NewFarm from "./Pages/New/NewFarm";
import FarmList from "./Pages/List/FarmList";
import UserList from "./Pages/List/UserList";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Authentication />} />
            <Route path="users">
              <Route index element={<UserList />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<NewUser />} />
            </Route>
            <Route path="farms">
              <Route index element={<FarmList/>} />
              <Route path=":farmId" element={<Single />} />
              <Route path="new" element={<NewFarm/>} />
            </Route>
            <Route path="farmers">
              <Route index element={<List />} />
              <Route path=":farmerId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="inspections">
              <Route index element={<List />} />
              <Route path=":inspectionId" element={<Single />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
