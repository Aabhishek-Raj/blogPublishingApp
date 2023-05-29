import { useSelector } from "react-redux";
import Card from "../components/Card";
import { useGetBlogsQuery } from "../features/blog/blogApiSlice";
import { RootState } from "../redux/store";
// import { useNavigate } from "react-router-dom";

const MyBlog = () => {
  // const navigate = useNavigate();
  const { user } = useSelector(
    (state: RootState) => state.auth
  );

  const { data: blog }= useGetBlogsQuery(user?._id)


  const content = (
    <div className="m-20 ">
      {blog && blog.map((each: BlogType) => (
        <Card key={each._id} blog={each} pending={""}/>
        
      ))}
    </div>
  );

  return content;
};

export default MyBlog;
