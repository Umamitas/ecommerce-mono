import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  z-index: 1;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const LeftContainer = styled.div`
  flex: 80%;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    position: relative;
    top: 0.6rem;
  }
`;

export const Phone = styled.div`
  position: relative;
  left: 60%;

  @media screen and (max-width: 600px) {
    position: absolute;
    top: 0.7rem;
    left: 1.3rem;
    color: rgba(0, 0, 0, 0.7);
    font-size: 0.8rem;
  }
`;

export const RightContainer = styled.div`
  flex: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 50px;
`;
