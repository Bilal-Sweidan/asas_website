// react icons 
import { RiMapPinUserLine, RiShoppingCartLine, RiSearch2Line } from "react-icons/ri";
// react
import { Link, Outlet } from 'react-router';
import Footer from "../components/Footer";

export default function Index() {
    return (
        <main >
            <header className='d-flex justify-content-between' style={{ padding: "0 5rem", backgroundColor: "#2D5356" }}>
                <div className="logo m-0 text-light text-center w-25" style={{ lineHeight: "-1px" }}>
                    <h2 className='m-0'>ASAS</h2>
                    <p className=' text-uppercase' style={{ fontSize: "80%", margin: "-10px 0 0 0", fontWeight: "bold" }}>modern</p>
                </div>
                <div className='w-50 gap-3 center px-5 text-capitalize' style={{ backgroundColor: "#C79426", borderRadius: "0 0 15px 15px" }}>
                    <Link className='nav-link text-hover'>Home</Link>
                    <Link to={"products"} className='nav-link text-hover'>products</Link>
                    <Link className='nav-link text-hover'>categories</Link>
                    <Link to={"about"} className='nav-link text-hover'>about us</Link>
                    <Link className='nav-link text-hover'>contact</Link>
                </div>
                <div className='center gap-4 w-25'>
                    <Link to={"/products"}><RiSearch2Line size={"23px"} color='white' /></Link>
                    <Link><RiShoppingCartLine size={"23px"} color='white' /></Link>

                    <nav className="d-flex gap-3 text-capitalize">
                        <Link to={"/sign-in"} className="nav-link text-light">sign in</Link>
                        <Link to={"/sign-up"} className="nav-link text-light">sign up</Link>
                    </nav>
                    {/* <Link><RiMapPinUserLine size={"23px"} color='white' /></Link> */}
                </div>
            </header>

            <Outlet />

            {/* the footer */}
            <Footer />
        </main>
    )
}
