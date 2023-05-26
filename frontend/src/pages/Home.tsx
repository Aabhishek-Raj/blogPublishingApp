import { useState, ChangeEvent, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { saveBlog } from "../features/blog/blogSlice";

export type BlogDataType = {
  userId: string;
  heading: string;
  subject: string;
  blog: string;
};

const Home = () => {
  const [formData, setFormData] = useState({
    heading: "",
    subject: "",
    blog: "",
  });

  const { heading, subject, blog } = formData;

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const { user, isLoading, isError, isSuccess } = useSelector(
    (state: RootState) => state.user
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!user) {
      return;
    }

    const blogData = {
      userId: user._id,
      heading,
      subject,
      blog,
    };

    try {
      await dispatch(saveBlog(blogData));
      navigate('/myblog')
      
    } catch (error) {
      console.error(error)
    }
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
              onChange={onChange}
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
              onChange={onChange}
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
              value={blog}
              onChange={onChange}
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
              POST
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );

  return content;
};

export default Home;
