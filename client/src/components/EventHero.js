import styled from "styled-components";

const EventHero = ({ image }) => {
  return (
    <Hero bg={image}>
      <H1>Events</H1>
    </Hero>
  );
};

const Hero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: ${({ bg }) => `url(${bg}) `};
  min-height: 40vh;
  width: 100vw;
`;

const H1 = styled.h1`
  color: green;
  font-style: italic;
  font-size: 60px;
`;

export default EventHero;
