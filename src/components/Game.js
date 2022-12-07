import React from "react";
// STYLES
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, released, img }) => {
  return (
    <div>
      <h3>Game Name: {name}</h3>
      <p>Released Date: {released}</p>
      <img src={img} alt="img" />
    </div>
  );
};

export default Game;
