import React from "react";
import Header from "../../components/Header/Header";
import RaceCardGroup from "../../components/RaceCardGroup/RaceCardGroup";
import { Background } from "../Home/styles/home";
import { Subtitle } from "./styles/greyhound";

const Greyhound = ({data}) => (
  <Background>
    <Header />
    <Subtitle>Greyhound</Subtitle>
    <RaceCardGroup data={data}/>
  </Background>
)

export default Greyhound;
