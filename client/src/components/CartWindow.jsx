import React from 'react'

import useCart from '../hooks/useCart';
// react icons 
import { AiOutlineClose } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import { MdWidthFull } from 'react-icons/md';
import { Link } from 'react-router';

export default function CartWindow({ cartWindow, setCartWindow }) {

    const { cartItems, deleteFromCart } = useCart()
    return (
        <div className='z-3 position-fixed top-0 end-0 vh-100 overflow-hidden' style={{ width: cartWindow ? "100%" : "0", transition: "1s" }}>
            <div className='z-3 position-absolute top-0 end-0 h-100 text-bg-light p-4 overflow-auto' style={{ width: "35%" }}>
                <nav className='between'>
                    <p className='text-capitalize'>my card</p>
                    <AiOutlineClose className='pointer' onClick={() => setCartWindow(false)} />
                </nav>
                <hr />
                {
                    cartItems?.items?.map((item, index) => (
                        <Link to={""} className='text-dark between gap-3 text-nowrap'>
                            {/* to={`/cart/${item?.productId?._id}`} */}
                            <div className=''>
                                <img src={`http://localhost:4000/uploads/${item?.productId?.image[0]}`} className='w-50' alt="" />
                            </div>
                            <div>
                                <p className=''>{item?.productId?.name}</p>
                                <p>{item?.quantity} X {item?.productId?.price}</p>
                            </div>
                            <nav className='center' >
                                <GoTrash size={"20px"} onClick={() => deleteFromCart(item?.productId?._id)} />
                            </nav>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
