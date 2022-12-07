import axios from "axios";
import { popularGamesURL, upconingGamesURL, newGamesURL } from "../../data/api";

// Action Creators
export const loadGames = () => async (dispatch) => {
  const popularGamesData = await axios.get(popularGamesURL());
  const upcomingGamesData = await axios.get(upconingGamesURL());
  const newGamesData = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
