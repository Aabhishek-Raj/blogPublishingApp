import Card from "../components/Card";
import { useGetPendingBlogsQuery } from "../features/blog/blogApiSlice";

const PendingBlogs = () => {
  
  const { data: blog } = useGetPendingBlogsQuery("getpendingblogs")

  const content = (
    <div className="m-20 ">
      {blog && blog.map((each: BlogType) => (
        <Card key={each._id} blog={each} pending={"pending"} />
        
      ))}
    </div>
  );

  return content;
};

export default PendingBlogs;
