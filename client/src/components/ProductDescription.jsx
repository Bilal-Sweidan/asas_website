import React from 'react'

export default function ProductDescription() {
    return (
        <main className='w-50 py-5' style={{marginLeft : "20%" , color : "#5a5a5a" , lineHeight : "30px"}}>
            <p>
                Our chair collection features a variety of designs, materials,
                and finishes to match any decor scheme. From timeless classics to cutting-edge contemporary pieces,
                each chair is carefully crafted with attention to detail and durability in mind.
                Whether you prefer the warmth of wood, the sophistication of leather,
                or the versatility of metal and plastic,you'll find the perfect chair to elevate your home or office.
            </p>
            <h3 className='mt-2 text-dark'>About this item</h3>
            <ul>
                <li>This chair is specifically designed with a small footprint, making it ideal for cozy spaces where maximizing seating capacity is essential</li>
                <li>Despite its small size, comfort is not compromised. The seat and backrest are carefully contoured to provide adequate support for comfortable sitting, even during extended periods.</li>
                <li>Despite its compactness, this chair boasts a sturdy construction, ensuring stability and durability. Its robust frame can withstand daily use without wobbling or weakening over time.</li>
                <li>Designed for convenience, assembly of this chair is quick and straightforward. With minimal parts and clear instructions, you can have it set up and ready to use in no time.</li>
                <li>While perfect for small apartments, dorm rooms, or compact dining areas, this chair is also versatile enough to serve as an extra seating option in various settings, including offices, waiting rooms, or even outdoor patios.</li>
            </ul>
        </main>
    )
}
