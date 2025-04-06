import React, { useState } from 'react'
// scss file
import './AdminHeader.scss'
// icons 
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdOutlineNotificationsActive } from "react-icons/md";

// components
import {UserMenu} from '../../common/menu'

export default function AdminHeader({sideBarStatus,setSideBarStatus}) {
    const [userMenu, setUserMenu] = useState(false)

    return (
        <header id='AdminHeader' className='w-100 text-light px-2 py-3 between' style={{ backgroundColor: "#1d1d42", borderBottom: "1px solid #666" }}>
            <div>
                <HiOutlineMenuAlt1 size={"25px"} className='pointer' onClick={() => setSideBarStatus(!sideBarStatus)}/>
            </div>
            <div className='center gap-3'>
                <MdOutlineNotificationsActive size={"20px"} />
                <BsArrowsFullscreen />
                <div className=''>
                    <img src="../../../../public/1693657511Banner.jpg" className='rounded-circle pointer' style={{ width: "30px", height: "30px" }} alt="../../../../public/asas.png" onClick={() => setUserMenu(!userMenu)} />
                    {
                        userMenu && <UserMenu />
                    }
                </div>
            </div>
        </header>
    )
}
