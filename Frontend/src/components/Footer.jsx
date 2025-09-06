
import React from "react";
import { assets } from "../assets/assets";
import {useNavigate} from 'react-router-dom';
export default function Footer() {

    const navigate= useNavigate();

    return (
    <div className="md:mx-10">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

                    {/* Footer Left Section */}
                <div>
                    <img className="mb-5 w-40 " src={assets.logo} alt=""/>
                    <p className="w-full md:w-2/3 text-gray-600 leading-6">Arogyam makes healthcare simple with easy online doctor appointment booking. Find trusted doctors, book instantly, manage schedules, and access care conveniently anytime, ensuring a seamless healthcare experience.
                    </p>

                </div>

                {/* Footer Middle Section */}
                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li onClick={()=> {navigate('/'); scrollTo(0,0)}} className=' cursor-pointer' >Home </li>
                        <li onClick={()=> {navigate('/about'); scrollTo(0,0)}} className=' cursor-pointer' >About Us</li>
                        <li onClick={()=> {navigate('/contact'); scrollTo(0,0)}} className=' cursor-pointer'>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                
                </div>
            
                {/* Footer Right Section */}
                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>+1-212-456-7890</li>
                        <li>contactus@gmail.com</li>
                
                    </ul>
                </div>
        
        
        </div>
        {/* Footer Bottom Section */}
        <div>
            <hr/>
            <p className="py-5 text-sm text-center">© 2025 Arogyam. All rights reserved.</p>
        </div>

    </div>
    )
}