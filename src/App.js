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
import Table from "./components/Table";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {

  const [user,setUser]=useState([])
  const [addUser, setAddUser] = useState([])
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
  const {name,email,dob,location,phone,login,picture} =user
const [data, setData] = useState();

const handleMouseEnter = (info) => {
  setData(info)

};




const handleAdd =()=>{
  setAddUser([...addUser,{
    firstname: name?.first, 
    email: email, 
    phone: phone, 
   age: dob?.age,
  }]);

}
  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <img src={picture?.large} alt="random user" className="user-img" />
          <p className="user-title">My name is</p>
          <p className="user-value">{data}</p>
          <div className="values-list">
            <button className="icon" name="name" onMouseEnter={() => handleMouseEnter(name?.first)}>
              <img
                src={womanSvg}
                alt="user"
                id="iconImg"
              />
            </button>
            <button className="icon" name="email" onMouseEnter={() => handleMouseEnter(email)}>
              <img src={mailSvg} alt="mail" id="iconImg" />
            </button>
            <button className="icon" name="age" onMouseEnter={() => handleMouseEnter(dob?.age)}>
              <img src={womanAgeSvg} alt="age" id="iconImg" />
            </button>
            <button className="icon" name="street" onMouseEnter={() => handleMouseEnter(location?.street.name)}>
              <img src={mapSvg} alt="map" id="iconImg" />
            </button>
            <button className="icon" name="phone" onMouseEnter={() => handleMouseEnter(phone)}>
              <img src={phoneSvg} alt="phone" id="iconImg" />
            </button>
            <button className="icon" name="password" onMouseEnter={() => handleMouseEnter(login?.password)}>
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
            {addUser.map(item => <Table {...item}/>)}
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
