import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SubTitle } from "../../App.styled";
import { getReviews } from "../../utils/ApiService";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    getReviews(movieId).then((data) => {
      setReviewsData(data.results);
    });
  }, [movieId]);

  return (
    <article>
      <SubTitle>Reviews</SubTitle>
      {reviewsData.length !== 0 ? (
        <ul>
          {reviewsData.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Reviews not found!</p>
      )}
    </article>
  );
}
