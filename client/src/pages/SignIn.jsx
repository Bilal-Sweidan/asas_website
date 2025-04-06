import './style/Login.scss'

import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/Context';
import { Link, useNavigate, Navigate, useLocation } from 'react-router-dom';
// icons
import { IoLogInOutline } from "react-icons/io5";
import { PiHandWavingDuotone } from "react-icons/pi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { LuArrowBigLeftDash } from "react-icons/lu";

// components
import { LoginSlide } from '../components/features/slides';
// services
import userService from '../services/userService';


export default function SignIn() {
    const navigate = useNavigate()

    const { user, isPending, handleLogin } = useContext(AuthContext.UserContext)

    const [passwordStatus, setPasswordStatus] = useState('password')
    // css style variables
    const submit_btn_style = {
        fontFamily: "Sevillana-Regular",
        fontSize: "20px",
        fontWeight: "bold"
    }

    const [email, setEmail] = useState("")
    const handleForgetPassword = async () => {
        console.log(!email)
        if (email) {
            const res = await userService.forgetPassword(email)
            console.log(res.data.message)
        }
    }

    return (
        <>
            <section className="main-section text-light d-flex " style={{ backgroundColor: "" }}>
                <div className="vh-100 d-flex" style={{ width: "70%" }}>
                    <nav className='position-absolute z-3 m-3 p-2 bg-dark rounded-circle pointer' onClick={() => navigate(-1)}>
                        <LuArrowBigLeftDash className='' size={"30px"} />
                    </nav>
                    <img src='/halloween-3d-interior-background.jpg' className='w-100' style={{ objectFit: "cover" }} alt="" />
                    {/* <LoginSlide /> */}
                </div>
                <div className="right-div d-flex align-items-center justify-content-center text-bg-light" style={{ width: "30%" }}>
                    <div className='w-75 h-75 px-3'>
                        <h2 className='mb-5 text-capitalize d-flex align-items-center gap-2'><PiHandWavingDuotone size={"50px"} />welcome back</h2>
                        <form action="" method='dialog' className='' onSubmit={async (e) => {
                            handleLogin(e)
                            if (user) {
                                navigate('/')
                            }
                        }}>
                            <div className='mb-3 position-relative'>
                                <label htmlFor="" className='form-label text-capitalize fw-bold'>email address</label><br />
                                <input type="text" name="email" id="" placeholder='enter your email' className='form-control' style={{ padding: "13px" }} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div >
                                <label htmlFor="" className='form-label text-capitalize fw-bold'>password</label><br />
                                <div className='position-relative'>
                                    <input type={passwordStatus} name="password" id="" placeholder='Enter Password' aria-describedby='asd123KJLSFJA#$@%@#' className='form-control' style={{ padding: "13px" }} />
                                    {
                                        passwordStatus == "password" ?
                                            (<AiOutlineEye color='#333' size={"25px"} className='position-absolute pointer' style={{ top: "25%", right: "15px" }} onClick={() => setPasswordStatus('text')} />)
                                            :
                                            (<AiOutlineEyeInvisible color='#333' size={"25px"} className='position-absolute pointer' style={{ top: "25%", right: "15px" }} onClick={() => setPasswordStatus('password')} />)

                                    }
                                </div>
                            </div>
                            <a className='text-capitalize mx-2 pointer' onClick={() => handleForgetPassword()}>forget password ?</a>
                            <div className='d-flex align-items-center justify-content-end'>
                                <button type='submit' className='btn btn-primary my-4 w-50 text-capitalize' disabled={isPending} style={submit_btn_style}>Login<IoLogInOutline className='mx-2' size={'30px'} /></button>
                            </div>
                            <hr />
                        </form>

                        <p className='no-account text-center mt-5 '>
                            I do not have an account yet ? <Link to='/sign-up' className='text-capitalize'>registr</Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}