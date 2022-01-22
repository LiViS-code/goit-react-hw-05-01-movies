import styled from "styled-components";
import { theme } from "../../constants/Theme";

const {
  spacing,
  colors: { primaryColor, accentColor },
  transition: { timing, timingFunction },
} = theme;

export const SearchForm = styled.form`
  padding: ${spacing(4)};
`;

export const SearchInput = styled.input`
  padding: ${spacing(2)} ${spacing(4)};
  border-radius: ${spacing(2)};
  margin-right: ${spacing(4)};
  margin-bottom: ${spacing(4)};
`;

export const SearchButton = styled.button`
  padding: ${spacing(2)} ${spacing(4)};
  border-radius: ${spacing(2)};
  color: inherit;
  font-weight: 700;
  transition: color ${timing} ${timingFunction},
    background-color ${timing} ${timingFunction};

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${accentColor};
    background-color: ${primaryColor};
  }
`;
