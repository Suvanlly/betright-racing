import React from "react";
import { Link } from "react-router-dom";
import { HeaderWrapper, Title, Category, CatergoryWrap } from "./styles/header";

const Header = () => (
  <HeaderWrapper>
    <Title>Upcoming racing</Title>
    <CatergoryWrap>
      <Link to="/greyhound">
        <Category id="greyhound">Greyhound</Category>
      </Link>
      <Link to="/harness">
        <Category id="harness">Harness</Category>
      </Link>
      <Link to="/thoroughbred">
        <Category id="thoroughbred">Thoroughbred</Category>
      </Link>
    </CatergoryWrap>
  </HeaderWrapper>
);

export default Header;
