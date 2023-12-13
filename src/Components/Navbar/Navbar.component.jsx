import {
  NavbarContainer,
  LeftContainer,
  Logo,
  Phone,
  RightContainer,
  NavbarInnerContainer,
} from "./Navbar.style";
import LogoImg from "../../Assets/img/logo.svg";
import Cart from "../Cart/Cart.component";
import Dropdown from "../Cart/Dropdown/Dropdown.component";

import { CartContext } from "../../Context/Cart.context";

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";

const Navbar = () => {
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
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
            <Cart />
          </RightContainer>
        </NavbarInnerContainer>
      </NavbarContainer>
      {isCartOpen && <Dropdown />}
    </>
  );
};
export default Navbar;
