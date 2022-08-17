import React, { useState, useEffect } from "react";
import { getImages, getLatestImages } from "./Services/images-services";
import styled from "styled-components";
import Gallary from "./Components/galary-component/Gallary";
import Input from "./Components/search-input-component/Search-Input-Component";
import './App.css';


const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
function App() {
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    searchData();
  }, [query]);

  const searchData = query => {
    setIsLoading(true);
    if (query) {
      getImages(query)
        .then(res => res.json())
        .then(data => {
          setIsLoading(false);
          setImageData(data.results);
        });
    } else {
      getLatestImages()
        .then(res => res.json())
        .then(data => {
          setIsLoading(false);
          setImageData(data);
        });
    }
  };

  const handleOnChange = e => {
    setQuery(e.target.value);
    searchData(e.target.value);
  };

  return (
    <Container>
      <Input query={query} onChange={handleOnChange} />
      <Gallary imageData={imageData} isLoading={isLoading} /> 
    </Container>
  );
}

export default App;