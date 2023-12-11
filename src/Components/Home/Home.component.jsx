import {
  HomepageContainer,
  Heading,
  Name,
  ExploreButton,
  OrangeName,
} from "./Home.style";

const Home = () => {
  return (
    <HomepageContainer>
      <Heading>
        Welcome to {" "}
        <Name>
          Comfy<OrangeName>House</OrangeName>
        </Name>
      </Heading>
      <ExploreButton>EXPLORE</ExploreButton>
    </HomepageContainer>
  );
};
export default Home;
