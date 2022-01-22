import styled from "styled-components";
import { theme } from "../../constants/Theme";

const {
  spacing,
  colors: { accentColor },
} = theme;

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  padding-top: ${spacing(4)};
`;

export const DataContainer = styled(Container)`
  flex-direction: column;
`;

export const PosterThumb = styled.div`
  width: 100%;
  min-width: ${spacing(30)};
  max-width: ${spacing(100)};
  margin-right: ${spacing(4)};
`;

export const DataBlock = styled.div`
  margin-bottom: ${spacing(5)};
`;

export const Poster = styled.img`
  width: 100%;
  display: block;
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: ${spacing(2)};
`;

export const GenreTitle = styled.h3`
  margin-top: 0;
  margin-bottom: ${spacing(2)};
`;

export const GenresList = styled.ul`
  display: flex;
  margin-top: 0;
  margin-bottom: ${spacing(4)};
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
`;

export const GenresListItem = styled.li`
  &:not(:last-child) {
    margin-right: ${spacing(1)};
  }
  &:not(:last-child)::after {
    content: "|";
    font-weight: 700;
    color: ${accentColor};
    margin-left: ${spacing(1)};
  }
`;
