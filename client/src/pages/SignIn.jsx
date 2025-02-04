import './style/Login.scss'

import { useContext, useEffect, useState } from 'react';
import UserContext from '../context/Context';
import { Link, useNavigate, Navigate, useLocation } from 'react-router-dom';
// icons
import { IoLogInOutline } from "react-icons/io5";
import { PiHandWavingDuotone } from "react-icons/pi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


export default function SignIn() {
    const navigate = useNavigate()

    // const { user, isPending } = useContext(UserContext)
    const location = useLocation()

    const [passwordStatus,setPasswordStatus] = useState('password')
    // css style variables
    const submit_btn_style = {
        fontFamily: "Sevillana-Regular",
        fontSize: "20px",
        fontWeight: "bold"
    }

    // if (user) {
    //     return <Navigate to="/" state={{ from: location }} replace />
    // }
    return (
        <>
            {
                <section className="main-section text-light d-flex " style={{ backgroundColor: "" }}>
                    <div className="vh-100 d-flex px-3 py-2 w-50" style={{}}>
                        <img src='/low-poly-grid-haikei (1).svg' className='w-100' style={{ objectFit: "cover", borderRadius: "15px" }} alt="" />
                    </div>
                    <div className="right-div d-flex align-items-center justify-content-center w-50">
                        <div className='w-75 h-75 px-3'>
                            <h2 className='mb-5 text-capitalize d-flex align-items-center gap-2'><PiHandWavingDuotone size={"50px"} />welcome back</h2>
                            <form action="" method='dialog' className='px-3' onSubmit={async (e) => {
                                // fetch_data(e)
                                // if (user) {
                                //     navigate('/')
                                // }
                            }}>
                                <div className='mb-3 position-relative'>
                                    <label htmlFor="" className='form-label text-capitalize fw-bold'>email address</label><br />
                                    <input type="text" name="username" id="" placeholder='enter your email' className='form-control' style={{ padding: "13px", backgroundColor: "#00101c54", color: "white" }} />
                                </div>
                                <div >
                                    <label htmlFor="" className='form-label text-capitalize fw-bold'>password</label><br />
                                    <div className='position-relative'>
                                        <input type={passwordStatus} name="password" id="" placeholder='Enter Password' aria-describedby='asd123KJLSFJA#$@%@#' className='form-control' style={{ padding: "13px", backgroundColor: "#00101c54", color: "white" }} />
                                        {
                                            passwordStatus == "password" ?
                                                (<AiOutlineEye color='white' size={"25px"} className='position-absolute pointer' style={{ top: "25%", right: "15px" }} onClick={() => setPasswordStatus('text')}/>)
                                                :
                                                (<AiOutlineEyeInvisible color='white' size={"25px"} className='position-absolute pointer' style={{ top: "25%", right: "15px" }} onClick={() => setPasswordStatus('password')} />)

                                        }
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-end'>
                                    <button type='submit' className='btn btn-primary my-4 w-50 text-capitalize' disabled={""} style={submit_btn_style}>Login<IoLogInOutline className='mx-2' size={'30px'} /></button>
                                </div>
                                <hr />
                            </form>

                            <p className='no-account text-center mt-5 '>
                                I do not have an account yet ? <Link to='/registration' className='text-capitalize'>registr</Link>
                            </p>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}