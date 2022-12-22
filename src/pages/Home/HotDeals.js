import { Button } from '@mui/material';
import React from 'react';
import bgImage from '../../assets/images/hotdeal.png'

const HotDeals = () => {
    return (
        <div className='flex justify-center py-20' style={{backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll'}}>
            <div>
                <ul className='flex justify-center pb-5'>
                    <li className='mr-3 w-24 h-24 rounded-full bg-primary text-base-100 flex justify-center items-center'> <p className='text-center text-xl font-semibold'>10 <span className='block text-sm text-center uppercase'>Days</span> </p></li>
                    <li className='mr-3 w-24 h-24 rounded-full bg-primary text-base-100 flex justify-center items-center'> <p className='text-center text-xl font-semibold'>10 <span className='block text-sm text-center uppercase'>Hours</span> </p></li>
                    <li className='mr-3 w-24 h-24 rounded-full bg-primary text-base-100 flex justify-center items-center'> <p className='text-center text-xl font-semibold'>10 <span className='block text-sm text-center uppercase'>Mins</span> </p></li>
                    <li className='mr-3 w-24 h-24 rounded-full bg-primary text-base-100 flex justify-center items-center'> <p className='text-center text-xl font-semibold'>10 <span className='block text-sm text-center uppercase'>Secs</span> </p></li>
                </ul>
                <h2 className='text-center text-4xl font-bold text-neutral uppercase'>hot deal this week</h2>
                <h3 className='text-center text-xl uppercase py-5'>New Collection Up to 50% OFF</h3>
                <div className='flex justify-center'>
                <Button sx={{ borderRadius: '45px', background: '#ff1e00', padding: '10px 30px', '&:hover':{backgroundColor: '#011B39'}  }} variant='contained'>Shop Now</Button>
                </div>
            </div>
        </div>
    );
};

export default HotDeals;