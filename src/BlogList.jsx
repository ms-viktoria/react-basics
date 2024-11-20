import { Link } from 'react-router-dom';

const BlogList = ({ blogs = [] }) => {

  
  if (!blogs.length) {
    return <p>No blogs to display.</p>;
  } 
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
     </div>
  );
};


export default BlogList;