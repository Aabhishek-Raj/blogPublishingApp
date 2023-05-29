import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AddBlog from "./pages/AddBlog";
import MyBlog from "./pages/MyBlog";
import EditBlog from "./pages/EditBlog";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import AdminSignIn from "./pages/AdminSignIn";
import PendingBlogs from "./pages/PendingBlogs";
import LiveBlogs from "./pages/LiveBlogs";
import AddReason from "./pages/AddReason";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const content = (
    <div className="w-screen h-screen bg-green-100">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="addblog" element={<AddBlog />} />
          <Route path="myblog" element={<MyBlog />} />
          <Route path="editblog/:id" element={<EditBlog />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="signin" element={<AdminSignIn />} />
          <Route path="pending" element={<PendingBlogs />} />
          <Route path="live" element={<LiveBlogs />} />
          <Route path="reason/:blogId" element={<AddReason />} />
        </Route>
      </Routes>
    </div>
  );

  return content;
}

export default App;
