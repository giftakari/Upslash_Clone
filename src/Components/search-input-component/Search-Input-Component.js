import React from "react";
import { DebounceInput } from "react-debounce-input";
import styled from "styled-components";

const TextField = styled(DebounceInput)`
  font-size: 1.3rem;
  font-weight:bold;
  padding: 1rem;
  border-radius: 0.5rem;
  color: darkgray;
  font-weight: 400;
  outline: none;
  border: 4px solid gold;
  margin-bottom: 1em;
  font-family: "Indie Flower", cursive;
  &:focus{
    background-color: rgb(200, 255,240)
  }
`;

const Input = ({ query, onChange }) => {
  return (
    <>
      <TextField
        minLength={2}
        debounceTimeout={1000}
        placeholder="Search Awesome Images..."
        value={query}
        onChange={(event) => onChange(event)}
        data-cy="search-input"
      />
    </>
  );
};

export default Input;
