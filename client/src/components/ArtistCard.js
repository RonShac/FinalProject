import styled from "styled-components";
import { Link } from "react-router-dom";

//<Image src={process.env.PUBLIC_URL + "/logo192.png"} /> react logo

const ArtistCard = ({ artist }) => {
  return (
    <li>
      <Card
        to={"/artists/" + artist.id}
     
        bg={process.env.PUBLIC_URL + artist.image}
      >
        <H1>{artist.nickname}</H1>
        <Div>
          <h2> {artist.country}</h2>
          <h3>{artist.email}</h3>
          <h4 className="hover"></h4>
        </Div>
      </Card>
    </li>
  );
};

//const Image = styled.img``;

const H1 = styled.h1`
  color: green;
  font-style: italic;
  font-size: 32px; ;
`;

const Card = styled(Link)`
  height: 40em;
  width: 25em;
  text-decoration: none;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ bg }) => `url(${bg}) `};

  color: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 2rem;

  &:hover {
    transform: scale(1.2, 1.2);
  }
`;

const Div = styled.div`
  font-style: italic;
  font-size: 32px;
  color: white;
  background-color: black;
`;

export default ArtistCard;
