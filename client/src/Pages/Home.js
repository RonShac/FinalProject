import styled from "styled-components";
import Searchbar from "../components/Searchbar";
import { useEffect, useState } from "react";

import EventCard from "../components/EventCard";
import SimpleSlider from "../components/SimpleSlider";

const Home = ({useSlider = true}) => {
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

  return (
    <Hero bg={process.env.PUBLIC_URL + "/images/1544900.jpg"}>
      <Heading>
        <H1>Welcome to Rusty Moves</H1>
        <H2>
          "Dust of those rusty moves, our smooth oil will make you groove"
        </H2>
        <Searchbar handleSearch={handleSearch} />
      </Heading>
      <H3> Upcoming Events </H3>
      <div>
        {useSlider ? (
          <SimpleSlider events={events} />
        ) : (
          <EventList>
            {events?.length === 0 && (
              <H3>Could not find any events!</H3>
            )}
            {events && events.map((event) => <EventCard event={event} key={event.id} />)}
          </EventList>
        )}
      </div>
      <About>
        <H3>About Us</H3>
        <p>
          Rusty moves was discovered by three friends who had passion for live
          shows and dance. For 10 years Rusty Moves provides it's costumers with
          best festival events and making it simpler to book your favorite
          shows.
        </p>
      </About>
    </Hero>
  );
};

const About = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  margin-top: 4em;
  
  padding: 5em 10em;
  gap: 4em;
  text-align: justify;

  flex-direction: column;
  color: white;
  background-color: black;
`;

const H3 = styled.h3`
  display: flex;
  justify-content: flex-start;
  font-size: 95px;
  color: rgb(255, 16, 240);
  font-family: sans-serif;


`;

const EventList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;

  padding: 2em;
  justify-content: center;
`;

const Hero = styled.section`
  position: relative;
  background-size: cover;
  background-position-x: center;
  background-image: ${({ bg }) => `url(${bg}) `};
  min-height: 100vh;
  width: 100vw;
`;

const Heading = styled.div`
  display: flex;
  padding-top: 10em;
  align-items: center;
  flex-direction: column;
  gap: 1em;
`;

const H1 = styled.h1`
  font-style: italic;
  font-size: 60px;
`;

const H2 = styled.h2`
  font-style: italic;
  font-size: 22px;
`;

export default Home;
