import styled from "styled-components";
import { theme } from "../../constants/Theme";

const {
  spacing,
  colors: { backgroundColorForm },
} = theme;

export const Header = styled.header`
  margin-bottom: ${spacing(4)};
`;

export const Main = styled.div`
  margin-bottom: ${spacing(4)};
  padding-left: ${spacing(4)};
  padding-right: ${spacing(4)};
  min-height: calc(100vh - 175px);
`;

export const Footer = styled.footer`
  padding: ${spacing(2)};
  font-size: 0.8em;
  border-radius: ${spacing(1)};
  background-color: ${backgroundColorForm};
`;
