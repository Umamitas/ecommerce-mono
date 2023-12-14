import { styled, keyframes } from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  padding-bottom: 2rem;
  font-family: "Manrope";
`;

/* LEFT SIDE OF ABOUT SECTION */
export const LeftContainer = styled.div`
  flex: 50%;
  align-items: center;
  padding-left: 100px;
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
`;
/* RIGHT SIDE OF ABOUT SECTION */

export const RightContainer = styled.div`
  flex: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 100px;
`;

/* --- Animazione Bordo colorato --- */
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

  /* Aggiunge il bordo colorato utilizzando ::before */
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0.5rem solid #f09d51; /* Imposta lo spessore e il colore del bordo */
    box-sizing: border-box;
    animation: ${borderAnimation} 5s infinite; /* Modifica la durata e le opzioni a tuo piacimento */
  }
`;

// Creazione del componente dell'immagine
export const Image = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 350px;
  width: 350px;
`;

export const AboutInnerContainer = styled.div`
  width: 100%;
  display: flex;
  height: 60vh;
`;
