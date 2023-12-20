import React, { useEffect, useState } from "react";
import mailSvg from "./assets/mail.svg";
import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/cw.svg";
import Table from "./components/Table";
import Swal from "sweetalert2";
const url = "https://randomuser.me/api/";
function App() {
  const [labels, setLabels] = useState();
  const [data, setData] = useState();
  const [addUser, setAddUser] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    picture: "",
    dob: "",
    location: "",
    phone: "",
    gender: "",
    login: "",
  });
  const {
    name: { first, last },
    email,
    dob: { age },
    location: { street },
    phone,
    picture: { large },
    login: { password },
    gender,
  } = user;
  const fetchUsers = async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setUser(users.results[0]);
      handleMouseEnter(
        `${users.results[0].name.first} ${users.results[0].name.last}`,
        "name"
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleMouseEnter = (info, category) => {
    setData(info);
    setLabels(category);
  };

  const handleAdd = () => {
  if(addUser.some((user)=>user.email === email)){
    Swal.fire({
      text: "You cannot add the same user twice.",
      icon: 'warning',
      iconColor:"#041E31",
      confirmButtonText: 'Ok',
      confirmButtonColor: "#041E31",
    })
 }else{
      setAddUser([
        ...addUser,
        {
          firstname: `${first} ${last}`,
          email: email,
          phone: phone,
          age: age,
        },
      ]);
  }
  
  };

  return (
    <main>
      <div className="block bcg-orange">

      </div>
      <div className="block">
        <div className="container">
          <img src={large} alt="random user" className="user-img" />
          <p className="user-title">My {labels} is</p>
          <p className="user-value">{data}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseEnter={() => handleMouseEnter(`${first} ${last}`, "name")}
            >
              <img src={gender === "female" ?  womanSvg : manSvg} alt="user" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseEnter={() => handleMouseEnter(email, "email")}
            >
              <img src={mailSvg} alt="mail" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="age"
              onMouseEnter={() => handleMouseEnter(age, "age")}
            >
              <img src={gender === "female" ? womanAgeSvg : manAgeSvg} alt="age" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseEnter={() => handleMouseEnter(street.name, "street")}
            >
              <img src={mapSvg} alt="map" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseEnter={() => handleMouseEnter(phone, "phone")}
            >
              <img src={phoneSvg} alt="phone" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseEnter={() => handleMouseEnter(password, "password")}
            >
              <img src={padlockSvg} alt="lock" id="iconImg" />
            </button>
          </div>
          <div className="btn-group">
            <button className="btn" type="button" onClick={fetchUsers}>
              new user
            </button>
            <button className="btn" type="button" onClick={handleAdd}>
              add user
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>
              {addUser.map((item) => (
                <Table {...item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default App;
