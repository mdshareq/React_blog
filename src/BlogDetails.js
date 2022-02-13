import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

export default function BlogDetails() {
  const { id } = useParams();
  const history = useHistory();

  const { data, error, isPending } = useFetch(
    "http://localhost:3000/blogs/" + id
  );

  const handelClick = () => {
    fetch("http://localhost:3000/blogs/" + data.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <div>{data.body}</div>
          <button onClick={handelClick}>Delete</button>
        </article>
      )}
    </div>
  );
}
