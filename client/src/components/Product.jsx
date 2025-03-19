import React, { useState } from 'react'
import { Outlet, Link, useLocation, useParams } from 'react-router';

// components
import SecondHeader from './SecondHeader'
// react icons
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { LiaShareAltSolid } from "react-icons/lia";
import { RiShoppingCartLine } from "react-icons/ri";
// scss file
import './Product.scss'
import ProductCard from './ProductCard';

// hooks
import useProductDetails from '../hooks/useProductDetails'
import useCart from '../hooks/useCart'

// cart service
import cartService from "../services/cartService"

export default function Product() {
    const [counter, setCounter] = useState(1)
    // use hooks
    const { details, loading } = useProductDetails()

    const { addToCart, isLoading } = useCart()

    const { cartItems } = useCart()

    const { id } = useParams()

    return (
        <>
            <SecondHeader text={"Product"} />
            <section className='px-5 py-5 text-dark d-flex justify-content-center gap-5 flex-wrap w-100'>
                <div className='image-div'>
                    <div className='card center mb-2'>
                        <img src={`http://localhost:4000/uploads/${details?.image[0]}`} alt="" className='w-100' />
                    </div>
                    <div className='other-product-image center d-flex gap-2'>
                        <img src={`http://localhost:4000/uploads/${details?.image[0]}`} alt="" className='image' />
                        <img src={`http://localhost:4000/uploads/${details?.image[0]}`} alt="" className='image' />
                        <img src={`http://localhost:4000/uploads/${details?.image[0]}`} alt="" className='image' />
                    </div>
                </div>
                <div className='py-1 w-25 '>
                    <p className='product-name h3'>{details?.name}</p>
                    <p className='min-w-100 mb-2'>{details?.description}</p>
                    <p className='price h4'>$ {details?.price}</p>
                    <p className='product-id text-capitalize'>product id : {details?._id}</p>
                    <div className='d-flex align-items-center gap-2'>
                        <nav className='center'>
                            <FaStar color='#C79426' className='star-icon' />
                            <FaStar color='#C79426' className='star-icon' />
                            <FaStar color='#C79426' className='star-icon' />
                            <FaStar color='#C79426' className='star-icon' />
                            <FaStar color='#C79426' className='star-icon' />
                        </nav>
                        <p>4.9</p>
                        <p style={{ color: "#666" }}>140 Reviews 431 sold</p>

                    </div>
                    <form action="" method='dialog'>
                        <div className="counter my-4 p-1 d-flex gap-2 justify-content-between">
                            <button type='button' className='btn py-0 px-1 rounded-circle center pointer' onClick={() => { setCounter(counter - 1) }}>-</button>
                            {counter}
                            <button type='button' className='btn pointer py-0 px-1 rounded-circle center' onClick={() => { setCounter(counter + 1) }}>+</button>
                        </div>
                        <div className='d-flex gap-2'>
                            <button type='button' className='btn text-capitalize btn-c7'>contact now</button>
                            <button type='button' className='btn btn-icon center rounded-circle p-0' onClick={() => { addToCart(id, "black", counter);}}><RiShoppingCartLine size={"20px"} /></button>
                            <button type='button' className='btn btn-icon center rounded-circle p-0'><LiaShareAltSolid size={"25px"} /></button>
                        </div>
                    </form>
                </div>
            </section>
            <section>
                <header className='center gap-3 '>
                    <Link to={`description`} type='button' className='btn text-capitalize btn-c7 text-bg-light'>description</Link>
                    <button type='button' className='btn text-capitalize btn-c7 text-bg-light'>review</button>
                    <button type='button' className='btn text-capitalize btn-c7 text-bg-light'>additional information</button>
                </header>
                <section>
                    <Outlet />
                </section>
                <section className='similar-product w-75 pb-5'>
                    <p className='fs-2 text-capitalize mb-3'>similar products</p>
                    <div className='d-flex flex-wrap  gap-3'>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </section>
            </section>
        </>
    )
}
