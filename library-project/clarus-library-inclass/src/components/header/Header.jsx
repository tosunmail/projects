import React from "react";
import {
  HeaderContainer,
  HeaderForm,
  HeaderTitle,
  SearchInput,
  SelectBox,
  HeaderButton,
} from "./Header.style";

const Header = ({ setQuery, setSelectType, getData }) => {
  const printType = ["all", "books", "magazines"];

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <HeaderContainer>
      <HeaderTitle>BOOKS OR MAGAZINES</HeaderTitle>
      <HeaderForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="name"
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <SelectBox onChange={(e) => setSelectType(e.target.value)}>
          {printType.map((type) => {
            return (
              <option key={type} value={type}>
                {type}
              </option>
            );
          })}
        </SelectBox>
        <HeaderButton type="submit">Search</HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  );
};

export default Header;