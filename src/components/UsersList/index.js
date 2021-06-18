//react
import React from "react";
//components
import UserCard from "../UserCard";

const UsersList = ({ users }) => {
  return (
    <div>
      {users.map(({ _id, name, email, type, favorite, disFavorite }) => (
        <div className="mt-3 mb-3" key={_id}>
          <UserCard
            id={_id}
            name={name}
            email={email}
            type={type}
            favorite={favorite}
            disFavorite={disFavorite}
          />
        </div>
      ))}
    </div>
  );
};

export default UsersList;
