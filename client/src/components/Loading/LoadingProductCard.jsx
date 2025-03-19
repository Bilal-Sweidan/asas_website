import React from 'react'
import ContentLoader from "react-content-loader"

export default function LoadingProductCard() {
    return (
        <ContentLoader
            speed={1}
            width={300}
            height={300}
            viewBox="0 0 300 300"
            backgroundColor="#f5f5f5"
            foregroundColor="#2d5356"
        >
            <rect x="0" y="0" rx="10" ry="10" width="300" height="300" />
        </ContentLoader>
    )
}
