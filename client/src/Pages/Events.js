import styled from "styled-components";
import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import EventCard from "../components/EventCard";
import EventHero from "../components/EventHero";

const Events = ({useSlider = false}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState(null);
  const [search, setSearch] = useState("");

  const handleSearch = (value) => setSearch(value);

  useEffect(() => {
    setIsLoading(true);
    let url = "/api/events";
    if (search !== "") {
      url = url + `?search=${search}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setEvents(json.data);
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
      <EventHero image={process.env.PUBLIC_URL + "/images/eventBG.jpg"} />
      <Div>
        <Search handleSearch={handleSearch} />
        <EventList>
          {events?.length === 0 && (
            <H2>Could not find any events!</H2>
          )}
          {events && events.map((event) => <EventCard event={event} key={event.id} />)}
        </EventList>
      </Div>
    </Container>
  );
};

const Search = styled(Searchbar)`
  align-self: center;
  justify-self: center;
  align-items:center;
`;

const H2 = styled.h1`
  margin-top: 1em;
  font-size: 30px;
  font-weight: 500;
  color: white;
`

const EventList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
  background-color: black;
  padding: 2em;
  justify-content: center;
`;

const Div = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
`;


const Container = styled.div``;

export default Events;
