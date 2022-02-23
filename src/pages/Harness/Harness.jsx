import React from "react";
import Header from "../../components/Header/Header";
import RaceCardGroup from "../../components/RaceCardGroup/RaceCardGroup";
import { Subtitle } from "../Greyhound/styles/greyhound";
import { Background } from "../Home/styles/home";

const Harness = ({data}) => (
  <Background>
    <Header />
    <Subtitle>Harness</Subtitle>
    <RaceCardGroup data={data}/>
  </Background>
)

export default Harness;
