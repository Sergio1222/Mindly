//react
import React from "react";
//redux
import { useSelector } from "react-redux";
//bootstrap
import { Container } from "react-bootstrap";

const Statistics = () => {
  const {
    psyhologist,
    psychiatrist,
    psychotherapist,
    psyhologistLike,
    psychiatristLike,
    psychotherapistLike,
    psyhologistDislike,
    psychiatristDislike,
    psychotherapistDislike
  } = useSelector((state) => state.statisticsReducer.statistics);

  return (
    <Container className="text-center">
      <h3 className="mt-3 mb-5">Статистика</h3>
      <h5>Психологов: {psyhologist}</h5>
      <h5>Психиатров: {psychiatrist}</h5>
      <h5>Психотерапевтов: {psychotherapist}</h5>
      <br/>
      <h5>Лайкнутых Психологов: {psyhologistLike}</h5>
      <h5>Лайкнутых Психиатров: {psychiatristLike}</h5>
      <h5>Лайкнутых Психотерапевтов: {psychotherapistLike}</h5>
      <br/>
      <h5>Дизлайкнутых Психологов: {psyhologistDislike}</h5>
      <h5>Дизлайкнутых Психиатров: {psychiatristDislike}</h5>
      <h5>Дизлайкнутых Психотерапевтов: {psychotherapistDislike}</h5>
    </Container>
  );
};

export default Statistics;
