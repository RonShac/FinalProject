import AuthButton from "./AuthButton";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import "../styles/navbar.css";

const Navbar = () => {
  const { user, isAuthenticated} = useAuth0();

  return (
    <Nav>
      <a href="/" className="logo-style">
        <Image src={process.env.PUBLIC_URL + "/LOGO.png"} />
      </a>
      <div className="navigation">
        <ul>
          <li className="active">
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/artists">Artists</a>
          </li>
          {isAuthenticated && (
            <li>
              <a href="/profile">Profile</a>
            </li>
          )}
          <AuthButton />
        </ul>
      </div>
    </Nav>
  );
};

const Login = styled.button`
`;

const Image = styled.img`
  margin-top: 1em;
  height: 3em;
  margin-left: 3em;
  filter: invert(100%);
`;

const Nav = styled.nav`
  display: flex;
  position: sticky;
  z-index: 1000;
  width: 100%;
  margin-bottom: -200px;
  height: 200px;
  background: transparent;
  justify-content: space-between;
  align-items: stretch;
  padding: 0 2em;
`;

export default Navbar;
