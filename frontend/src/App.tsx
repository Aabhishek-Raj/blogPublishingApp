import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AddBlog from "./pages/AddBlog";
import MyBlog from "./pages/MyBlog";
import EditBlog from "./pages/EditBlog";

function App() {
  const content = (
    <div className="w-screen h-screen bg-green-100">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="addblog" element={<AddBlog />} />
          <Route path="myblog" element={<MyBlog/>} />
          <Route path="editblog/:id" element={<EditBlog/>} />
        </Route>
      </Routes>
    </div>
  );

  return content;
}

export default App;
