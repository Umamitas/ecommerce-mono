import React from "react";
import { Link } from "react-scroll";
import {
  HomepageContainer,
  Heading,
  Name,
  ExploreButton,
  OrangeName,
} from "./Home.style";

const Home = () => {
  return (
    <HomepageContainer id="home">
      <Heading>
        Welcome to
        <Name>
          Comfy<OrangeName>House</OrangeName>
        </Name>
      </Heading>
      <Link to="store" smooth={true} duration={500}>
        <ExploreButton>EXPLORE</ExploreButton>
      </Link>
    </HomepageContainer>
  );
};

export default Home;
