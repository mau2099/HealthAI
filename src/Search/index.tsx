
import Logo from '../assets/logo.jpg'
import {
  ImageStyled,
  SearchBarContainer,
  SearchBarWrapper,
  StyledButton,
  StyledTextField
} from './styled';

export const SearchBar = () => {

  const handleSearch = () => {
    // TODO: implement functionality
  };

  return (
    <SearchBarContainer>
      <SearchBarWrapper>
        <ImageStyled src={Logo} id="image2099" />
        <StyledTextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
        />
        <StyledButton variant="contained" color={"secondary"} onClick={handleSearch}>
          Search
        </StyledButton>
      </SearchBarWrapper>
    </SearchBarContainer>
  );
};

