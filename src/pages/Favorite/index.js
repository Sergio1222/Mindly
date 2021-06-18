//react
import React from "react";
//redux
import { useSelector } from "react-redux";
//bootstrap
import { Container } from "react-bootstrap";
//components
import UsersList from "../../components/UsersList";

const Favorite = () => {
  const favorite = useSelector((state) => state.favoriteReducer.favoriteList);

  return (
    <Container>
      <UsersList users={favorite} />
    </Container>
  );
};

export default Favorite;
