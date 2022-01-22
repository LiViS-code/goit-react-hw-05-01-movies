import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "./constants/Theme";

const {
  colors: {
    accentColor,
    primaryColor,
    backgroundColorForm,
    outlineColor,
    borderDisabledColor,
    backgroundDisabledColor,
    backgroundColor,
    disabledColor,
  },
  transition: { timing, timingFunction },
  spacing,
} = theme;

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  border-radius: ${spacing(2)};
  color: ${primaryColor};
  background-color: ${backgroundColor};
`;

export const Logo = styled.img`
  width: 50px;
  margin-right: ${spacing(2)};
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: ${spacing(4)};
  font-size: 1.5em;
`;

export const SubTitle = styled.h2`
  margin-top: 0;
  margin-bottom: ${theme.spacing(4)};
  font-size: 1.3em;
`;

export const Message = styled.p`
  text-align: center;
`;

export const MyForm = styled.form`
  width: 90%;
  margin-bottom: ${spacing(4)};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: ${spacing(4)};
  border: 1px solid ${primaryColor};
  border-radius: ${spacing(2)};
  background-color: ${backgroundColorForm}; ;
`;

export const Label = styled.label`
  margin-bottom: ${spacing(1)};
`;

export const Input = styled.input`
  padding: ${spacing(2)} ${spacing(3)};
  margin-bottom: ${spacing(4)};
  border: none;
  border-radius: ${spacing(2)};
  transition: outline ${timing} ${timingFunction};
  &[name="number"] {
    margin-bottom: ${spacing(8)};
  }
  &:hover,
  &:focus {
    outline: 2px solid ${outlineColor};
  }
`;

export const Button = styled.button`
  padding: ${spacing(1)} ${spacing(2)};
  border: none;
  border-radius: ${spacing(2)};
  font-weight: 700;
  color: inherit;
  outline: 1px solid ${primaryColor};
  transition: color ${timing} ${timingFunction},
    background-color ${timing} ${timingFunction};
  &:hover,
  &:focus {
    cursor: pointer;
    color: ${accentColor};
    background-color: ${primaryColor};
  }
  &:disabled,
  &[disabled] {
    cursor: auto;
    border: 1px solid ${borderDisabledColor};
    background-color: ${backgroundDisabledColor};
    color: ${disabledColor};
  }
`;

export const List = styled.ul`
  margin-bottom: ${spacing(4)};
  padding-left: ${spacing(3)};
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: ${spacing(2)};
  }
`;

export const Note = styled.span`
  margin-right: ${spacing(3)};
  font-size: 0.85em;
  list-style: circle;
`;

export const LinkTo = styled(Link)`
  padding: ${spacing(1)} ${spacing(2)};
  color: inherit;
  text-decoration: none;
  font-weight: 700;
  border-radius: ${spacing(2)};
  transition: color ${timing} ${timingFunction},
    background-color ${timing} ${timingFunction};

  &:hover,
  &:focus {
    color: ${accentColor};
    background-color: ${primaryColor};
  }
`;
