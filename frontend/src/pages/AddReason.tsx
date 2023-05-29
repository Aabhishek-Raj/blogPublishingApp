import { useState, ChangeEvent, MouseEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRejectBlogMutation } from "../features/blog/blogApiSlice";

const AddReason = () => {
  const navigate = useNavigate();

  const [rejectBlog] = useRejectBlogMutation()

  const { blogId } = useParams();

  const [reasonData, setReasonData] = useState({ reason: "" });

  const { reason } = reasonData;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setReasonData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitReject = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    rejectBlog({ blogId, ...reasonData });
  };

  const content = (
    <form className=" p-28">
      <h3 className="text-gray-700 text-2xl">Give a valid Reason</h3>

      <div className="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
        <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600"></div>
        <div
          id="tooltip-fullscreen"
          role="tooltip"
          className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
        >
          Show full screen
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
      <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
        <label className="sr-only">Publish post</label>
        <input
          id="editor"
          name="reason"
          value={reason}
          onChange={onChange}
          className="h-40 block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
          required
        />
      </div>

      <button
        onClick={submitReject}
        type="submit"
        className=" mt-10 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-black bg-green-500 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-green-900 hover:bg-green-800"
      >
        Submit Rejection
      </button>
    </form>
  );

  // 	<p className="mt-5">This wysiwyg editor component is part of a larger, open-source library of Tailwind CSS components. Learn
  // 		more
  // 		by going to the official <a className="text-blue-600 hover:underline"
  // 			href="#" target="_blank">Flowbite Documentation</a>.
  // 	</p>
  //     <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
  // </div>

  return content;
};

export default AddReason;
