import styled from "styled-components";
import { Link } from "react-router-dom";

const TicketType = ({ type, eventId, disabled }) => {
  const soldout = type.left <= 0;

  return (
    <Content soldout={soldout}>
      <DIV>
        <Name>{type.name}</Name>
        <Cost>${type.cost} CAD</Cost>
      </DIV>
      {soldout && (
        <SO>Sold Out!</SO>
      )}
      {!soldout && disabled && (
      <Disabled>Login to Buy - {type.left} Left</Disabled>
      )}
      {!soldout && !disabled && (
        <StyledLink to={`/events/${eventId}/buy/${type.id}`} >Buy Now - {type.left} Left</StyledLink>
      )}
    </Content>
  );
};

export default TicketType;

const SO = styled.span`
  font-size: 40px;
  font-family: sans-serif;
`;

const Disabled = styled.span`
  text-decoration: none;
  border: solid;
  border-radius: 15px;
  margin: 1em;
  padding: 1em;
  font-size: 20px;
  background-color: yellow;
  opacity: 0.5;
  cursor: not-allowed;
`;

const Name = styled.span`
  font-size: 25px; ;
`;

const Cost = styled.span`
  font-size: 25px;
`;

const Content = styled.li`
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  height: 10em;
  width: 43em;
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  background-color: ${({ soldout }) => (soldout ? `gray` : `white`)};
  opacity: ${({ soldout }) => (soldout ? `0.7` : `1`)};
`;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding-top: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  border: solid;
  border-radius: 15px;
  margin: 1em;
  padding: 1em;
  font-size: 20px;
  background-color: yellow;
  &:hover {
    transform: scale(1.2, 1.2);
  }
`;
