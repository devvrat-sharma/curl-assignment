import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const users = [
    {
      id: 1,
      name: "dev",
      designation: "developer",
      state: "gujarat",
      managerId: 2,
    },
    {
      id: 2,
      name: "devrat",
      designation: "manager",
      state: "gujarat",
      managerId: 100,
    },
    {
      id: 3,
      name: "aravinth",
      designation: "developer",
      state: "gujarat",
      managerId: 2,
    },
    {
      id: 4,
      name: "priya",
      designation: "tester",
      state: "gujarat",
      managerId: 2,
    },
    {
      id: 5,
      name: "sparsh",
      designation: "BA",
      state: "rajasthan",
      managerId: 120,
    },
    {
      id: 6,
      name: "viraj",
      designation: "BA",
      state: "rajasthan",
      managerId: 120,
    },
    {
      id: 7,
      name: "parth",
      designation: "BA",
      state: "rajasthan",
      managerId: 2,
    },
    {
      id: 8,
      name: "deep",
      designation: "developer",
      state: "mp",
      managerId: 120,
    },
    {
      id: 9,
      name: "madhusudan",
      designation: "developer",
      state: "mp",
      managerId: 2,
    },
  ];

  const [stateFilter, setStateFilter] = React.useState("");
  const [showManagerUsers, setShowManagerUsers] = React.useState([]);

  const showHeirarchyUsers = (user) => {
    if (user.designation === "manager") {
      const managerUsers = users.filter((u) => {
        if (u.managerId === user.id) {
          return u;
        }
      });
      setShowManagerUsers(managerUsers);
    } else {
      setShowManagerUsers([]);
    }
  };

  return (
    <div className="App">
      <select
        value={stateFilter}
        onChange={(event) => setStateFilter(event.target.value)}
      >
        <option value="">Select a state</option>
        <option value="gujarat">Gujarat</option>
        <option value="mp">Madhya Pradesh</option>
        <option value="rajasthan">Rajasthan</option>
      </select>
      <table id="customers">
        <tr>
          <th>Name</th>
          <th>Designation</th>
          <th>State</th>
        </tr>
        {users &&
          users.length > 0 &&
          users.map((user) => {
            if (!stateFilter || user.state === stateFilter) {
              return (
                <tr onClick={() => showHeirarchyUsers(user)}>
                  <td>{user.name}</td>
                  <td>{user.designation}</td>
                  <td>{user.state}</td>
                </tr>
              );
            }
          })}
      </table>

      {showManagerUsers && showManagerUsers.length > 0 && (
        <>
          <h1>Users managed my clicked user!!</h1>
          <table id="customers">
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>State</th>
            </tr>
            {showManagerUsers &&
              showManagerUsers.length > 0 &&
              showManagerUsers.map((user) => {
                if (!stateFilter || user.state === stateFilter) {
                  return (
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.designation}</td>
                      <td>{user.state}</td>
                    </tr>
                  );
                }
              })}
          </table>
        </>
      )}
    </div>
  );
}

export default App;
