import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const AuthButton = () => {
  const { logout, loginWithRedirect, isAuthenticated} = useAuth0();

  const logoutWithRedirect = () => logout({ returnTo: window.location.origin });

  return isAuthenticated ? (
    <Logout onClick={() => logoutWithRedirect()} >Logout</Logout>

  ) : (
    <Login onClick={() => loginWithRedirect()} >Sign In</Login>
  );
};

const Login = styled.button`
`;

const Logout = styled.button`
`;

export default AuthButton;
