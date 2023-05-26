type UserProps = {
    user: UserType
}

const UserCard = ({ user }: UserProps) => {
  const content = (
    <tr className="bg-gray-300 border border-grey-500 text-black md:border-none block md:table-row">
    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>{user.name}</td>
    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>{user._id}</td>
    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>jrios@icloud.com</td>
    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>582-3X2-6233</td>
    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">block</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
    </td>
</tr>
  );

  return content;
};

export default UserCard;
