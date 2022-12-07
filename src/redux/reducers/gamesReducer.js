const initState = {
  popular: [],
  upcoming: [],
  newGames: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.popular,
        newGames: action.payload.popular,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
