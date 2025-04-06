import React, { useState } from 'react'

// material ui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// sass file
import './Passwords.scss'
// hooks
import useChangePassword from '../../../hooks/useChangePassword';

export default function Passwords() {
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    // change password hooks
    const { changePassword, isLoading, error } = useChangePassword()

    if (error) {
        return (
            <div class="alert alert-primary position-absolute" role="alert">
                <span className='text-danger text-capitalize'>error</span>{error}
            </div>
        )
    }
    if (isLoading) {
        return <>loading....</>
    }
    return (
        <div className=''>
            <h5 className='text-capitalize'>change password</h5>
            <form action="" className="change-password-form" onSubmit={() => changePassword(currentPassword, newPassword)}>
                <label htmlFor="" className='text-capitalize mb-2'>current password</label>
                <input type="text" name="" placeholder='Current Password' className='form-control w-50 ms-1' id="" onChange={(e) => setCurrentPassword(e.target.value)} />

                <label htmlFor="" className='text-capitalize my-2'>new password</label>
                <input type="text" name="" placeholder='New Password' className='form-control w-50 ms-1' id="" onChange={(e) => setNewPassword(e.target.value)} />
                <hr />
                <div className='between '>
                    <input type="reset" value="reset" className='btn btn-danger text-capitalize' />
                    <input type="submit" value="Save changes" className='btn btn-success text-capitalize' />
                </div>
            </form>
        </div>
    )
}
