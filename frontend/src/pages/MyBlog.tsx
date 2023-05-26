import { useDispatch, useSelector } from "react-redux";
import Card from "../components/card";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { getBlogs } from "../features/blog/blogSlice";
import { useNavigate } from "react-router-dom";

const MyBlog = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const { blog, isLoading, isError } = useSelector(
    (state: RootState) => state.blog
  );

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  const content = (
    <div className="m-20 ">
      {blog && blog.map((each) => (
        <Card key={each._id} blog={each} />
        
      ))}
    </div>
  );

  return content;
};

export default MyBlog;
