import EventCard from "./EventCard";
import styled from "styled-components";

import "../styles/slick.css";
import "../styles/slick-theme.css";
import Slider from "react-slick";

const SimpleSlider = ({ events }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    //adaptiveHeight: true,
  };
  return (
    <Div1>
      <Div>
        <Slider {...settings}>
          {events && events.map((event) => <EventCard event={event} key={event.id} />)}
        </Slider>
      </Div>
    </Div1>
  );
};
const Div1 = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10em;

  flex-direction: row;
  flex-wrap: wrap;
`;
const Div = styled.div`
  max-width: 100%;
  min-width: 50%;
`;

export default SimpleSlider;
