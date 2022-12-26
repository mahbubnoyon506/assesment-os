import React, { useEffect } from 'react';
import NewProducts from '../../components/category/NewProducts/NewProducts';
import TopProducts from '../../components/category/TopProducts/TopProducts';
import HotDeals from './HotDeals';


import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <div>
            <TopProducts />
            <HotDeals />
            <NewProducts />
        </div>
    );
};

export default Home;

