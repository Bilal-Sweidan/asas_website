import React, { useState } from 'react'

import { AdminHeader } from '../../../components/Admin/layout/headers'
import { AdminSideBar } from '../../../components/Admin/layout/sideBar'
import { AdminShow } from '../../../components/Admin/layout/AdminShow'
export default function AdminPage() {
    const [sideBarStatus, setSideBarStatus] = useState(true)
    return (
        <main className='d-flex'>
            <div className='trans-slow' style={{ width: sideBarStatus ? "18%" : "5%" }}>
                <AdminSideBar sideBarStatus={sideBarStatus} setSideBarStatus={setSideBarStatus} />
            </div>
            <div className='trans-slow' style={{ width: sideBarStatus ? "82%" : "100%" }}>
                <AdminHeader sideBarStatus={sideBarStatus} setSideBarStatus={setSideBarStatus} />
                <AdminShow />
            </div>
        </main>
    )
}
