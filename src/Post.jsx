function Post({ post }) {
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
