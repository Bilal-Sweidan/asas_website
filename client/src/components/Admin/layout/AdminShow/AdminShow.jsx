import { Outlet, useLocation } from 'react-router'
import { PathHeader } from '../headers'


export default function AdminShow() {
    const location = useLocation()
    return (
        <section className='w-100' style={{ backgroundColor: "rgb(20 20 50)", height: "calc(100% - 62px)" }}>
            <PathHeader />
            <section className='p-3'>
                <Outlet />
            </section>
        </section>
    )
}
