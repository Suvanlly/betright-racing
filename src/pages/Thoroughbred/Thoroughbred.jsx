import React from "react";
import Header from "../../components/Header/Header";
import RaceCardGroup from "../../components/RaceCardGroup/RaceCardGroup";
import { Subtitle } from "../Greyhound/styles/greyhound";
import { Background } from "../Home/styles/home";

const Thoroughbred = ({data}) => (
  <Background>
    <Header />
    <Subtitle>Thoroughbred</Subtitle>
    <RaceCardGroup data={data}/>
  </Background>
)

export default Thoroughbred;
