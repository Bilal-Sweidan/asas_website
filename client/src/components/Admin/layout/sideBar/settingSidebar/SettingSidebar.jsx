import React from 'react'
import { Link } from 'react-router'

// scss
import './SettingSidebar.scss'
// icons
import { AiOutlineProduct, AiOutlineLock, AiOutlineLink } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoLaw } from "react-icons/go";
export default function SettingSidebar({ active }) {
    return (
        <div className='col-2 rounded py-3' style={{ backgroundColor: "rgb(29, 29, 66)" , height : "fit-content"}}>
            <Link className='w-100 px-4 text-start text-light text-decoration-none text-capitalize btn custom-btn-list d-flex align-items-center'>
                <AiOutlineProduct size={"20px"} className='mx-2' /> general
            </Link>

            <Link to={"password"} className='w-100 px-4 text-start text-light text-decoration-none text-capitalize btn d-flex align-items-center  custom-btn-list '>
                <AiOutlineLock size={"20px"} className='mx-2' /> password
            </Link>

            <Link to={"social-media"} className='w-100 px-4 text-start text-light text-decoration-none text-capitalize btn d-flex align-items-center custom-btn-list'>
                <AiOutlineLink size={"20px"} className='mx-2' /> social media
            </Link>

            <Link className='w-100 px-4 text-start text-light text-decoration-none text-capitalize btn d-flex align-items-center custom-btn-list'>
                <IoMdNotificationsOutline size={"20px"} className='mx-2' /> notification
            </Link>

            <Link className='w-100 px-4 text-start text-light text-decoration-none text-capitalize btn d-flex align-items-center custom-btn-list'>
                <GoLaw size={"20px"} className='mx-2' /> roles
            </Link>
        </div>
    )
}
