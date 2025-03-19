import React, { useContext, useState } from 'react'
import SecondHeader from './SecondHeader'
import ProductCard from './ProductCard'
import AddingProductCard from './Admin/AddingProductCard';
// scss file
import './AllProducts.scss'
// react icons
import { MdOutlineMail } from "react-icons/md";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { RiMapPinUserLine, RiShoppingCartLine, RiSearch2Line } from "react-icons/ri";
// context
import AuthContext from '../context/Context';
// hooks
import useSearch from '../hooks/useSearch';
import LoadingProductCard from './Loading/LoadingProductCard';
export default function AllProducts() {
    const { user } = useContext(AuthContext.UserContext)

    const { search, searchRes, isLoading, error } = useSearch()
    const [searchWord,setSearchWord] = useState()
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
                    <header className='search-header mb-3'>
                        <form action="" className="between w-100" onSubmit={(e) => { search() }}>
                            <nav className="d-flex gap-1 align-items-center p-2 w-75 bg-light" style={{ backgroundColor: "white", borderRadius: "40px" }}>
                                <label htmlFor="subscribe-btn" className="p-1  rounded-circle" style={{ backgroundColor: "rgba(232, 232, 232, 0.40)" }}>
                                    <RiSearch2Line size={"30px"} />
                                </label>
                                <input type="submit" name='searchWord' id="subscribe-btn" className="form-control bg-light" placeholder="Search for products" style={{ outline: "none", border: "none" }} />
                                <button type="submit" className="text-capitalize btn text-light" style={{ backgroundColor: "#C79426", borderRadius: "40px" }}>search</button>
                            </nav>
                            <nav className='center gap-2'>
                                <p className='text-nowrap '>Search by: </p>
                                <select name="searchBy" id="" className='form-select'>
                                    <option value="id" className='' selected>id number</option>
                                    <option value="name" className=''>Name</option>
                                </select>
                            </nav>
                        </form>
                    </header>
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
                        {
                            user?.role == 'admin' && <AddingProductCard />
                        }
                        <ProductCard />
                    </section>
                    <footer className='d-flex gap-2 justify-content-end'>
                        <button type='button' className='btn bg-light rounded-circle center p-0'><IoIosArrowRoundBack size={"25px"} /></button>
                        <nav className='center gap-2'>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p>......</p>
                            <p>14</p>
                        </nav>
                        <button type='button' className='btn btn-c7 center p-0'><IoIosArrowRoundForward size={"25px"} /></button>
                    </footer>
                </nav>
            </section>
        </>
    )
}
