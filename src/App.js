//react
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDisFavorite,
  fetchFavorite,
  fetchPsyhologists,
} from "./store/asyncActions/psyhologists";
import { fetchStatistics } from './store/asyncActions/statistics'
//pages
import MainPage from "./pages/MainPage";
import AddPsyhologist from "./pages/AddPsyhologist";
import Favorite from "./pages/Favorite";
import DisFavorite from "./pages/DisFavorite";
import Statistics from './pages/Statistics'
//components
import Navigation from "./components/NavBar";

const App = () => {
  const dispatch = useDispatch();
  const psyhologists = useSelector(
    (state) => state.psyhologistsReducer.psyhologistsList
  );

  useEffect(() => {
    if (psyhologists.length <= 0) {
      dispatch(fetchPsyhologists());
      dispatch(fetchFavorite());
      dispatch(fetchDisFavorite());
      dispatch(fetchStatistics())
    }
  }, [dispatch, fetchDisFavorite, fetchFavorite, fetchPsyhologists, fetchStatistics, psyhologists]);

  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/add" component={AddPsyhologist} />
          <Route path="/favorite" component={Favorite} />
          <Route path="/disfavorite" component={DisFavorite} />
          <Route path="/statistics" component={Statistics} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
