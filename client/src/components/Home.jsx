import React, { useContext } from 'react'
// swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
// 
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// react icons 
import { RiMapPinUserLine, RiShoppingCartLine, RiSearch2Line } from "react-icons/ri";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { GoCircle } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
// react
import { Link, Outlet } from 'react-router';
// components
import ProductCard from "../components/ProductCard";
import Footer from './Footer';
// context
import { LanguageContext } from '../context/languageContext';
import OfferSmallCard from './OfferSmallCard';
import ImageSlide from './ImageSlide';

export default function Home() {
    const { language } = useContext(LanguageContext)

    const items = [
        "/3804 3.png",
        "/3804 3.png",
        "/3804 3.png",
        "/3804 3.png",
        "/3804 3.png",
    ]
    return (
        <section className="body w-100 text-dark" >
            <div style={{ backgroundColor: "#2D5356", height: "calc(100vh - 45px)" }}>
                {/* <div className="background position-absolute w-100">
                    <svg className='w-100 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 469" fill="none">
                        <path d="M1264.62 230.97C1228.28 215.412 1192.62 200.666 1155.95 191.302C1113.8 180.535 1076.77 178.779 1042.75 185.929C1027.81 189.069 1013.18 194.249 999.265 201.324C985.441 208.352 972.625 217.098 961.176 227.313C950.984 236.408 942.125 246.43 934.739 257.159C927.484 256.589 920.02 256.323 912.395 256.365C885.89 256.514 856.476 260.317 822.474 267.997C806.699 271.564 790.748 275.673 775.323 279.647C734.003 290.29 691.276 301.298 648.267 302.696C620.329 303.605 592.409 300.192 565.464 292.972C496.145 274.398 433.372 230.617 394.034 170.419C391.86 167.094 389.532 163.337 387.176 159.218C392.895 157.778 398.529 156.157 404.077 154.358C439.614 142.833 464.931 125.227 479.326 102.036C487.625 88.66 491.833 71.8918 490.869 56.0275C489.829 38.9517 483 23.9731 471.634 13.8507C464.535 7.52412 456.103 3.4003 446.58 1.59306C437.797 -0.0745093 428.489 0.28889 418.913 2.67159C406.874 5.66644 395.313 11.6593 385.481 20.0015C375.285 28.656 367.639 39.303 363.373 50.7904C356.234 70.0122 355.435 91.5315 360.992 114.751C364.056 127.551 369.127 140.901 375.915 154.159C304.267 169.493 233.678 153.78 184.865 136.655C129.833 117.349 70.1404 78.997 17.4725 45.1585C7.01825 38.4419 -3.02031 31.9917 -12.8098 25.8162L-14.8404 33.3946C-5.69633 39.1769 3.68356 45.2024 13.423 51.4607C66.4375 85.5223 126.524 124.125 182.387 143.726C219.9 156.886 257.055 164.751 292.815 167.101C323.235 169.096 352.315 167.05 379.585 161.013C382.117 165.548 384.849 170.058 387.761 174.518C428.112 236.262 492.484 281.161 563.583 300.212C591.214 307.615 619.862 311.116 648.509 310.185C692.345 308.76 735.478 297.647 777.191 286.902C792.563 282.941 808.458 278.845 824.127 275.306C853.315 268.712 891.27 261.942 930.063 264.363C922.422 276.879 916.716 290.246 913.146 304.135C909.353 318.892 908.182 334.401 909.662 350.227C911.105 365.671 915.005 380.721 921.244 394.961C934.305 424.758 956.383 447.905 983.415 460.134C988.407 462.393 993.513 464.221 998.622 465.59C1004.57 467.183 1010.51 468.152 1016.26 468.449C1028.58 469.086 1039.65 466.723 1049.17 461.425C1063 453.735 1073.85 439.437 1079.7 421.165C1088.53 393.619 1084.37 362.707 1067.98 334.122C1052.74 307.545 1028.09 285.278 1000.34 273.026C987.014 267.145 972.517 262.77 957.246 260.021C952.731 259.212 948.105 258.534 943.374 257.989C966.693 226.002 1003.08 201.924 1044.29 193.264C1114.52 178.501 1184.29 204.726 1261.67 237.859L1458.88 322.293L1460.84 314.981L1264.62 230.97ZM383.454 152.431C369.728 126.294 357.194 88.9499 370.396 53.3982C378.085 32.6917 397.838 15.6337 420.722 9.94162C430.627 7.47649 440.079 7.43389 448.557 9.70552C455.289 11.5095 461.41 14.7752 466.652 19.4437C488.869 39.2343 487.307 74.9699 472.961 98.0841C459.526 119.73 435.572 136.267 401.767 147.23C395.668 149.211 389.56 150.937 383.454 152.431ZM997.314 279.879C1047.79 302.163 1090.91 361.643 1072.57 418.878C1067.29 435.332 1057.69 448.118 1045.53 454.878C1029.7 463.687 1008.18 463.115 986.501 453.307C935.148 430.075 905.496 363.994 920.402 306.002C924.118 291.543 930.318 277.748 938.531 265.041C958.413 266.986 978.366 271.517 997.314 279.879Z" fill="white" fill-opacity="0.2" />
                    </svg>
                </div> */}
                <div className='top-section d-flex align-items-center h-100 px-5'>
                    <div className='w-50 p-5'>
                        <p className='text-center p-1 w-50 text-light mb-3' style={{ backgroundColor: "rgba(255, 255, 255, 0.11)", borderRadius: "40px" }}>FURNITURE DESIGNS IDEAS</p>
                        <h1 className='text-light'>Modern Interior <br /> Design Studio</h1>
                        <p className='w-75' style={{ color: "#fff" }}>Choosing the right furniture for your home online will add elegance and functionality to your interior while also being cost effective and long lasting.</p>
                        <Link className='btn text-light text-capitalize pointer px-4 mt-3' style={{ backgroundColor: "#C79426", borderRadius: "60px", fontWeight: "bold" }}>shop now <IoIosArrowRoundForward size={"30px"} color='white' /></Link>
                    </div>
                    <div className='w-50'>

                    </div>
                </div>
            </div>
            <div className='px-5 py-3'>
                <header className="category-slide d-flex align-items-center justify-content-between">
                    <p className='m-0 text-capitalize h4' style={{ fontFamily: "arial", fontWeight: "bold" }}>
                        categories
                    </p>
                    <div>
                        <button className='btn'><IoIosArrowRoundBack size={"30px"} color='black' /></button>
                        <button className='btn'><IoIosArrowRoundForward size={"30px"} color='black' /></button>
                    </div>
                </header>
                <div className='d-flex align-items-center justify-content-center py-5 gap-5'>
                    <div className='item text-center'>
                        <div className='rounded-circle center' style={{ width: "200px", height: "200px", boxShadow: "0 0 10px black" }}>
                            <img src="/rb_80320 1.png" alt="" className='' />
                        </div>
                        <div className='mt-3'>
                            <p className="text-capitalize font-weight-bold m-0 h5">clocks</p>
                            <p className=" m-0">Discover 120 Products</p>
                        </div>
                    </div>
                </div>
                <footer className='center gap-2'>
                    <GoCircle className='pointer bg-dark rounded-circle' />
                    <GoCircle className='pointer' />
                    <GoCircle className='pointer' />
                    <GoCircle className='pointer' />
                    <GoCircle className='pointer' />
                </footer>
            </div>
            {/* products */}
            <div className='px-5 py-3 products'>
                <header className="category-slide">
                    <div className='between'>
                        <p className='m-0 text-capitalize h4' style={{ fontFamily: "arial", fontWeight: "bold" }}>
                            Trending product for you!
                        </p>
                        <Link className='btn center gap-3 text-light' style={{ backgroundColor: "#C79426", borderRadius: "60px" }}>View All Product <IoIosArrowRoundForward size={"30px"} color='white' /></Link>
                    </div>
                    <div className="filter">
                        <button className='btn text-capitalize'>bad room</button>
                        <button className='btn text-capitalize'>living room</button>
                        <button className='btn text-capitalize'>dining room</button>
                        <button className='btn text-capitalize'>outdoor</button>
                        <button className='btn text-capitalize'>indoor</button>
                    </div>
                </header>
                <div className='py-4 position-relative center gap-3 flex-wrap'>
                    <ProductCard />
                </div>
            </div>
            {/* offers */}
            <section className='center flex-wrap px-5 gap-5'>
                <div className='p-4 w-50 card rounded' style={{ backgroundColor: "rgba(232, 232, 232, 0.40)", width: "45%" }}>
                    <nav className='d-flex mb-3'>
                        <div className='w-75'>
                            <p className='h4'>Flash Sale!</p>
                            <p>Act fast to grab incredible deals on select furniture pieces in our limited-time flash sale.</p>
                        </div>
                        <nav>
                            <nav>
                                End time
                                <nav className='d-flex gap-2'>
                                    <div>12H</div>
                                    <div>35M</div>
                                    <div>57S</div>
                                </nav>
                            </nav>
                        </nav>
                    </nav>
                    <nav className='d-flex gap-5'>
                        <div>
                            <img src="/rb_1405 1.png" alt="" />
                            <div className='center gap-4'>
                                <p>$599</p>
                                <p>$799</p>
                            </div>
                        </div>
                        <div className='w-75 center'>
                            <div>
                                <p className='h4'>Vintage Leather Armchai</p>
                                <p className=''>Bring a touch of retro charm to your home with this vintage leather armchair. Sturdy construction ensures durability.</p>
                                <Link className='btn center gap-3 text-light my-4 w-50' style={{ backgroundColor: "#C79426", borderRadius: "60px" }}>shop now <IoIosArrowRoundForward size={"30px"} color='white' /></Link>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className='' style={{ width: "45%" }}>
                    <OfferSmallCard img={"/rb_82203 1.png"} name={"Elegant Wooden Desk"} price={"60.99"} description={"Bring a touch of retro charm to your home with this vintage leather armchair."} />
                    <OfferSmallCard img={"/empty-brown-wooden-book-shelf 1.png"} name={"Elegant Wooden Desk"} price={"60.99"} description={"Bring a touch of retro charm to your home with this vintage leather armchair."} />
                </div>
            </section>
            {/* image slide bar */}
            <section className='py-5 px-4'>
                <ImageSlide images={items} />
            </section>
            {/* full house furniture  */}
            <section>
                <div className='px-5 py-3 products'>
                    <header className="category-slide">
                        <div className='between'>
                            <p className='m-0 text-capitalize h4' style={{ fontFamily: "arial", fontWeight: "bold" }}>
                                full house furniture
                            </p>
                            <Link className='btn center gap-3 text-light' style={{ backgroundColor: "#C79426", borderRadius: "60px" }}>View All Product <IoIosArrowRoundForward size={"30px"} color='white' /></Link>
                        </div>
                    </header>
                    <div className='py-4 position-relative center gap-3 flex-wrap'>
                        <ProductCard />
                    </div>
                </div>
            </section>
            {/* Subscribe To Newsletter */}
            <section className="subscribe m-auto between gap-5 mx-5 my-4 p-4" style={{ backgroundColor: "rgba(232, 232, 232, 0.40)", borderRadius: "20px", boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.30)" }}>
                <div className="">
                    <p className="h3">Subscribe To Our Newsletter</p>
                    <p>Subscribe to our email newsletter today to receive update on the latest news</p>

                    <form action="" className="mt-4">
                        <nav className="d-flex gap-1 align-items-center p-2" style={{ backgroundColor: "white", borderRadius: "40px" }}>
                            <label htmlFor="subscribe-btn" className="p-1  rounded-circle" style={{ backgroundColor: "rgba(232, 232, 232, 0.40)" }}>
                                <MdOutlineMail size={"30px"} />
                            </label>
                            <input type="text" id="subscribe-btn" className="form-control" placeholder="Enter Your Email" style={{ outline: "none", border: "none" }} />
                            <button type="submit" className="text-capitalize btn text-light" style={{ backgroundColor: "#C79426", borderRadius: "40px" }}>subscribe</button>
                        </nav>
                    </form>
                </div>
                <div className="">
                    <img src="/image 10.png" alt="" />
                </div>
            </section>
            {/* MRQ */}
            <div className="">
                <header className="text-center text-capitalize w-25 m-auto " style={{ fontFamily: "inter", fontSize: "40px", fontStyle: "normal", fontWeight: "500", lineHeight: "normal", textWrap: "wrap" }}>Got Questions? We’ve Got Answers!</header>
                <div className="py-3">
                    <nav className="between m-auto p-2 mb-3" style={{ width: "900px", height: "60px", backgroundColor: "rgba(244, 244, 244, 0.53)", borderRadius: "10px", boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                        <p className="" style={{ fontFamily: "inter", fontSize: "20px", fontWeight: "400" }}>How do I choose the right furniture for my space?</p>
                        <button className='btn' style={{ backgroundColor: "#C79426", borderRadius: "60px" }}><IoIosArrowRoundForward size={"30px"} color='white' /></button>
                    </nav>
                    <nav className="between m-auto p-2 mb-3" style={{ width: "900px", height: "60px", backgroundColor: "rgba(244, 244, 244, 0.53)", borderRadius: "10px", boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                        <p className="" style={{ fontFamily: "inter", fontSize: "20px", fontWeight: "400" }}>What materials are your furniture items made of?</p>
                        <button className='btn' style={{ backgroundColor: "#C79426", borderRadius: "60px" }}><IoIosArrowRoundForward size={"30px"} color='white' /></button>
                    </nav>
                    <nav className="between m-auto p-2 mb-3" style={{ width: "900px", height: "60px", backgroundColor: "rgba(244, 244, 244, 0.53)", borderRadius: "10px", boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                        <p className="" style={{ fontFamily: "inter", fontSize: "20px", fontWeight: "400" }}>What is your delivery process?</p>
                        <button className='btn' style={{ backgroundColor: "#C79426", borderRadius: "60px" }}><IoIosArrowRoundForward size={"30px"} color='white' /></button>
                    </nav>
                    <nav className="between m-auto p-2 mb-3" style={{ width: "900px", height: "60px", backgroundColor: "rgba(244, 244, 244, 0.53)", borderRadius: "10px", boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                        <p className="" style={{ fontFamily: "inter", fontSize: "20px", fontWeight: "400" }}>What is your return and exchange policy?</p>
                        <button className='btn' style={{ backgroundColor: "#C79426", borderRadius: "60px" }}><IoIosArrowRoundForward size={"30px"} color='white' /></button>
                    </nav>
                    <nav className="between m-auto p-2 mb-3" style={{ width: "900px", height: "60px", backgroundColor: "rgba(244, 244, 244, 0.53)", borderRadius: "10px", boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}>
                        <p className="" style={{ fontFamily: "inter", fontSize: "20px", fontWeight: "400" }}>How can I contact customer support for assistance?</p>
                        <button className='btn' style={{ backgroundColor: "#C79426", borderRadius: "60px" }}><IoIosArrowRoundForward size={"30px"} color='white' /></button>
                    </nav>
                </div>
            </div>
        </section>
    )
}
