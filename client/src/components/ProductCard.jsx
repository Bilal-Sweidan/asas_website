// React icons
import { RiShoppingCartLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
// React
import { Link } from "react-router";
// hooks
import useHomeProducts from "../hooks/useHomeProducts"
// scss file
import './ProductCard.scss'
// components
import LoadingProductCard from "./Loading/LoadingProductCard";
export default function ProductCard() {
    const { products, loading, error } = useHomeProducts()
    if (loading) {
        return (
            <>
                <LoadingProductCard />
                <LoadingProductCard />
            </>
        )
    }
    return (
        products?.map((product, index) => (
            <Link to={`/product/${product?._id}`} key={index} className='card product-card position-relative' style={{ width: "300px", height: "300px", backgroundColor: "rgba(244, 244, 244, 0.53)", boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.25)" }}>
                <nav className='position-absolute px-2 py-1 top-0 between w-100' style={{ boxShadow: "" }}>
                    <p className=' text-white p-1 px-2' style={{ backgroundColor: "#2D5356", borderRadius: "40px", fontSize: "75%" }}>-{product?.discount}%</p>
                    <div className='rounded-circle p-1 pointer center' style={{ backgroundColor: "white", boxShadow: "0 0 5px black", width: "25px", height: "25px" }}>
                        <CiHeart size={"20px"} />
                    </div>
                </nav>
                {/* `http://localhost:4000/uploads/${product?.image[0]}` || */}
                <img src={  `http://localhost:4000/uploads/${product?.image[0]}` || `https://arraik-store.onrender.com/uploads/${product?.image[0]}`} alt="" className="mx-auto" />
                <nav className='between text-light px-2 position-absolute w-100' style={{ height: "70px", top: "calc(100% - 70px)", borderRadius: "0 0 4px 4px", backgroundColor: "#2D5356" }}>
                    <nav>
                        <p className="product-name">{product?.name}</p>
                        <p className="price">$ {product?.price}</p>
                    </nav>
                    <Link to={"y"} className='rounded-circle p-1 pointer center' style={{ backgroundColor: "white", boxShadow: "0 0 5px black", width: "40px", height: "40px" }}>
                        <RiShoppingCartLine size={"30px"} color='black' />
                    </Link>
                </nav>
            </Link>
        ))
    )
}
