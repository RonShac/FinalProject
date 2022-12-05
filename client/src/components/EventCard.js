import styled from "styled-components";
import { Link } from "react-router-dom";

const EventCard = ({ event, hideCost }) => {
  return (
    <li>
      <Container>
        <Card to={"/events/" + event.id} bg={process.env.PUBLIC_URL + event.image} >
          <H1>{event.name}</H1>
          {/* <Img src={process.env.PUBLIC_URL + event.image} /> */}
          <H2>{event.eventDate}</H2>
          {!hideCost && (
            <Span>Starting from {event.sales[0].cost}$</Span>
          )}
        </Card>
      </Container>
    </li>
  );
};

const Span =styled.span`
  
  
  justify-content: center;
  display: flex;
  border: solid;
  border-radius: 10px;
  background-color: yellow;
  
  margin: 0 4 4 0 ;
  font-size: 2em;

`

const Img = styled.img`
  width: 100%;
`;

const Container = styled.div`
  max-width: 34rem;
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  margin: 1em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  &:hover {
    transform: scale(1.2, 1.2);
  }
`;

const Card = styled(Link)`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ bg }) => `url(${bg}) `};

  height: 40em;
  width: 25em;
  margin-bottom: 1em;
  padding: 0.75rem;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: #d1d5db;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const H1 = styled.h1`
  font-size: 2rem;
  line-height: 1.75rem;
  font-weight: 600;
  align-items: center;
  text-align: center;
  color: white;
`;

const H2 = styled.h2`
  margin-bottom: 0.75rem;
  color: #374151;
  font-size: 20px;
  color: white;
  padding: 1em;
`;

export default EventCard;
