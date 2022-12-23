import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaRegHeart } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { IoLogoUsd } from 'react-icons/io'
import { BsPersonCircle } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Button } from '@mui/material';
import OpenCart from '../components/Products/OpenCart'
import OpenWishlist from '../components/Products/OpenWishlist'



const Header = () => {
    const [openCart, setOpenCart] = useState(false);
    const [openWishList, setOpenWishList] = React.useState(null);

    const handleClick = (event) => {
        setOpenCart(event.currentTarget);
    };

    const handleClickWish = (event) => {
        setOpenWishList(event.currentTarget);
    };

    return (
        <div className=''>
            <div className='text-base-100 bg-[#1E1F29] py-2 px-5 md:px-10 flex justify-between'>
                <div className=' '>
                    <ul className='md:flex'>
                        <li className='font-semibold hover:text-primary mr-2'><a className='flex items-center' href=""><FaPhoneAlt color='#ff1e00' /> +021-95-51-84</a></li>
                        <li className='font-semibold hover:text-primary mr-2'><a className='flex items-center' href=""><FaEnvelope color='#ff1e00' /> email@email.com</a></li>
                        <li className='font-semibold hover:text-primary mr-2'><a className='flex items-center' href=""><MdLocationOn color='#ff1e00' /> 1734 Stonecoal Road</a></li>
                    </ul>
                </div>
                <div className='md:flex'>
                    <p className='font-semibold hover:text-primary mr-2 flex items-center'><IoLogoUsd color='#ff1e00' />USD</p>
                    <p className='font-semibold hover:text-primary mr-2 flex items-center'><BsPersonCircle color='#ff1e00' />My Account</p>
                </div>
            </div>
            <div className='bg-[#15161D] py-3 px-10 lg:flex flex-row justify-between items-center border-b-2 border-primary'>
                <div className='basis-1/4 flex justify-center lg:justify-start pb-5 lg:pb-0'>
                    <p className='text-6xl font-bold text-base-100'>Electro</p>
                </div>
                <div className='basis-2/4 lg:flex justify-between bg-base-100 rounded-full py-1 px-3 hidden'>
                    <div className=''>
                        <select className='' name="" id="">
                            <option value="All Category" selected>All Category</option>
                            <option value="Category 1">Category 1</option>
                            <option value="Category 2">Category 2</option>
                            <option value="Category 3">Category 3</option>
                        </select>
                    </div>
                    <input type="search" name="" id="" />
                    <Button sx={{ borderRadius: '45px', background: '#ff1e00', padding: '5px 20px', '&:hover': { backgroundColor: '#011B39' } }} variant="contained" >Search</Button>
                </div>
                <div className='basis-1/4 flex justify-evenly text-base-100'>
                    <div>
                        <button className='cursor-pointer'
                            onClick={handleClickWish}
                        >
                            <FaRegHeart className='mx-auto' size={30} color='#ff1e00' />
                            <p>Your Wishlist</p>
                        </button>
                        {
                            openWishList &&
                            <OpenWishlist
                                className=""
                                openWishList={openWishList}
                                setOpenWishList={setOpenWishList}
                            ></OpenWishlist>
                        }
                    </div>
                    <div>
                        <button className='cursor-pointer'
                            onClick={handleClick}
                        >
                            <AiOutlineShoppingCart className='mx-auto' size={30} color='#ff1e00' />
                            <p>Your Cart</p>
                        </button>
                        {openCart &&
                            <OpenCart
                                className=""
                                openCart={openCart}
                                setOpenCart={setOpenCart}
                            ></OpenCart>
                        }
                    </div>
                </div>
            </div>
            <div className='bg-base-100 py-4 border-b-2 border-secondary'>
                <ul className='md:flex justify-center'>
                    <li className='mx-5 text-lg font-semibold'>Home</li>
                    <li className='mx-5 text-lg font-semibold'>Hot Deals</li>
                    <li className='mx-5 text-lg font-semibold'>Laptop</li>
                    <li className='mx-5 text-lg font-semibold'>Cameras</li>
                    <li className='mx-5 text-lg font-semibold'>Smartphones</li>
                    <li className='mx-5 text-lg font-semibold'>Accessories</li>
                </ul>
            </div>
        </div >
    );
};

export default Header;


