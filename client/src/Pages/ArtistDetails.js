import { FiInstagram, FiTwitter, FiFacebook, FiMail } from "react-icons/fi";
import "../styles/social-medias-icons.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventCard from "../components/EventCard";

import "../styles/artist-details.css";

const ArtistDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [artist, setArtist] = useState(null);
  const [events, setEvents] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/artists/" + id)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setArtist(json.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/events?artist=" + id)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setEvents(json.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  if (isLoading === true) {
    return <h1>Loading.....</h1>;
  }

  return (
    artist && (
      <>
        <Container>
          <Image src={artist.image} />

          <Section>
            <H1>{artist.name}</H1>
            <P>{artist.description}</P>
            <P1>{"best track of the year:" + " " + artist.bestTrack}</P1>
            <Icons>
              <a href={"#" + artist.social.insta} aria-label={artist.social.insta} >
                <FiInstagram alt={artist.social.insta} />
              </a>
              <a href={"#" + artist.social.twitter} aria-label={artist.social.twitter} >
                <FiTwitter alt={artist.social.twitter} />
              </a>
              <a href={"#" + artist.social.facebook} aria-label={artist.social.facebook} >
                <FiFacebook alt={artist.social.facebook} />
              </a>
              <a href={`mailto:${artist.email}`} aria-label={artist.email} >
                <FiMail />
              </a>
            </Icons>
          </Section>
        </Container>
        <EventList>
          {events &&
            events.map((event) => <EventCard event={event} key={event.id} />)}
        </EventList>
      </>
    )
  );
};

const Icons = styled.div`
  & > a {
    color: white;
    font-size: 20px;
    padding: 1em;
  }
`;

const EventList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;

  padding: 2em;
  justify-content: center;
`;

const P1 = styled.p`
  font-size: 25px;
  font-family: sans-serif;
`;
const P = styled.p`
  font-size: 40px;
  font-family: sans-serif;
`;

const Section = styled.div`
  display: flex;
  padding-right: 6em;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 12em;
  padding-left: 5em;
  color: white;
  gap: 10em;
`;

const H1 = styled.h1`
  font-size: 5em;
`;

const Image = styled.img`
  min-width: 50%;
  max-width: 50vw;
  margin-top: 20em;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  background-color: black;
`;

export default ArtistDetails;
