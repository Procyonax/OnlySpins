import { useState, useEffect } from "react";
import ShopItems from "../Components/ShopItems";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
  text-align: center;
  font-size: 1.5em;
  color: #fff;
  background-color: #062c43;
  margin: 0;
  padding: 1em;
`;


const ShopFrontContainer = () => {



  return (
    <>
      <Title>OnlySpins&trade;</Title>
    </>
  );

  };

export default ShopFrontContainer;
