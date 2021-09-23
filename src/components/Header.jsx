/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <Container>
      <a>
        <img src="/img/logo.svg" alt="tesla-logo" />
      </a>

      <Menu>
        <p>
          <a href="#">Model S</a>
        </p>
        <p>
          <a href="#">Model 3</a>
        </p>
        <p>
          <a href="#">Model X</a>
        </p>
        <p>
          <a href="#">Model Y</a>
        </p>
        <p>
          <a href="#">Solar Roof</a>
        </p>
        <p>
          <a href="#">Solar Panels</a>
        </p>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu />
      </RightMenu>
      <BurgerNav>
        <li>
          <a href="#">Existing inventory</a>
        </li>
        <li>
          <a href="#">Existing inventory</a>
        </li>
        <li>
          <a href="#">Existing inventory</a>
        </li>
        <li>
          <a href="#">Existing inventory</a>
        </li>
        <li>
          <a href="#">Existing inventory</a>
        </li>
        <li>
          <a href="#">Existing inventory</a>
        </li>
        <li>
          <a href="#">Existing inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  left: 0;
  top: 0;
  right: 0;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  list-style: none;
`;
