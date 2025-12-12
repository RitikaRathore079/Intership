function BlogCard({ title, author, description }) {
  return (
    <div className="blog-card">
      <h3>{title}</h3>
      <p className="author">By {author}</p>
      <p>{description}</p>
      <button onClick={() => alert(title)}>Read More</button>
    </div>
  );
}

export default BlogCard;
