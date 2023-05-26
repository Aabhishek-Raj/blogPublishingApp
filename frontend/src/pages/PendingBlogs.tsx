import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store";
import { getPendingBlogs } from "../features/blog/blogSlice";
// import { useNavigate } from "react-router-dom";

const PendingBlogs = () => {
  // const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const { blog } = useSelector(
    (state: RootState) => state.blog
  );

  useEffect(() => {
    dispatch(getPendingBlogs());
  }, [dispatch]);

  const content = (
    <div className="m-20 ">
      {blog && blog.map((each) => (
        <Card key={each._id} blog={each} pending={"pending"} />
        
      ))}
    </div>
  );

  return content;
};

export default PendingBlogs;
