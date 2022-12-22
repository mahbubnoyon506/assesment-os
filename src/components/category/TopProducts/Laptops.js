import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import { FaEye, FaRegHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Button, Tooltip } from '@mui/material';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const Laptops = () => {

    const products = [
        { id: 1 },
        { id: 1 },
        { id: 1 },
        { id: 1 },
    ]
    return (
        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
            {
                products.map((product, index) =>
                    <Card sx={{ minWidth: '' }}>
                        <div className='flex justify-center'><img src="https://picsum.photos/250" alt="" /></div>
                        <p className='text-center pt-8 text-[#BDBDBD]'>Category</p>
                        <h2 className=' font-bold text-center pt-3'>Product</h2>
                        <h2 className='text-xl font-semibold text-center py-3 text-primary'>$9000 <span className='text-lg font-normal line-through text-[#BDBDBD]'>1000</span> </h2>
                        <div className='flex justify-center'> <Rating sx={{ color: '#ff1e00' }} name="half-rating" defaultValue={2.5} precision={0.5} /></div>
                        <div className='flex justify-center w-48 mx-auto py-5'>
                            <Tooltip title="Wishlist" placement="top">
                                <Button><FaRegHeart className='mx-auto' size={20} color='#ff1e00' /></Button>
                            </Tooltip>
                            <Tooltip title="Add to Cart" placement="top">
                                <Button><AiOutlineShoppingCart className='mx-auto cursor-pointer' size={20} color='#ff1e00' /></Button>
                            </Tooltip>
                            <Tooltip title="Quick View" placement="top">
                                <Button><FaEye className='mx-auto cursor-pointer' size={20} color='#ff1e00' /></Button>
                            </Tooltip>
                        </div>
                    </Card>
                )
            }
        </div>
    );
};

export default Laptops;