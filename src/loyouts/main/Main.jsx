// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Main() {
    return (
        <div>
            <Navbar />
            <div className='min-h-screen container'>
                <div>
                    <h1>Good</h1> <h1>Booking</h1>
                </div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}


