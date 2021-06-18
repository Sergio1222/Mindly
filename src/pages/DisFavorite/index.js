//react
import React from "react";
//redux
import { useSelector } from "react-redux";
//bootstrap
import { Container } from "react-bootstrap";
//components
import UsersList from '../../components/UsersList'

const DisFavorite = () => {
    
  const disfavorite = useSelector((state) => state.favoriteReducer.disFavorite);

  return (
    <Container>
      <UsersList users={disfavorite}/>
    </Container>
  );
};

export default DisFavorite;
