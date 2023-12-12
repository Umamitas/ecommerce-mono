import styled from "styled-components";
import BackgroundImage from "../../Assets/img/hero-bcg.jpeg";

export const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "Manrope";
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.4)
    ),
    url(${BackgroundImage}) center/cover;
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const Name = styled.h1`
  display: inline;
  padding-left: 0.5rem;
  font-size: 3rem;
  letter-spacing: 10px;
`;
export const OrangeName = styled.span`
  font-size: 3rem;
  letter-spacing: 10px;
  color: #f09d51;
`;

export const ExploreButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: transparent;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background-color: #f09d51;
    color: #fff;
  }
`;
