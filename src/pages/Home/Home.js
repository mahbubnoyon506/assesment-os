import React from 'react';
import NewProducts from '../../components/category/NewProducts/NewProducts';
import TopProducts from '../../components/category/TopProducts/TopProducts';
import HotDeals from './HotDeals';

const Home = () => {
    return (
        <div>
           <TopProducts/>
           <HotDeals/>
           <NewProducts/>
        </div>
    );
};

export default Home;