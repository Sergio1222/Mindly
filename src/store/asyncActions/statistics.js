//actions creators
import { getStatistics } from "../actionCreators/statisticsCreators";
//constants
import { API } from "../../constants/API";

export const fetchStatistics = () => {
  return (dispatch) => {
    fetch(`${API}statistics`)
      .then((res) => res.json())
      .then((res) => dispatch(getStatistics(res)));
  };
};
