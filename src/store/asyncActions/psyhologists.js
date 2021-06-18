//action creators
import {
  getPsyhologists,
  addPsyhologist,
  getFavorite,
  addFavorite,
  addDisFavorite,
  getDisFavorite,
  deleteDisFavorite,
  deleteFavorite,
} from "../actionCreators/psyhologistsCreators";
//constants
import {API} from '../../constants/API'

export const addNewPsyhologist = (user) => {
  return async (dispatch) => {
    const data = JSON.stringify(user);

    const res = await fetch(`${API}psyhologists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    const newUser = await res.json();

    dispatch(addPsyhologist(newUser));

    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  };
};

export const updatePsyhologist = async (id, { favorite, disFavorite }) => {
  //data is must object
  const body = JSON.stringify({ id, favorite, disFavorite });

  const res = await fetch(`${API}psyhologists`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });

  const updatedUser = await res.json();

  return updatedUser;
};

//нужно вынести в отдельный файл, ибо плохо поддерживаемая тема, но у нас маленькое приложение, поэтому ок
// (такие намеренные ошибки будут дальше)

export const addLike = (id) => {
  return async (dispatch) => {
    const data = { favorite: true, disFavorite: false };

    const res = await updatePsyhologist(id, data);

    dispatch(deleteDisFavorite(res));
    dispatch(addFavorite(res));
  };
};

export const addDislike = (id) => {
  return async (dispatch) => {
    const data = { favorite: false, disFavorite: true };

    const res = await updatePsyhologist(id, data);

    dispatch(deleteFavorite(res));
    dispatch(addDisFavorite(res));
  };
};

export const fetchPsyhologists = () => {
  return (dispatch) => {
    fetch(`${API}psyhologists`)
      .then((res) => res.json())
      .then((res) => dispatch(getPsyhologists(res)));
  };
};

export const fetchFavorite = () => {
  return (dispatch) => {
    fetch(`${API}favorite`)
      .then((res) => res.json())
      .then((res) => dispatch(getFavorite(res)));
  };
};

export const fetchDisFavorite = () => {
  return (dispatch) => {
    fetch(`${API}disfavorite`)
      .then((res) => res.json())
      .then((res) => dispatch(getDisFavorite(res)));
  };
};
