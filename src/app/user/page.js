import React from "react";
import Menu from "../components/menu";
async function getData() {
  let res = await fetch("https://dummyjson.com/users");
  let result = await res.json();
  return result.users;
}

const page = async () => {
  let users = await getData();

  return (
    <div className="bg-foreground">
      <Menu />
      {users.map((item, index) => {
        return (
          <div key={index}>
            <h1 className="font-bold">{item.firstName}</h1>
            <p>Age: {item.age}</p>
            <p>Gender: {item.gender}</p>
            <p>Email: {item.email}</p>
            <p>Blood Group: {item.bloodGroup}</p>

            <br />
          </div>
        );
      })}
    </div>
  );
};

export default page;
