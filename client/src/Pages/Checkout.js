import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Form from "../components/Form";

//useeffect , eventID , sales.find where name matches type amout of ticket left ) , form to submit ticket type
//confirmation "email"

const Checkout = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [event, setEvent] = useState(null);
  const [ticketType, setTicketType] = useState(null);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { id, type } = useParams();
  const navigate = useNavigate();

  const quantityChanged = (value) => {
    setQuantity(value);
  };

  const handleSubmit = (e, formData) => {
    e.preventDefault();
    // console.log(formData);
    fetch(`/api/events/${id}/buy`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        givenName: formData.firstName,
        surname: formData.lastName,
        email: formData.email,
        quantity: formData.quantity,
        type,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        if (json.status !== 201) {
          setError(json.message);
        } else {
          setError(null);
          navigate("/profile");
        }
      });
  };

  useEffect(() => {
    fetch("/api/events/" + id)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setEvent(json.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  useEffect(() => {
    setTicketType(event?.sales?.find(({ id }) => id === type));
  }, [event]);

  if (!isLoading && !isAuthenticated) {
    navigate("/");
  }

  return (
    <Container>
      <Wrapper>
        {user && event && (
          <>
            <H2>
              Event: {event?.name} - Ticket Type: {ticketType.name ?? type}
            </H2>
            <Form
              handleSubmit={handleSubmit}
              quantity={quantity}
              email={user?.email}
              quantityChanged={quantityChanged}
              error={error}
            >
              <H2>Checkout Details</H2>
              <Left>
                <Row>
                  <span>Event:</span>
                  <span>{event?.name}</span>
                </Row>
                <Row>
                  <span>Ticket Type:</span>
                  <span>{ticketType?.name}</span>
                </Row>
                <Row>
                  <span>Cost Per Ticket:</span>
                  <span>${ticketType?.cost} CAD</span>
                </Row>
                <Row>
                  <span>Ticket Quantity:</span>
                  <span>{quantity} Ticket(s)</span>
                </Row>
                <Row>
                  <span>Total Cost:</span>
                  <span>${ticketType?.cost * quantity} CAD</span>
                </Row>
              </Left>
            </Form>
          </>
        )}

      </Wrapper>
    </Container>
  );
};

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Left = styled.div`
  margin-top: 15px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: space-between;
`;

const H2 = styled.h2`
  font-size: 2em;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 2em;
  color: red;
`;

const Wrapper = styled.h1`
  font-size: 1em;
  display: flex;
  padding-right: 6em;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 15em;
  padding-left: 5em;
  color: white;
  gap: 10em;
  margin-top: 20em;
`;

export default Checkout;
