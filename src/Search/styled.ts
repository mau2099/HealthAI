import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledTextField = styled(TextField)`
  && {
    margin: 10px;
    width: 500px;
  }
`;

export const StyledButton = styled(Button)`
  && {
    margin: 10px;
    width: 100px;
    background-color: #1a73e8;
    color: #fff;
  }
`;

export const ImageStyled = styled.img`
  && {
    height: 250px;
    width: 250px;
    margin-bottom: 2em;
    border-radius: 100%;
    object-fit: cover;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
`;
