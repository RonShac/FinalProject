import { useState, useEffect } from "react";
import styled from "styled-components";

const Form = ({ handleSubmit, quantity, quantityChanged, email, error, onChange, value, children }) => {
  const [formData, setFormData] = useState({ quantity, email });

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });

    if (key === 'quantity') {
      quantityChanged(value);
    }
  };

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e, formData)}>
      <H2>Purchase Tickets</H2>
      <Label for="firstName">First Name</Label>
      <Input
        type="text"
        placeholder="First Name"
        name={"firstName"}
        required={true}
        onChange={(e) => handleChange("firstName", e.target.value)}
      />
      <Label for="lastName">Last Name</Label>
      <Input
        type="text"
        placeholder="Last Name"
        required={true}
        onChange={(e) => handleChange("lastName", e.target.value)}
      />
      <Label for="email">Email</Label>
      <Input
        type="email"
        placeholder="Email"
        required={true}
        defaultValue={email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <Label for="quantity">Quantity</Label>
      <Input
        type="number"
        placeholder="Quantity"
        required={true}
        defaultValue={quantity}
        min={1}
        onChange={(e) => handleChange("quantity", e.target.value)}
      />
      <Extras>
        {children}
      </Extras>

      <Submit type="submit">Confirm</Submit>
      
      {error && <H1>{error}</H1>}
    </StyledForm>
  );
};

const H1 = styled.h1`
  font-size: 1.75em;
  color: red;
  text-align: center;
`;

const H2 = styled.h2`
  font-size: 2.5em;
  text-align: center;
`;

const Label = styled.label`
  margin-top: 30px;
  text-align: left;
`;

const Extras = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  color: black;
`;

const Input = styled.input`
  padding: 1rem;
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #4b5563;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: #d1d5db;
  border-style: solid;
`;

const Submit = styled.button`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: 4rem;
  background-color: #111827;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 0.25rem;
  border-width: 2px;
  border-color: transparent;

  :hover {
    background-color: #ffffff;
    color: #111827;
    border-color: #d1d5db;
    transform: scale(1.2, 1.2);
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5em;
  gap: 1em;
  color: black;
  background-color: #f3f4f6;
  flex-direction: column;
  border-style: solid;
  border-radius: 0.25rem;
  border-width: 1px;
  width: 50em;
`;

export default Form;
