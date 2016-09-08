import React from "react";
import UserList from "../containers/user-list";
import UserDetail from "../containers/user-detail";
const App = () => (
  <div>
    <h2>User name</h2><hr/>
    <UserList/>
    <UserDetail/>
  </div>
);

export default App;
