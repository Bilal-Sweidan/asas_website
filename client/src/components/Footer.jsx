export default function Footer() {
    return (
        <footer className="d-flex text-light align-items-center justify-content-around p-3" style={{ background: "#2D5356" }}>
            <div className="logo m-0 text-light text-center w-25" style={{ lineHeight: "-1px" }}>
                <img src="/Furniture logo.png" className="w-50" alt="" />
                <h2 className='m-0'>ASAS</h2>
                <p className=' text-uppercase' style={{ fontSize: "80%", margin: "-10px 0 0 0", fontWeight: "bold" }}>modern</p>
            </div>
            <div>
                <p className="h4 text-capitalize">pages</p>
                <ul className="list-unstyled">
                    <li>home</li>
                    <li>products</li>
                    <li>categories</li>
                    <li>about us</li>
                    <li>contact us</li>
                </ul>
            </div>
            <div>
                <p className="h4 text-capitalize">information</p>
                <ul className="list-unstyled">
                    <li>Delivery Information</li>
                    <li>Privacy Policy</li>
                    <li>Trams & Conditions</li>
                    <li>Return</li>
                </ul>
            </div>
            <div>
                <p className="h5 text-capitalize">payment gateway</p>
                <nav className="d-flex justify-content-around px-3">
                    <img src="/pngimg.com - mastercard_PNG23.png" className="m-auto" style={{ width: "50px" }} alt="" />
                    <img src="/paypal.png" alt="" />
                </nav>
            </div>
        </footer>
    )
}
