import React from 'react'
import { Link } from 'react-router'
// react icons 
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdDescription } from 'react-icons/md';
export default function OfferSmallCard({img,name,price,discount,description}) {
    return (
        <div className='d-flex gap-3 px-4 py-2 mb-2 rounded' style={{ backgroundColor: "rgba(232, 232, 232, 0.40)" }}>
            <img src={img} alt="" />
            <div className='py-3 px-2'>
                <p className='h4'>{name}</p>
                <p className=''>{description}</p>
                <p>${price}</p>
                <Link className='btn center gap-3 text-light w-25' style={{ backgroundColor: "#C79426", borderRadius: "60px" }}><IoIosArrowRoundForward size={"25px"} color='white' /></Link>
            </div>
        </div>
    )
}
