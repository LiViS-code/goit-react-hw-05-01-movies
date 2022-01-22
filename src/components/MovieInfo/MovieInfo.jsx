import PropTypes from "prop-types";
import {
  Container,
  DataBlock,
  PosterThumb,
  Poster,
  DataContainer,
  Text,
  GenresList,
  GenresListItem,
  GenreTitle,
} from "./MovieInfo.styled";
import { SubTitle, Title } from "../../App.styled";

export default function MovieInfo({ movieData }) {
  const {
    original_title,
    overview,
    poster_path,
    release_date,
    vote_average,
    genres,
  } = movieData;
  return (
    <>
      <Container>
        <p>Информация о фильме</p>
        {/* <PosterThumb>
          <Poster
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "https://image.freepik.com/free-vector/waves-abstract-background-with-coming-soon-text_1017-5060.jpg"
            }
            alt="movie poster"
            width={150}
          />
        </PosterThumb>

        <DataContainer>
          <DataBlock>
            <Title>
              {original_title}
              {release_date
                ? `(${new Date(Date.parse(release_date)).getFullYear()})`
                : null}
            </Title>
            <Text>User Score: {vote_average}</Text>
          </DataBlock>

          <DataBlock>
            <SubTitle>Overview</SubTitle>
            <Text>{overview}</Text>
          </DataBlock>

          <DataBlock>
            <GenreTitle>Genres</GenreTitle>
            <GenresList>
              {genres &&
                genres.map((el) => {
                  return <GenresListItem key={el.id}>{el.name}</GenresListItem>;
                })}
            </GenresList>
          </DataBlock>
        </DataContainer> */}
      </Container>
    </>
  );
}

MovieInfo.propType = {
  movieData: PropTypes.array.isRequired,
};
