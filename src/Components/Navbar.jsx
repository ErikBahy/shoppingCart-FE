import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ButtonContainer } from "./Button";
import styled from "styled-components";
import { ProductContext } from "../context";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import CustomSignoutButton from "./CustomSingOut";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Auth } from "aws-amplify";

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: none;
  }
`;

function Navbar() {
  const navbarContext = useContext(ProductContext);
  const { user } = navbarContext;

  return (
    <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <AccountCircleOutlinedIcon
            style={{ fill: "white" }}
            fontSize="large"
          />
        </li>
        <div className="nav-link">{user}</div>

        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <CustomSignoutButton />
        <ButtonContainer>
          <span className="mr-2 ">
            <i className="fas fa-cart-plus"></i>
          </span>
          My cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
}

export default Navbar;
