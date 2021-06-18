//action types
import { GET_STATISTICS } from "../actionTypes/statistics";
//initial state
const initialState = {
  statistics: {},
};

const statisticsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_STATISTICS:
      return { ...state, statistics: payload };

    default:
      return state;
  }
};

export default statisticsReducer;
