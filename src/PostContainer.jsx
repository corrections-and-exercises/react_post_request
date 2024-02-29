import { useState } from "react";
import Form from "./Form";
import Post from "./Post";

function PostContainer() {
  const [posts, setPosts] = useState([
    {
      userId: 1,
      title: "hello",
      body: "world",
      id: 2,
    },
  ]);

  return (
    <div>
      <Form setPosts={setPosts} />
      {posts.map((post, idx) => {
        return <Post post={post} key={idx} />;
      })}
    </div>
  );
}

export default PostContainer;
