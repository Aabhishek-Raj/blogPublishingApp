import { Link } from "react-router-dom";

const AdminHeader = () => {
  const content = (
    <header className="bg-green-300">
      <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <svg
            className="h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Blog share
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg
              className="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to={"/admin"}
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter text-white hover:text-black mr-4"
              >
                Home
            </Link>
            <Link to={"/admin/pending"}
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter text-white hover:text-black mr-4"
              >
                Requested
            </Link>
            <Link to={"/admin/live"}
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter text-white hover:text-black mr-4"
              >
                Live Blogs

            </Link>
            <Link to={"/admin"}
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter text-white hover:text-black"
              >
                Rejected
            </Link>
          </div>
          <div>
            <Link to={'/admin/signin'}
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"
            >

              signIn
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );

  return content;
};

export default AdminHeader;
