import React, { useState, useEffect, useRef } from "react";
import { Wrapper, Content } from "./SearchBar.styles";
import searchIcon from "../../images/search-icon.svg";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  function handleSearch(event) {
    setState(event.target.value);
  }
  const inital = useRef(true);
  

  useEffect(() => {
      if(inital.current){
          inital.current = false;
          return;
      }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={handleSearch}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
