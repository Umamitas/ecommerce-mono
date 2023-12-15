import { styled, keyframes } from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  padding-bottom: 2rem;
  font-family: "Manrope";
`;

export const AboutInnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

/* LEFT SIDE OF ABOUT SECTION */
export const LeftContainer = styled.div`
  flex: 1;
  align-items: center;
  padding: 10px;
  @media screen and (min-width: 1200px) {
    padding: 10px 100px;
  }
`;

export const LeftTitle = styled.h2`
  font-size: 2.5rem;
`;
export const OrangeTitle = styled.span`
  font-size: 3rem;
  color: #f09d51;
  letter-spacing: 6px;
  padding-left: 0.5rem;
  font-weight: bold;
`;

export const LeftText = styled.p`
  color: grey;
  font-size: 1rem;
  font-weight: bolder;
  @media screen and (max-width: 600px) {
    position: initial;
    width: 100%;
    height: auto;
    padding: 10px;
    box-sizing: border-box;
  }
`;

export const ExploreButton = styled.button`
  margin-top: 20px;
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
    width: 50%;
    margin-left: 25%;
    margin-bottom: 10%;
    padding: 10px;
  }
`;

/* RIGHT SIDE OF ABOUT SECTION */
export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

/* --- Border Animation --- */
const borderAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

export const FramedContainer = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  overflow: hidden;

  /* Add colored border using ::before */
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0.5rem solid #f09d51;
    box-sizing: border-box;
    animation: ${borderAnimation} 5s infinite;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 350px;
  width: 350px;
`;
/**
 

 */
