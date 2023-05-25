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
  }, []);
  console.log(blog)

  const content = (
    <div className="flex gap-4 items-center justify-center bg-gray-200">
      {/* {blog && blog.map((each) => (
        <Card key={each._id} blog={each} />
      ))} */}
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );

  return content;
};

export default MyBlog;