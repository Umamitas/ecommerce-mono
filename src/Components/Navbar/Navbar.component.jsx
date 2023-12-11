import {
  NavbarContainer,
  LeftContainer,
  Logo,
  Phone,
  RightContainer,
  CartResume,
  NavbarInnerContainer,
} from "./Navbar.style";
import LogoImg from "../../Assets/img/logo.svg";
import Cart from "../Cart/Cart.component";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo src={LogoImg}></Logo>
          <Phone>
            <FontAwesomeIcon icon={faPhone} />
            <span> + 123 456 789</span>
          </Phone>
        </LeftContainer>
        <RightContainer>
          <CartResume>
            <Cart />
          </CartResume>
        </RightContainer>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
};
export default Navbar;
