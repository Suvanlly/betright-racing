import React from "react";
import Header from "../../components/Header/Header";
import RaceCardGroup from "../../components/RaceCardGroup/RaceCardGroup";
import Subtitle from "../../components/Subtitle/Subtitle";
import { Background } from "../Home/styles/home";


const Greyhound = ({data}) => (
  <Background>
    <Header />
    <Subtitle title="Greyhound" id="greyhound" />
    <RaceCardGroup data={data}/>
  </Background>
)

export default Greyhound;
