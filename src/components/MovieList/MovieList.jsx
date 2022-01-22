import PropTypes from "prop-types";
import { ListItem, LinkTo, List } from "../../App.styled";
export default function MovieList({ movieData, location }) {
  return (
    <>
      <p>Список фильмов</p>
      {/* <List>
        {movieData.map(({ id, original_title }) => {
          return (
            <ListItem key={id}>
              <LinkTo to={`/movies/${id}`} state={{ from: location }}>
                {original_title}
              </LinkTo>
            </ListItem>
          );
        })}
      </List> */}
    </>
  );
}

MovieList.propTypes = {
  movieData: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};
