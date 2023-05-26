import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { getLiveBlogs } from "../features/blog/blogSlice";

const LiveBlogs = () => {
  const dispatch: AppDispatch = useDispatch();

  const { blog } = useSelector(
    (state: RootState) => state.blog
  );

  useEffect(() => {
    dispatch(getLiveBlogs());
  }, [dispatch]);

  const content = (
    <div className="m-20 ">
      {blog && blog.map((each) => (
        <Card key={each._id} blog={each} pending={"publish"} />
        
      ))}
    </div>
  );

  return content;
};

export default LiveBlogs;