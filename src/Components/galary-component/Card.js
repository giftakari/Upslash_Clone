import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 0.5rem 0.8rem 0;
`;

const Image = styled.img`
  width: 100%;
  filter:invert(0,9);
`;

const Card = ({ imgSrc }) => (
  <Container>
    <Image src={imgSrc} alt="images" />
  </Container>
);

export default Card;