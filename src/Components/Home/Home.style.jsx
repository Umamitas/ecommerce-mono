import styled from "styled-components";
import BackgroundImage from "../../Assets/img/hero-bcg.jpeg";

export const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.4)
    ),
    url(${BackgroundImage}) center/cover;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 60vh;
  }
`;

export const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;

export const Name = styled.p`
  display: inline;
  padding-left: 0.5rem;
  font-size: 3rem;
  letter-spacing: 10px;

  @media screen and (max-width: 600px) {
    display: block;
  }
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

  @media screen and (max-width: 600px) {
    margin-top: 5rem;
  }
`;
