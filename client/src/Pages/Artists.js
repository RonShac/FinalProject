import styled from "styled-components";
import { useEffect, useState } from "react";

import Searchbar from "../components/Searchbar";

import ArtistCard from "../components/ArtistCard";
import ArtistHero from "../components/ArtistHero";

//each artist map list item
const Artists = ({useSlider = false}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [artists, setArtists] = useState(null);
  const [search, setSearch] = useState("");

  const handleSearch = (value) => setSearch(value);

  useEffect(() => {
    setIsLoading(true);
    let url = "/api/artists";
    if (search !== "") {
      url = url + `?search=${search}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setArtists(json.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [search]);

  if (isLoading === true) {
   // return <h1>Loading.....</h1>;
  }

  return (
    <Container>
      <ArtistHero image={process.env.PUBLIC_URL + "/images/artistsBG.jpg"} />
      <Div>
        <Search handleSearch={handleSearch} />
        <CardList>
          {artists?.length === 0 && (
            <H2>Could not find any artists!</H2>
          )}
          {artists && artists.map((artist) => <ArtistCard artist={artist} key={artist.id} />)}
        </CardList>
      </Div>
    </Container>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const H2 = styled.h1`
  margin-top: 1em;
  font-size: 30px;
  font-weight: 500;
  color: white;
`

const Search = styled(Searchbar)`
  align-self: center;
  justify-self: center;

  align-items: center;
`;

const CardList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
  background-color: black;
  padding: 2em;
  justify-content: center;
`;

const Container = styled.div``;

export default Artists;
