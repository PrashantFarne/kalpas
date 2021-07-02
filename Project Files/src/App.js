import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Component/Sidebar";

const App = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUser(result.data);
  };
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-lg-3">
          <Sidebar></Sidebar>
        </div>

        <div className="col-lg-9">
          <div id="card1">
            <div>
              {user.map((user, index) => (
                <tr>
                  <td scope="row" style={{ height: "55px" }}>
                    {index + 1}
                  </td>
                  <td>{user.name}</td>
                </tr>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
