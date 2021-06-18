//action types
import {
  GET_PSHYHOLOGISTS,
  ADD_PSYHOLOGIST,
  GET_FAVORITE,
  ADD_FAVORITE,
  ADD_DISFAVORITE,
  DELETE_FAVORITE,
  DELETE_DISFAVORITE,
  GET_DISFAVORITE
} from "../actionTypes/psyhologists";

export const getPsyhologists = (data) => ({ type: GET_PSHYHOLOGISTS, payload: data });
export const addPsyhologist = (data) => ({ type: ADD_PSYHOLOGIST, payload: data });

export const getFavorite = (data) => ({ type: GET_FAVORITE, payload: data });
export const addFavorite = (data) => ({ type: ADD_FAVORITE, payload: data });
export const deleteFavorite = (data) => ({ type: DELETE_FAVORITE, payload: data })

export const getDisFavorite = (data) => ({ type: GET_DISFAVORITE, payload: data })
export const addDisFavorite = (data) => ({ type: ADD_DISFAVORITE, payload: data });
export const deleteDisFavorite = (data) => ({ type: DELETE_DISFAVORITE, payload: data })

