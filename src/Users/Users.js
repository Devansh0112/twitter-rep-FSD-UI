import React from "react";
import "./Users.css";
import User from "./User/User";
import Navbar from "../Navbar/Navbar";

const userDataTemp = [
  { avatar: null, Name: "Arun", message: "Some bio given by the user" },
  {
    avatar: null,
    Name: "Jaswanth",
    message: "politics polictics politics",
  },
  {
    avatar: null,
    Name: "John",
    message: "Some day I will be a doctor",
  },
  {
    avatar: null,
    Name: "Geeta",
    message: "It can not always be night",
  },
  {
    avatar: null,
    Name: "Boman",
    message: "it is a wonderful day",
  },
  {
    avatar: null,
    Name: "Shruti",
    message: "one extra tweet for fun",
  },
];

function Users() {
  const isLoggedIn = window.localStorage.getItem("user");
  if (!isLoggedIn) window.location.href = "login";
  return (
    <div>
      <Navbar active={2} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            {userDataTemp.map((item) => (
              <User users={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
