import "./register.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

const Register = () => {

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState("");


  const addUser = () => {
    Axios.post("http://localhost:5000/register", {
      userName: userName,
      password: password,
      email: email,

    }).then(() => {
      console.log('success');

    });
  };
  /*

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setUserList(response.data);
    });
  };

  const updateEmployeeWage = (id) => {
    Axios.put("http://localhost:3001/update", { wage: newWage, id: id }).then(
      (response) => {
        setUserList(
          userList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  fullName: val.fullName,
                  country: val.country,
                  age: val.age,
                  email: val.email,
                  wage: newWage,
                }
              : val;
          })
        );
      }
    );
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setUserList(
        userList.filter((val) => {
          return val.id != id;
        })
      );
    });
  }; */

  const checkValidation = (e) => {
    const confPass = e.target.value
    setVerifyPassword(confPass);
    if (password != confPass) {
      setIsError("Confirm Password should be match with password")
    }
    else {
      setIsError("")
    }
  }

  useEffect(() => {

  }, [])

  return (
    <div className="login">
      <div className="information">
        <label>Username:</label>
        <input
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label>Verify Password:</label>
        <input
          type="password"
          onChange={(e) =>checkValidation(e)}
        />
        <label>Email:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <button onClick={addUser}>Register</button>
      </div>
      <div className="employees">
        <div className="error-massage">{isError}</div>
        {/* <button onClick={getEmployees}>Show Employees</button> */}

        {/* {userList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>fullName: {val.fullName}</h3>
                <h3>Age: {val.age}</h3>
                <h3>Country: {val.country}</h3>
                <h3>email: {val.email}</h3>
                <h3>Wage: {val.wage}</h3>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setNewWage(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateEmployeeWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

export default Register;