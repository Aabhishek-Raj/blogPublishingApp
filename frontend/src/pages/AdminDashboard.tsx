import { useEffect } from "react";
import UserCard from "../components/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { getAllUsers } from "../features/admin/adminSlice";

const AdminDashboard = () => {

    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    const { users } = useSelector((state: RootState) => state.admin )

  const content = (
    <table className="mt-6 min-w-full border-collapse block md:table">
            <thead className="block md:table-header-group">
                <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Authors</th>
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Author Id</th>
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Email Address</th>
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Mobile</th>
                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
                </tr>
            </thead>
            <tbody className="block md:table-row-group">
                
                {
                    users && users.map((user) => <UserCard key={user._id} user={user}/> )
                }
               
            </tbody>
        </table>
  );
  return content;
};

export default AdminDashboard;
