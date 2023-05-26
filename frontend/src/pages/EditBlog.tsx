import { useState, ChangeEvent, MouseEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { editBlog, filteredBlog } from "../features/blog/blogSlice";

export type BlogDataType = {
  userId: string;
  heading: string;
  subject: string;
  blog: string;
};

const EditBlog = () => {
  
      const navigate = useNavigate();
      const dispatch: AppDispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getBlogs());
  // }, [dispatch]);

    const { blog, isLoading, isError, isSuccess } = useSelector(
        (state: RootState) => state.blog
      );
      const { id } = useParams();

      const filteredBlog: BlogType | undefined = blog?.find((each) => each._id == id )
      console.log(filteredBlog)

    // useEffect(() => {
    //     dispatch(getEditBlog())
    // }, [dispatch])

  const [heading, setHeading] = useState(filteredBlog?.heading)
  const [subject, setSubject] = useState(filteredBlog?.subject)
  const [blogdata, setBlogdata] = useState(filteredBlog?.blog)


//   const { user, isLoading, isError, isSuccess } = useSelector(
//     (state: RootState) => state.user
//   );

const headingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHeading(e.target.value);
  };

  const subjectChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const blogDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBlogdata(e.target.value);
  };

  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!filteredBlog || !filteredBlog.userId || !heading || !subject || !blogdata) {
      return 
    }

    const updatedBlogData: BlogDataType = {
      userId: filteredBlog?.userId,
      heading,
      subject,
      blog: blogdata,
    };

    dispatch(editBlog(updatedBlogData));
  };

  const content = (
    <div className="flex">
      <form className=" m-20 w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Heading
            </label>
            <input
              name="heading"
              value={heading}
              onChange={headingChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="nick"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Subject
            </label>
            <input
              name="subject"
              value={subject}
              onChange={subjectChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Blog
            </label>
            <input
              name="blog"
              value={blogdata}
              onChange={blogDataChange}
              className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              onClick={onSubmit}
              className="shadow bg-green-900 hover:bg-green-950 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Save
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );

  return content;
};

export default EditBlog;
