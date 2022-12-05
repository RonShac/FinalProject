import styled from "styled-components";
import React, { useState } from "react";

const Searchbar = ({ handleSearch }) => {
  const [value, setValue] = useState("");

  const updateValue = (value) => {
    setValue(value);
    handleSearch(value);
  }

  return (
    <>
      <Input
        type="text"
        value={value}
        onChange={(ev) => updateValue(ev.target.value)}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            handleSearch(ev.target.value);
          }
        }}
      />
      {/* <ButtonGroup>
        <Button onClick={() => updateValue("")}>Clear</Button>
        <Button onClick={(ev) => updateValue(ev.target.value)}>Search</Button>
      </ButtonGroup> */}
    </>
  );
};

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const Button = styled.button`
  background-color: #405cf5;
  border-radius: 10px;
  border-width: 0;

  color: #fff;
  cursor: pointer;
  font-size: 100%;
  height: 50px;
  width: 200px;
  margin: 12px 0 0;

  padding: 15px 50px;
  text-align: center;
`;

const Input = styled.input`
  padding-bottom: 0.375rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
    margin-top: 2em;
  background-color: #ffffff;

  font-size: 1rem;
    width: 40rem;
  height: 2.5rem;
  border-radius: 0.75em;

  border-style: solid;
`;

export default Searchbar;
