import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SubTitle } from "../../App.styled";
import { getCast } from "../../utils/ApiService";

export default function Cast() {
  const { movieId } = useParams();
  const [castData, setCastData] = useState([]);

  useEffect(() => {
    getCast(movieId).then((data) => {
      setCastData(data.cast);
    });
  }, [movieId]);
  return (
    <div>
      <SubTitle>Cast</SubTitle>
      <p>Актерский состав</p>
      {/* {castData.length !== 0 ? (
        <article>
          <ul>
            {castData.map(({ id, name, character, profile_path }) => {
              return (
                <li key={id}>
                  {profile_path ? (
                    <img
                      src={`https://www.themoviedb.org/t/p/w185${profile_path}`}
                      alt={name}
                    />
                  ) : (
                    <p>No Image</p>
                  )}
                  {character && <p>Character: {character}</p>}
                  <p>Name: {name}</p>
                </li>
              );
            })}
          </ul>
        </article>
      ) : (
        <p>Cast not found!</p>
      )} */}
    </div>
  );
}
