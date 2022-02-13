import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("others");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handelSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("added");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <form onSubmit={handelSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label>Blog Body:</label>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
        <label>Blog Author:</label>
        <select onChange={(e) => setAuthor(e.target.value)} value={author}>
          <option vlaue="mario">Mario</option>
          <option vlaue="yoshi">Yoshi</option>
          <option vlaue="shareq">Shareq</option>
          <option vlaue="others">Others</option>
        </select>
        {isPending && <button disabled>Adding blog...</button>}
        {!isPending && <button>Add Blog!</button>}
      </form>
    </div>
  );
}
