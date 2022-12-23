import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';

const ItemTable = ({ item }) => {
    const { _id, name, image, price, quantity } = item;
    const [count, setCount] = useState(quantity);


    const handledelete = () => {
        ( async () => {
            await axios.delete(`http://localhost:5000/api/cart/item/${_id}`)
            .then( res => {
                console.log(res)
                if(res.status === 200){
                    console.log('data deleted')
                }
            })
        })()
    }


    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const handleIncrement = () => {
        setCount(count + 1)
    }

    return (
        <tr className=''>
            <td class="mr-3 w-24 h-24"><img className='h-24' src={image} alt="" /></td>
            <td class="pl-5 text-lg font-medium text-[#252525] bg[]">{name}</td>
            <td class="pl-5 text-lg font-medium text-[#252525] bg[]">{price} Taka</td>
            {
                _id &&
                <td class="pl-5"> <p className='flex justify-center items-center text-lg text-center text-[#252525] bg-[#F5F7FA] p-2'>Qty <span onClick={handleDecrement} className='px-2 cursor-pointer'><AiOutlineMinus /></span> {count} <span onClick={handleIncrement} className='px-2 cursor-pointer'><AiOutlinePlus /></span><MdOutlineCancel className='text-primary cursor-pointer text-right' onClick={handledelete} /></p></td>
            }
        </tr>
    );
};

export default ItemTable;