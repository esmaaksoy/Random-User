import React, { useState, useEffect } from "react";
import mailSvg from "./assets/mail.svg";
import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/cw.svg";
import Footer from "./components/footer/Footer";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
 
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    location: "",
    phone: "",
  });
  const fetchUsers = async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setUser(users.results[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const {name}=user

 console.log(name)
console.log(user)
  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <img src={defaultImage} alt="random user" className="user-img" />
          <p className="user-title">My name is</p>
          <p className="user-value"></p>
          <div className="values-list">
            <button className="icon" name="name" >
              <img
                src={womanSvg}
                alt="user"
                id="iconImg"
             
              />
            </button>
            <button className="icon" name="email" >
              <img src={mailSvg} alt="mail" id="iconImg" />
            </button>
            <button className="icon" name="age" >
              <img src={womanAgeSvg} alt="age" id="iconImg" />
            </button>
            <button className="icon" name="street" >
              <img src={mapSvg} alt="map" id="iconImg" />
            </button>
            <button className="icon" name="phone" >
              <img src={phoneSvg} alt="phone" id="iconImg" />
            </button>
            <button className="icon" name="password" >
              <img src={padlockSvg} alt="lock" id="iconImg" />
            </button>
          </div>
          <div className="btn-group">
            <button className="btn" type="button" onClick={fetchUsers}>
              new user
            </button>
            <button className="btn" type="button">
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
              <tr className="body-tr"></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;
