import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router';

// sass file
import './UserMenu.scss'
// context
import AuthContext from '../../../../context/Context'
// icons
import { RiLogoutCircleLine , RiSettings4Line } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";

export default function UserMenu() {
    const { user, logout , setUser } = useContext(AuthContext.UserContext)
    const navigate = useNavigate()
    return (
        <div className='user-menu position-absolute overflow-hidden mx-2 rounded' style={{ width: "180px", right: "0px", top: "62px", backgroundColor: "var(--admin-main)", border: "1px solid #666" }}>
            <div className='text-center text-capitalize p-2'>
                <p className=''>bassam</p>
                <p className=''>{user?.role}</p>
            </div>
            <hr className='m-2' />
            <div className='py-2'>
                <Link type='button' to={"setting/password"} className='button d-flex align-items-center gap-2 px-3 py-2 text-decoration-none'>
                    < RiSettings4Line size={"20px"} />
                    <p className='' style={{ fontSize: "15px" }}>setting</p>
                </Link>

                <button type='button' className='button d-flex align-items-center gap-2 px-3 py-2' onClick={() => {
                    const res = logout()
                    if (res) {
                        navigate('/')
                        setUser(null)
                    }
                }}>
                    <RiLogoutCircleLine size={"20px"} />
                    <p className='' style={{ fontSize: "15px" }}>log out</p>
                </button>
            </div>
        </div>
    )
}

