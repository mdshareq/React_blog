import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data,
    error,
    isPending,
  } = useFetch("http://localhost:3000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <BlogList blogs={data} />}
    </div>
  );
};

export default Home;
