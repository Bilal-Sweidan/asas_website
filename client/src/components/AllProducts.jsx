import React from 'react'
import SecondHeader from './SecondHeader'
import ProductCard from './ProductCard'
// scss file
import './AllProducts.scss'
// react icons
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
export default function AllProducts() {
    return (
        <>
            <SecondHeader text="products" />
            <section className='products-display d-flex gap-5 px-5 py-4'>
                <nav className='filter'>
                    <p className='h3 text-capitalize'>filter option</p>
                    <nav className='card dropDown mb-3'>
                        <button type='button' className='btn text-capitalize'>categories</button>
                    </nav>
                    <nav className='card dropDown mb-3 py-2 px-3'>
                        <p className='text-capitalize h5 m-0'>price</p>
                        <p className=''>$50.00-$200</p>
                    </nav>
                    <nav className='card dropDown mb-3 py-2 px-3'>
                        <p className='text-capitalize h5 m-0'>materials</p>
                        <p className=''>$50.00-$200</p>
                    </nav>
                </nav>
                <nav className='products-section py-2'>
                    <header className='between w-100'>
                        <p>Showing 1-15 of 300 result</p>
                        <nav className='d-flex gap-2 w-25'>
                            <p className='text-nowrap '>Sort by: </p>
                            <select name="" id="" className=''>
                                <option value="default sort" className='' selected>default sort</option>
                            </select>

                            <p className='text-nowrap'>Size : </p>
                            <select name="" id="" className=''>
                                <option value="default sort" className='' selected>size</option>
                            </select>
                        </nav>
                    </header>
                    <section className='py-5 d-flex gap-3 flex-wrap'>
                        <ProductCard />
                    </section>
                    <footer className='d-flex gap-2 justify-content-end'>
                        <button type='button' className='btn bg-light rounded-circle center p-0'><IoIosArrowRoundBack size={"25px"}/></button>
                        <nav className='center gap-2'>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p>......</p>
                            <p>14</p>
                        </nav>
                        <button type='button' className='btn btn-c7 center p-0'><IoIosArrowRoundForward size={"25px"}/></button>
                    </footer>
                </nav>
            </section>
        </>
    )
}
