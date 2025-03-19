import React from 'react'
import { Link } from 'react-router';
// react icons
import { GoPlus } from "react-icons/go";
export default function AddingProductCard() {
    return (
        <Link to={"/product/add"} className='card center text-capitalize' style={{ width: "300px", height: "300px", backgroundColor: "rgba(244, 244, 244, 0.53)", boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}>
            <GoPlus size={"50%"}/>
            adding new product
        </Link>
    )
}
