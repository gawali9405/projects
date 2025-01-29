import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-700 text-white '>
    <div className='  sm:flex sm:flex-wrap sm:justify-around  p-10 text-gray-300'>
        <div className='flex flex-col gap-1 my-10'>
            <h3 className='text-2xl font-medium'>Get to know Us</h3>
            <Link to="/about_company" className=' hover:text-orange-300 transition-all duration-200'>About Company</Link>
            <Link to="/careers" className=' hover:text-orange-300 transition-all duration-200'>Careers</Link>
            <Link to="/press_release" className=' hover:text-orange-300 transition-all duration-200'>Press Release</Link>
            <Link to="/investor_relations" className=' hover:text-orange-300 transition-all duration-200'>Investor Relations</Link>
        </div>
        <div className='flex flex-col gap-1 my-10'>
            <h3  className='text-2xl font-medium'>Connect with Us</h3>
            <Link to="/facebook" className=' hover:text-orange-300 transition-all duration-200'>Facebook</Link>
            <Link to="/twitter" className=' hover:text-orange-300 transition-all duration-200'>Twitter</Link>
            <Link to="/linkedin" className=' hover:text-orange-300 transition-all duration-200'>Linkedin</Link>
            <Link to="/instagram" className=' hover:text-orange-300 transition-all duration-200'>Instagram</Link>
        </div>
        <div className='flex flex-col gap-1 my-10 '>
            <h3  className='text-2xl font-medium'>Make Money with Us</h3>
            <Link to="/sell_on_amazon" className=' hover:text-orange-300 transition-all duration-200'>Sell on Amazon</Link>
            <Link to="/sell_your_services" className=' hover:text-orange-300 transition-all duration-200'>Sell Your Services</Link>
            <Link to="/sell_your_apps" className=' hover:text-orange-300 transition-all duration-200'>Sell Your Apps</Link>
            <Link to="/become_an_affiliate" className=' hover:text-orange-300 transition-all duration-200'>Become an Affiliate</Link>
        </div>
        <div className='flex flex-col gap-1 my-10'>
            <h3  className='text-2xl font-medium'>Let Us Help You</h3>
            <Link to="/your_account" className=' hover:text-orange-300 transition-all duration-200'>Your Account</Link>
            <Link to="/your_orders"  className=' hover:text-orange-300 transition-all duration-200'>Your Orders</Link>
            <Link to="/shipping_rates"  className=' hover:text-orange-300 transition-all duration-200'>Shipping Rates & Policies</Link>
            <Link to="/returns"  className=' hover:text-orange-300 transition-all duration-200'>Returns & Replacements</Link>
        </div>
    </div>    
    <div>
    <p className='text-center p-5 text-gray-300'>© All rights reserved 2025.</p>    
    </div>    
        
</footer>
  )
}

export default Footer