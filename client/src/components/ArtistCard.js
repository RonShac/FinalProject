import styled from "styled-components";
import { Link } from "react-router-dom";

const ArtistCard = ({ artist }) => {
  return (
    <li>
      <Card to={"/artist/" + artist.id}>
        <h1>{artist.nickname}</h1>

        <Image src={process.env.PUBLIC_URL + artist.image} height="3.4rem" />

        <h2> {artist.country}</h2>
        <h3>{artist.email}</h3>
        <h4 className="hover"> view artist </h4>
      </Card>
    </li>
  );
};

const Image = styled.img`
  width: 100px;
  height: 100px;
  min-width: 200px;
  max-width: 200px;
`;

const Card = styled(Link)`
  display: inline-grid;
  flex-direction: row;
  border: solid;

  margin: 0 0.7 10 0.7;
  align-items: center;
  text-align: center;
  padding: 0 93 0 93;

  &:hover {
    background-color: brown;
  }
`;

export default ArtistCard;
