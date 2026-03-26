'use client' // Add this if using Next.js App Router

import Image from "next/image"
import { useState, useEffect } from "react"
import './loader.css'

const Loader = () => {
    const [showLoader, setShowLoader] = useState(true)

    useEffect(() => {
        // Set timeout to hide loader after 3 seconds
        const timer = setTimeout(() => {
            setShowLoader(false)
        }, 3000)

        // Cleanup timeout on component unmount
        return () => clearTimeout(timer)
    }, [])

    if (!showLoader) return null

    return (
        <div className='w-screen h-screen flex items-center justify-center bg-background fixed z-20'>
            <div className="flex flex-col gap-[10px] justify-center items-center">
                <div className="w-[41px] h-[38px] relative">
                    <Image src="/assets/icons/logo.svg" fill alt='TalentVare' />
                </div>
                <div className="loader"></div>
            </div>
        </div>
    )
}

export default Loader