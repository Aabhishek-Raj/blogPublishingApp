import { Link, useNavigate } from "react-router-dom";
import { MouseEvent } from 'react'

type CardProp = {
  blog: BlogType;
};

const Card = ({ blog }: CardProp) => {

const navigate = useNavigate()

  const content = (
    <a
      className="relative block p-8 overflow-hidden border bg-white border-slate-100 rounded-lg mb-6 ml-6 mr-6"
      href=""
    >
      <div className="justify-between sm:flex">
        <div>
          <h5 className="text-xl font-bold text-slate-900">{blog.heading}</h5>
          <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
            <p className="focus:outline-none text-xs text-yellow-700">
              {blog.status}
            </p>
          </div>
          <p className="mt-1 text-xs font-medium text-red-700">
            {blog.subject}
          </p>
        </div>
      </div>

      <div className="mt-4 sm:pr-8">
        <p className="text-sm text-slate-500">{blog.blog}</p>
      </div>

      <dl className="flex mt-6">
        <div className="flex flex-col-reverse">
          <button
            className="shadow bg-green-900 hover:bg-green-950 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Delete
          </button>
        </div>

        <div className="flex flex-col-reverse ml-3 sm:ml-6">
          <Link to={`/editblog/${blog._id}`}>
          <button 
            className="shadow bg-green-900 hover:bg-green-950 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Edit
          </button>
          </Link>
        </div>
      </dl>
    </a>
  );

  return content;
};

export default Card;
