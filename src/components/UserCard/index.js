//react
import React, { useState } from "react";
//redux
import { useDispatch } from "react-redux";
import { addLike, addDislike } from "../../store/asyncActions/psyhologists";
//bootstrap
import { Card, Image, Button } from "react-bootstrap";
//styles
import "./style.css";

const UserCard = ({ id, name, email, type, favorite, disFavorite }) => {
  const dispatch = useDispatch();

  const [like, setLike] = useState(favorite);
  const [dislike, setDislike] = useState(disFavorite);

  const likeUser = (userId) => {
    setLike(true);
    setDislike(false);
    dispatch(addLike(userId));
  };

  const dislikeUser = (userId) => {
    setLike(false);
    setDislike(true);
    dispatch(addDislike(userId));
  };

  return (
    <Card>
      <Card.Body className="d-flex">
        <Image
          className="user-card-img"
          src="https://html5css.ru/w3css/img_avatar3.png"
          rounded
        />
        <div>
          <h3>{name}</h3>
          <p>{email}</p>
          <p>{type}</p>
          {like ? <p className="user-card-green-text">FAVORITE</p> : undefined}
          {dislike ? (
            <p className="user-card-red-text">DISFAVORITE</p>
          ) : undefined}
        </div>
        <div className="user-card-buttons-container">
          {!like ? (
            <Button
              onClick={() => likeUser(id)}
              className="user-card-button"
              variant="success"
            >
              Favorite
            </Button>
          ) : undefined}
          {!dislike ? (
            <Button
              onClick={() => dislikeUser(id)}
              className="user-card-button"
              variant="danger"
            >
              Dislike
            </Button>
          ) : undefined}
        </div>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
