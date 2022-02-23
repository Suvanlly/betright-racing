import React from "react";
import Header from "../../components/Header/Header";
import RaceCardGroup from "../../components/RaceCardGroup/RaceCardGroup";
import Subtitle from "../../components/Subtitle/Subtitle";
import { Background } from "../Home/styles/home";

const Thoroughbred = ({data}) => (
  <Background>
    <Header />
    <Subtitle title="Thoroughbred" id="Thoroughbred"/>
    <RaceCardGroup data={data}/>
  </Background>
)

export default Thoroughbred;
