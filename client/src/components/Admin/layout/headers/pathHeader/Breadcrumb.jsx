import { useLocation, Link } from "react-router";
// icons
import { RiArrowRightDoubleLine } from "react-icons/ri";

export default function Breadcrumb() {
    const fullLocation = useLocation().pathname.split('/').slice(2)
    const location = useLocation().pathname.split('/').slice(2)
    console.log(fullLocation)
    return (
        <div className='text-light px-3 pt-2 d-flex'>
            {
                location?.map((currentLocation, index) => (
                    <div className="d-flex align-items-center" style={{fontFamily : "ProtestGuerrilla-Regular"}}>
                        {
                            index == 0 ? <p className="text-capitalize">{currentLocation} </p> : <Link to={fullLocation.slice(0, index + 1).join('/')} className="text-capitalize text-decoration-none" style={{color : "rgb(121, 97, 245)"}}>{currentLocation.split("-").join(' ')} </Link>
                        }
                        {
                            index == location.length - 1 ? "" : <RiArrowRightDoubleLine className="mt-1 mx-2" />
                        }
                    </div>
                ))
            }
        </div>
    )
}
