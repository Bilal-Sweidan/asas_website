// react icons 
import { RiMapPinUserLine, RiShoppingCartLine, RiSearch2Line } from "react-icons/ri";
import { MdLanguage } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { TbLanguageKatakana } from "react-icons/tb";
// react
import { Link, Outlet } from 'react-router';
import Footer from "../components/Footer";
// context
import { LanguageContext } from "../context/languageContext";
import { useContext, useState } from "react";
// component
import LanguageMenu from "../components/LanguageMenu";
import AuthContext from '../context/Context'
// scss file 
import './Index.scss'
export default function Index() {

    const { language } = useContext(LanguageContext)
    const [langWindow, setLangWindow] = useState(false)

    const { user, setUser, logout } = useContext(AuthContext.UserContext)
    return (
        <main className="position-relative">
            <header className='d-flex justify-content-between' style={{ padding: "0 5rem", backgroundColor: "#2D5356" }}>
                <div className="logo m-0 text-light text-center w-25" style={{ lineHeight: "-1px" }}>
                    <h2 className='m-0'>ASAS</h2>
                    <p className=' text-uppercase' style={{ fontSize: "80%", margin: "-10px 0 0 0", fontWeight: "bold" }}>modern</p>
                </div>
                <div className='w-50 gap-4 center px-5 text-capitalize' style={{ backgroundColor: "#C79426", borderRadius: "0 0 15px 15px" }} dir={language == "ar" ? "rtl" : "ltr"}>
                    <Link className='nav-link text-hover'>{language == "ar" ? "الصفحة الرئيسية" : "Home"}</Link>
                    <Link to={"products"} className='nav-link text-hover'>{language == "ar" ? "المنتجات" : "products"}</Link>
                    {/* <Link className='nav-link text-hover'>{language == "ar" ? "الفئات" : "categories"}</Link> */}
                    <Link to={"about"} className='nav-link text-hover'>{language == "ar" ? "من تحن" : "about us"}</Link>
                    <Link className='nav-link text-hover'>{language == "ar" ? "تواصل معنا" : "contact"}</Link>
                </div>
                <div className='center gap-4 w-25'>
                    <Link to={"/products"}><RiSearch2Line size={"23px"} color='white' /></Link>


                    <Link onClick={() => setLangWindow(!langWindow)}>
                        <TbLanguageKatakana size={"23px"} color='white' />
                        {
                            langWindow && <LanguageMenu setLangWindow={setLangWindow} />
                        }
                    </Link>

                    <Link className="shop-card center text-decoration-none">
                        <nav className="position-relative">
                            <RiShoppingCartLine size={"23px"} color='white' />
                            <nav className="card-items-number position-absolute rounded-circle center fw-bold">
                                2
                            </nav>
                        </nav>
                        <p className="card-price p-0" style={{ fontSize: "13px", marginBottom: "-8px" }}>$0.00</p>
                    </Link>

                    <nav className="d-flex gap-3 ">
                        {
                            !user ?
                                <Link to={"/sign-in"} className="nav-link text-light text-nowrap" style={{ width: "80px" }}>{language == "ar" ? "تسجيل دخول" : "log in"}</Link>
                                :
                                <>
                                    <Link><RiMapPinUserLine size={"23px"} color='white' /></Link>
                                    <Link className="nav-link text-light" onClick={logout}>{language == "ar" ? "تسجيل خروج" : "Log out"}</Link>
                                </>
                        }
                    </nav>

                </div>
            </header>

            <Outlet />

            <a href="" className="center position-fixed z-3 p-2  rounded-circle" style={{ bottom: "30px", right: "30px", backgroundColor: "#C79426", boxShadow: "0 0 10px white" }}>
                <FaWhatsapp size={"40px "} color="black" />
            </a>
            {/* the footer */}
            <Footer />
        </main>
    )
}
