import styled from "styled-components";
import { useEffect, useState } from "react";

import ArtistCard from "../components/ArtistCard";

//each artist map list item
const Artists = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [artists, setArtists] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/artists")
    .then((res) => res.json())
    .then((json) => {
      // console.log(json);
      setArtists(json.data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);

  if (isLoading === true) {
    return <h1>Loading.....</h1>;
  }

  return (
    <Container>
      <div>
        <h1>artists</h1>
      </div>
      <div>
        <CardList>
          {artists && artists.map((artist) => <ArtistCard artist={artist} />)}
        </CardList>
      </div>
    </Container>
  );
};

const CardList = styled.ul``;

const Container = styled.div``;
export default Artists;
