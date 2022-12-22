import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { IoLogoUsd } from 'react-icons/io'
import { BsPersonCircle } from 'react-icons/bs'




const Header = () => {



    return (
        <div className=''>
            <div className='text-base-100 bg-[#1E1F29] py-2 px-10 flex justify-between'>
                <div className=' '>
                    <ul className='flex'>
                        <li className='font-semibold hover:text-primary mr-2'><a className='flex items-center' href=""><FaPhoneAlt color='#ff1e00'/> +021-95-51-84</a></li>
                        <li className='font-semibold hover:text-primary mr-2'><a className='flex items-center' href=""><FaEnvelope color='#ff1e00'/> email@email.com</a></li>
                        <li className='font-semibold hover:text-primary mr-2'><a className='flex items-center' href=""><MdLocationOn color='#ff1e00'/> 1734 Stonecoal Road</a></li>
                    </ul>
                </div>
                <div className='flex'>
                   <p className='font-semibold hover:text-primary mr-2 flex items-center'><IoLogoUsd color='#ff1e00'/>USD</p>
                   <p className='font-semibold hover:text-primary mr-2 flex items-center'><BsPersonCircle color='#ff1e00'/>My Account</p>
                </div>
            </div>
            <div>
                <div>
                    <p>Electro</p>
                </div>
                <div>
                    <div><select name="" id=""></select></div>
                </div>
                <div>

                </div>
            </div>
        </div >
    );
};

export default Header;


