import { useState } from "react";
import axios from "axios";

function Form({ setPosts }) {
  const [newPost, setNewPost] = useState({
    userId: 1,
    title: "",
    body: "",
  });

  const handleChange = (event) => {
    setNewPost({ ...newPost, [event.target.name]: event.target.value });
  };

  const sendPost = async () => {
    try {
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
      );
      setPosts((prev) => [data, ...prev]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendPost();
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newPost),
    // })
    //   .then((response) => {
    //     if (!response.ok) throw new Error("Post Request failed");
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setPosts((prev) => [data, ...prev]);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        onChange={handleChange}
        type="text"
        name="title"
        value={newPost.title}
      />
      <label htmlFor="body">Content</label>
      <input
        onChange={handleChange}
        type="text"
        name="body"
        value={newPost.body}
      />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default Form;
