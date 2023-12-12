import {
  AboutContainer,
  LeftContainer,
  RightContainer,
  AboutInnerContainer,
  LeftTitle,
  OrangeTitle,
  LeftText,
  ExploreButton,
  FramedContainer,
  Image
} from "./About.style";
import AboutLogo from "../../Assets/img/product-4.jpeg";

const About = () => {
  return (
    <AboutContainer>
      <AboutInnerContainer>
        <LeftContainer>
          <LeftTitle>
            About <OrangeTitle>Us</OrangeTitle>
          </LeftTitle>
          <LeftText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo
            illo rerum eos? Doloremque excepturi obcaecati earum impedit
            voluptate nisi ullam eveniet perspiciatis incidunt adipisci
            repellendus voluptatum, iste saepe enim?
          </LeftText>
          <ExploreButton>EXPLORE</ExploreButton>
        </LeftContainer>
        <RightContainer>
          <FramedContainer>
            <Image src={AboutLogo}/>
          </FramedContainer>
        </RightContainer>
      </AboutInnerContainer>
    </AboutContainer>
  );
};
export default About;
