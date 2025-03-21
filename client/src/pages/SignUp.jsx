import './style/Login.scss'

import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// icons
import { RiAccountPinCircleLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// axios
import axios from 'axios'
// hooks
import useRegister  from '../hooks/useRegister';

export default function SignUp() {
    const navigate = useNavigate();

    const {register,pending,error} = useRegister()
    console.log(register)
    async function handleRegister(e) {
        const res = await register(e)
        console.log(res)
    }

    const [passwordStatus, setPasswordStatus] = useState('password')

    // css style variables
    const submit_btn_style = {
        fontFamily: "Sevillana-Regular",
        fontSize: "20px",
        fontWeight: "bold"
    }

    return (
        <>
            <section className="main-section text-light d-flex" style={{ backgroundColor: "" }}>
                <div className="vh-100 d-flex px-3 py-2 w-50" style={{}}>
                    <img src='/rb_25982 1.png' className='w-100' style={{ objectFit: "cover", borderRadius: "15px" }} alt="" />
                </div>
                <div className="right-div d-flex align-items-center justify-content-center w-50">
                    <div className='w-75 h-75 px-3'>
                        <h2 className='mb-5 text-capitalize'>Create an account</h2>
                        <form action="" method='dialog' className='px-3' onSubmit={handleRegister}>
                            <div className='mb-3 position-relative'>
                                <label htmlFor="" className='form-label text-capitalize fw-bold'>username</label><br />
                                <input type="email" name="email" id="" placeholder='enter your email' className='form-control' style={{ padding: "13px", backgroundColor: "#00101c54", color: "white" }} />
                            </div>
                            <div>
                                <label htmlFor="" className='form-label text-capitalize fw-bold'>password</label><br />
                                <div className='position-relative'>
                                    <input type={passwordStatus} name="password" id="" placeholder='Enter Password' aria-describedby='asd123KJLSFJA#$@%@#' className='form-control' style={{ padding: "13px", backgroundColor: "#00101c54", color: "white" }} />
                                    {
                                        passwordStatus == "password" ?
                                            (<AiOutlineEye color='white' size={"25px"} className='position-absolute pointer' style={{ top: "25%", right: "15px" }} onClick={() => setPasswordStatus('text')} />)
                                            :
                                            (<AiOutlineEyeInvisible color='white' size={"25px"} className='position-absolute pointer' style={{ top: "25%", right: "15px" }} onClick={() => setPasswordStatus('password')} />)

                                    }
                                </div>
                            </div>

                            <div className='d-flex align-items-center justify-content-end'>
                                <button type='submit' className='btn btn-primary my-4 w-50 text-capitalize' disabled={pending} style={submit_btn_style}>registration<RiAccountPinCircleLine className='mx-2' size={'30px'} /></button>
                            </div>
                            <hr />
                        </form>

                        <p className='no-account text-center mt-5 '>
                            I already have an account ? <Link to='/login' className='text-capitalize'>log in</Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}