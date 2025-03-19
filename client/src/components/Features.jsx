import React from 'react'
// React icons
import { TbTruckDelivery } from "react-icons/tb";
import { TbShieldCheck } from "react-icons/tb";
import { BsTools } from "react-icons/bs";
export default function () {
    return (
        <main className='center p-5 flex-wrap'>
            <div className='w-25 text-center'>
                <div className='rounded-circle m-auto center' style={{backgroundColor : "#C79426", width :  "130px" , height : "130px" , boxShadow :  "0 0 10px #666" }}>
                    <TbTruckDelivery  color='white' size={"70%"}/>
                </div>
                <p className='h3 fw-bold pt-3'>Free Delivery</p>
                <p className='w-75 m-auto'>Enjoy free delivery straight to your doorstep, with no hidden fees</p>
            </div>

            <div className='w-25 text-center'>
                <div className='rounded-circle m-auto center' style={{backgroundColor : "#C79426", width :  "130px" , height : "130px" , boxShadow :  "0 0 10px #666" }}>
                    <TbShieldCheck  color='white' size={"70%"}/>
                </div>
                <p className='h3 fw-bold pt-3'>Free Delivery</p>
                <p className='w-75 m-auto'>Enjoy free delivery straight to your doorstep, with no hidden fees</p>
            </div>

            <div className='w-25 text-center'>
                <div className='rounded-circle m-auto center' style={{backgroundColor : "#C79426", width :  "130px" , height : "130px" , boxShadow :  "0 0 10px #666" }}>
                    <BsTools  color='white' size={"50%"}/>
                </div>
                <p className='h3 fw-bold pt-3'>Free Delivery</p>
                <p className='w-75 m-auto'>Enjoy free delivery straight to your doorstep, with no hidden fees</p>
            </div>

        </main>
    )
}
