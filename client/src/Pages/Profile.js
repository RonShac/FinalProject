import styled from "styled-components";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import EventCard from "../components/EventCard";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [events, setEvents] = useState(null);
  // const [profile, setProfile] = useState(null);

  const navigate = useNavigate();

  // replaced with auth0//
  
  // return (
  //   isAuthenticated && (
  //     <div>
  //       <img src={user.picture} alt={user.name} />
  //       <h2>{user.name}</h2>
  //       <p>{user.email}</p>
  //     </div>
  //   )
  // );

  // useEffect(() => {
  //   fetch(`/api/me`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //       setProfile(json.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  useEffect(() => {
    if (!user) {
      return;
    }

    fetch(`/api/tickets/purchased?email=${user.email}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setEvents(json.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [user]);

  if (isLoading || user === null) {
    return <h1>Loading.....</h1>;
  }

  if (!isLoading && !isAuthenticated) {
    navigate("/");
  }

  return (
    <Section1>
      <Bg>
        <Section2>
          <Img src={process.env.PUBLIC_URL + "/images/backgroundartist1.jpg"} />
          <Section3>
            <Avatar
              src={
                user.picture ?? process.env.PUBLIC_URL + "/images/avatar.jpg"
              }
            />
            <Name>{user.nickname}</Name>
            {/* <Discription>Professional alcoholic</Discription> */}
            {/* <Location>{profile.location}</Location> */}
            <Section4>
              <Body>
                <Box>
                  <Box2>
                    <Personal>personal info</Personal>
                    <Ul>
                      <LI>
                        <Span>Full Name:</Span>
                        <Span1>{user.name}</Span1>
                      </LI>
                      {/* <LI>
                        <Span>Birthday:</Span>
                        <Span1>{profile.birthday}</Span1>
                      </LI> */}
                      <LI>
                        <Span>Last Login:</Span>
                        <Span1>{user?.updated_at}</Span1>
                      </LI>
                      <LI>
                        <Span>Email:</Span>
                        <Span1>{user.email}</Span1>
                      </LI>
                    </Ul>
                  </Box2>
                </Box>
              </Body>
            </Section4>
          </Section3>
        </Section2>
      </Bg>
      <H1>Purchased Events</H1>
      <EventList>
        {events?.length === 0 && <H2>You don't have any tickets yet!</H2>}
        {events &&
          events?.map((event) => (
            <EventCard event={event} key={event.id} hideCost={true} />
          ))}
      </EventList>
    </Section1>
  );
};

const H1 = styled.h1`
  margin-top: 1em;
  display: flex;
  justify-content: center;
  font-size: 50px;
`;

const H2 = styled.h1`
  margin-top: 1em;
  font-size: 30px;
  font-weight: 500;
`;

const EventList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
  background-color: black;
  padding: 2em;
  justify-content: center;
  padding-bottom: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  background-color: #e5e7eb;
`;

const Span1 = styled.span`
  font-family: sans-serif;
`;
const Span = styled.span`
  font-weight: 700;
  width: 6rem;
`;
const LI = styled.li`
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;
const Ul = styled.ul`
  margin-top: 0.5rem;
  color: #374151;
`;

const Personal = styled.p`
  color: #111827;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Box2 = styled.div`
  padding: 2rem;
  margin: 2em;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;
const Body = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  flex-direction: column;
`;
const Section4 = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  flex-direction: column;
`;

const Section1 = styled.section`
  padding: 2rem;
  background-color: #e5e7eb;
  height: 100%;
`;
const Section2 = styled.div``;
const Bg = styled.div`
  padding-bottom: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const Img = styled.img`
  width: 100%;
  height: 400px;
`;

const Section3 = styled.div`
  display: flex;
  margin-top: -5rem;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  height: 12rem;
  width: 12rem;
  border-radius: 9999px;
  border-width: 4px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const Name = styled.p`
  display: flex;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  align-items: center;
  font-size: 50px;
`;

const Discription = styled.p`
  font-size: 20px;
  padding-top: 1em;
`;

const Location = styled.p`
  font-size: 20px;
  padding-top: 1rem;
`;

export default Profile;
