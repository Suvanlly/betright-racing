import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
`
export const Title = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-size: 48px;
  text-align: center;
  margin-bottom: 50px;
  padding-top: 50px;
`
export const CatergoryWrap = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Category = styled.button`
  background-color: #ededed;
  border-radius: 5px;
  border: 1px solid #999;
  cursor: pointer;
  color: ##dfdfdf;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  &:hover {
    background-color: #dfdfdf;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`