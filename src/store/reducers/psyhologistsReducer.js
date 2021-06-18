//action types
import { GET_PSHYHOLOGISTS, ADD_PSYHOLOGIST } from "../actionTypes/psyhologists";
//initial state
const initialState = {
  psyhologistsList: [],
};

const psyhologistsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PSHYHOLOGISTS:
      return { ...state, psyhologistsList: payload };

    case ADD_PSYHOLOGIST:
      return {...state, psyhologistsList: [...state.psyhologistsList, payload]};

    default:
      return state;
  }
};

export default psyhologistsReducer;
