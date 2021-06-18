//react
import React from "react";
//router
import { useHistory } from "react-router-dom";
//bootstrap
import { Navbar, Nav } from "react-bootstrap";
//styles
import "./style.css";

const Navigation = () => {
  const history = useHistory();

  const goToMain = () => history.push("/");

  const goToAdd = () => history.push("/add");

  const goToFavorite = () => history.push("/favorite");

  const goToDisfavorite = () => history.push("/disfavorite");

  const goToStatistics = () => history.push("/statistics");

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand onClick={goToMain} className="nav-logo">
        App
      </Navbar.Brand>
      <Nav>
        <Nav.Link onClick={goToMain}>Главная</Nav.Link>
        <Nav.Link onClick={goToAdd}>Добавить психолога</Nav.Link>
        <Nav.Link onClick={goToFavorite}>Лайкнутые</Nav.Link>
        <Nav.Link onClick={goToDisfavorite}>Дизлайкнутые</Nav.Link>
        <Nav.Link onClick={goToStatistics}>Статистика</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
