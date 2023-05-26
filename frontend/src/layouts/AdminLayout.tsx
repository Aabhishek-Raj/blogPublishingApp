import { Outlet } from 'react-router-dom'
import AdminHeader from '../components/AdminHeader'

const AdminLayout = () => {
    return (
        <div className='w-full'>
            <AdminHeader />
            <Outlet />

        </div>
    )
}

export default AdminLayout