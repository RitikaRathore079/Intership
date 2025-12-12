import React, { useState } from "react";
import BlogCard from "./BlogCard";

function BlogList() {

  const [blogs] = useState([
    {
      id: 1,
      title: "Learning React Basics",
      author: "Ritika",
      description: "Introduction to React fundamentals and components."
    },
    {
      id: 2,
      title: "JavaScript ES6 Features",
      author: "Ritika",
      description: "Detailed guide on let, const, arrow functions, and map()."
    },
    {
      id: 3,
      title: "CSS Tips for Beginners",
      author: "Ritika",
      description: "Simple CSS tricks to build beautiful websites."
    }
  ]);

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          author={blog.author}
          description={blog.description}
        />
      ))}
    </div>
  );
}

export default BlogList;
