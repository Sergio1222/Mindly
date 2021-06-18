//react
import React from "react";
//redux
import { useSelector } from "react-redux";
//bootstrap
import { Container } from "react-bootstrap";
//components
import UserList from "../../components/UsersList";

const MainPage = () => {
  const psyhologists = useSelector((state) => state.psyhologistsReducer.psyhologistsList);

  return (
    <Container>
      <UserList users={psyhologists} />
    </Container>
  );
};

export default MainPage;
