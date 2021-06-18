//action types
import { GET_FAVORITE, ADD_FAVORITE, ADD_DISFAVORITE, GET_DISFAVORITE, DELETE_FAVORITE, DELETE_DISFAVORITE } from "../actionTypes/psyhologists";

//initial state
const initialState = {
  favoriteList: [],
  disFavorite: []
};

const favoriteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FAVORITE:
        return { ...state, favoriteList: payload };

    case ADD_FAVORITE:
        return { ...state, favoriteList: [...state.favoriteList, payload] };

    case DELETE_FAVORITE: 
        return {...state, favoriteList: state.favoriteList.filter(el => el._id !== payload._id)}

    case GET_DISFAVORITE:
        return {...state, disFavorite: payload}

    case ADD_DISFAVORITE:
        return {...state, disFavorite: [...state.disFavorite, payload] }

    case DELETE_DISFAVORITE:
        return {...state, disFavorite: state.disFavorite.filter(el => el._id !== payload._id)}

    default:
        return state;
  }
};

export default favoriteReducer;
