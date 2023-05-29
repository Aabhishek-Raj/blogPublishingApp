import Card from "../components/Card";
import { useGetLiveBlogsQuery } from "../features/blog/blogApiSlice";

const LiveBlogs = () => {

  const { data: blog } = useGetLiveBlogsQuery("getliveblogs")

  const content = (
    <div className="m-20 ">
      {blog && blog.map((each: BlogType) => (
        <Card key={each._id} blog={each} pending={"publish"} />
        
      ))}
    </div>
  );

  return content;
};

export default LiveBlogs;