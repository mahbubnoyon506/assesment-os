import React, { useState } from 'react';
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';

const ItemTable = ({ item }) => {
    const { _id, model, image, price} = item;


    const handledelete = () => {
        (async () => {
            await axios.delete(`http://localhost:5000/api/cart/item/${_id}`)
                .then(res => {
                    console.log(res)
                    if (res.status === 200) {
                        console.log('data deleted')
                    }
                })
        })()
    }


    return (
        <tr className=''>
            <td class="mr-3 w-24 h-24"><img className='h-24' src={image} alt="" /></td>
            <td class="pl-5 text-lg font-medium text-[#252525] bg[]">{model}</td>
            <td class="pl-5 text-lg font-medium text-[#252525] bg[]">{price} Taka</td>

            <td class="pl-5 cursor-pointer"><FaTrashAlt className='text-neutral hover:text-primary' size={20}/></td>

        </tr>
    );
};

export default ItemTable;