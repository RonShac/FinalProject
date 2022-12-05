import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import EventHero from "../components/ArtistHero";
import TicketType from "../components/TicketType";

const EventDetails = () => {
  const { isAuthenticated } = useAuth0();
  const [isLoading, setIsLoading] = useState(false);
  const [event, setEvent] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/events/" + id)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setEvent(json.data);
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
    event && (
      <>
        <Container>
          <Image src={event.image} />
          <Section>
            <H1>{event.name}</H1>
            <P>{event.description}</P>
            <List>
              {event.lineup &&
                event.lineup.map(({ artistId, nickname }) => (
                  <li key={artistId}>
                    <LinkArtist to={"/artists/" + artistId}>
                      {nickname}
                    </LinkArtist>
                  </li>
                ))}
            </List>
            <P1>
              {"tickets left:" +
                " " +
                event.sales
                  .map((type) => type.left)
                  .reduce((acc, count) => acc + count)}
            </P1>
          </Section>
          <Section2>
            <List>
              {event.sales &&
                event.sales.map((ticketType) => (
                  <TicketType
                    type={ticketType}
                    key={ticketType.id}
                    eventId={event.id}
                    disabled={!isAuthenticated}
                  />
                ))}
            </List>
          </Section2>
        </Container>
      </>
    )
  );
};

const LinkArtist = styled(Link)`
  font-size: 2em;
  color: white;
  margin-top: 2em;
  cursor: pointer;


`;

const List = styled.ul`
  margin-top: 4em;
  display: flex;
  flex-direction: column;
  
`;

const Section2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20em;
`;

const P1 = styled.p`
  font-size: 35px;
  margin-top: 1em;
  margin-bottom: 5em;
`;

const Image = styled.img`
  margin-top: 20em;
  margin-left: 2em;
  min-width: 40%;
  max-width: 50vw;
`;

const P = styled.p`
  font-size: 2em;
  font-family: sans-serif;
`;

const Section = styled.div`
  display: flex;
  margin-top: 10rem;
  flex-direction: column;
  align-items: center;
  margin-top: 20rem;
  color: white;
  width: 45em;
`;

const H1 = styled.h1`
  font-weight: 900;

  padding-bottom: 3em;
  font-size: 74px;
`;

const Container = styled.div`
  display: flex;
  gap: 10em;
`;

export default EventDetails;
