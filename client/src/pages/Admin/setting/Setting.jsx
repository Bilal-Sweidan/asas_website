import React from 'react'
import { Outlet } from 'react-router'
import { SettingSidebar } from '../../../components/Admin/layout/sideBar'

export default function Setting() {
    return (
        <div className='text-light'>
            <h5 className='text-capitalize'>setting</h5>
            <section className='d-flex gap-3 p-3 h-auto'>
                <SettingSidebar />
                <div className='w-100 p-3 rounded' style={{ backgroundColor: "var(--admin-main)" }}>
                    <Outlet />
                </div>
            </section>
        </div>

    )
}
