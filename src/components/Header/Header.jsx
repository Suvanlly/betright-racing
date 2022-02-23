import React from "react";
import { Link } from "react-router-dom";
import { HeaderWrapper, Title, Category, CatergoryWrap } from "./styles/header";

const Header = () => (
  <HeaderWrapper>
    <Title>Upcoming racing</Title>
    <CatergoryWrap>
      <Link to="/greyhound">
        <Category>Greyhound</Category>
      </Link>
      <Link to="/harness">
        <Category>Harness</Category>
      </Link>
      <Link to="/thoroughbred">
        <Category>Thoroughbred</Category>
      </Link>
    </CatergoryWrap>
  </HeaderWrapper>
);

export default Header;
