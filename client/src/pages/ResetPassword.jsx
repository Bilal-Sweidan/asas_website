import './style/Login.scss'

import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/Context';
import { Link, useNavigate, Navigate, useLocation, useParams } from 'react-router-dom';
// icons
import { IoLogInOutline } from "react-icons/io5";
import { PiHandWavingDuotone } from "react-icons/pi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// components
import { LoginSlide } from '../components/features/slides';
// services
import userService from '../services/userService';
export default function ResetPassword() {
    const navigate = useNavigate()

    const { user, isPending, handleLogin } = useContext(AuthContext.UserContext)

    const [passwordStatus, setPasswordStatus] = useState('password')
    // css style variables
    const submit_btn_style = {
        fontFamily: "Sevillana-Regular",
        fontSize: "20px",
        fontWeight: "bold"
    }
    const [password,setPassword] = useState('')
    const { token } = useParams()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await userService.resetPassword(token,password)
        console.log(res.data.message)
        if(res.status == 200){
            navigate('/sign-in')
        }
    }
    return (
        <>
            {
                <section className="main-section text-light d-flex " style={{ backgroundColor: "" }}>
                    <div className="vh-100 d-flex" style={{ width: "70%" }}>
                        <img src='/halloween-3d-interior-background.jpg' className='w-100' style={{ objectFit: "cover" }} alt="" />
                        {/* <LoginSlide /> */}
                    </div>
                    <div className="right-div d-flex align-items-center justify-content-center text-bg-light" style={{ width: "30%" }}>
                        <div className='w-75 h-75 px-3'>
                            <h2 className='mb-5 text-capitalize d-flex align-items-center gap-2'><PiHandWavingDuotone size={"50px"} />welcome back</h2>
                            <form action="" method='dialog' className='' onSubmit={handleSubmit}>
                                <div >
                                    <label htmlFor="" className='form-label text-capitalize fw-bold'>new password</label><br />
                                    <div className='position-relative'>
                                        <input type={passwordStatus} name="password" id="" placeholder='Enter new Password' aria-describedby='asd123KJLSFJA#$@%@#' className='form-control' style={{ padding: "13px", backgroundColor: "#00101c54", color: "white" }} onChange={(e) => setPassword(e.target.value)}/>
                                        {
                                            passwordStatus == "password" ?
                                                (<AiOutlineEye color='white' size={"25px"} className='position-absolute pointer' style={{ top: "25%", right: "15px" }} onClick={() => setPasswordStatus('text')} />)
                                                :
                                                (<AiOutlineEyeInvisible color='white' size={"25px"} className='position-absolute pointer' style={{ top: "25%", right: "15px" }} onClick={() => setPasswordStatus('password')} />)

                                        }
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-end'>
                                    <button type='submit' className='btn btn-primary my-4 w-50 text-capitalize' disabled={isPending} style={submit_btn_style}>submit<IoLogInOutline className='mx-2' size={'30px'} /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}