import { ChangeEvent, MouseEvent, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { toast } from "react-toastify";
import { useSignUpMutation } from "../features/user/userApiSlice";
import { setCredentials } from "../features/user/authSlice";

export type SignUpDataType = {
  name: string;
  email: string
  phone: number
  password: string;
};

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: 0,
    password: "",
  });
  
    const navigate = useNavigate()
    const dispatch: AppDispatch = useDispatch()

    const [signUp] = useSignUpMutation()

  const { name, email, phone, password } = formData;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
        ...prevState, 
        [e.target.name]: e.target.value
    }))
  }

  const onSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      phone,
      password,
    };

    try {
  
      const credentialsData = await signUp(userData)
      dispatch(setCredentials(credentialsData))
      navigate('/')
      toast.success("Registered Successfully")
    } catch (err: any) {
      console.error(err)
      toast.error(err.response.data);
    }
  };

  const content = (
    <div className="bg-green-100 h-screen overflow-hidden flex items-center justify-center">
      <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
        <form className="p-12 md:p-24">
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
              <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
            </svg>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              id="username"
              className="bg-green-100 text-gray-800 pl-12 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Username*"
            />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
              <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
            </svg>
            <input
              type="text"
              name="email"
              value={email}
              onChange={onChange}
              id="username"
              className="bg-green-100 text-gray-800 pl-12 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Email*"
            />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
              <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
            </svg>
            <input
              type="number"
              name="phone"
              value={phone}
              onChange={onChange}
              id="username"
              className="bg-green-100 text-gray-800 pl-12 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Phone No*"
            />
          </div>
          <div className="flex items-center text-lg mb-6 md:mb-8">
            <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
              <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
            </svg>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              id="password"
              className="bg-green-100 text-gray-800 pl-12 py-2 md:py-4 focus:outline-none w-full"
              placeholder="Password*"
            />
          </div>
          <button
          onClick={onSubmit}
           className="bg-gradient-to-b from-gray-700 to-green-900 font-medium p-2 md:p-4 text-white uppercase w-full">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
  return content;
};

export default SignUp;
