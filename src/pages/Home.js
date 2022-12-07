import React, { useEffect } from "react";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../redux/actions/gamesAction";
import Game from "../components/Game";
// STYLES
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  // useDispatch
  const dispatch = useDispatch();
  // useEffect
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  // Data-ga kirish
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <GameList>
      <h2>Home page</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            key={game.id}
            name={game.name}
            released={game.released}
            img={game.background_image}
          />
        ))}
      </Games>
    </GameList>
  );
};

// STYLES
const GameList = styled(motion.div)``;
const Games = styled(motion.div)``;

export default Home;
