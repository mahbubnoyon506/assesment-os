import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
import ItemTable from './ItemTable';
import { Button } from '@mui/material';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    // const [user] = useAuthState(auth);
    const user = ''
    console.log(user.email)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const cartShow = async () => {
        await axios.get(`http://localhost:5000/api/cart`)
        .then(res => {
            setCartItems(res.data.data)
        })
    }
    const carts = cartItems.filter( (item) => item.email === user?.email)

    useEffect(() => {
        cartShow()
    }, [])

   let total = 0;
   let delivery = 0 ;
   let vat = 1;
   let grandTotal  = 0
   carts.forEach( item => {
      total = total + (item.price * item.quantity);
      delivery = delivery + (200 * item.quantity);
      vat = +(total * 0.05).toFixed(2);
      grandTotal = total + delivery + vat
    });

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -12,
          top: -10,
          border: `2px solid ${theme.primary}`,
          padding: '0 4px',
        },
      }));

    return (
        <div className='lg:p-20 md:-10 p-5'>
            <h2 className='text-3xl font-bold pb-5'>Shopping Cart</h2>
            <div className='grid lg:grid-cols-3 gap-8'>
                <div className='lg:col-span-2'>
                    <table class="w-full">
                        <thead>
                            <tr>
                                <th class="bg-[#F5F7FA] py-3"></th>
                                <th class="text-left pl-5 bg-[#F5F7FA] py-3">Name</th>
                                <th class="text-left pl-5 bg-[#F5F7FA] py-3">Price</th>
                                <th class=" pl-5 bg-[#F5F7FA] py-3">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts.map((item) =>
                                    <ItemTable key={item.id} item={item}></ItemTable>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className='bg-[#F5F7FA] lg:p-10 p-5'>
                    <h3 className='text-lg font-bold'>Cart Total</h3>
                    <div>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}>

                            <ListItem disableGutters
                                secondaryAction={
                                    <ListItemText>{total}Tk</ListItemText>
                                }
                            >
                                <ListItemText>Subtotal: </ListItemText>
                            </ListItem>
                            <ListItem disableGutters
                                secondaryAction={
                                    <ListItemText>{vat}Tk</ListItemText>
                                }
                            >
                                <ListItemText>VAT<StyledBadge badgeContent={'5%'} color="primary"></StyledBadge></ListItemText>
                            </ListItem>
                            <ListItem disableGutters
                                secondaryAction={
                                    <ListItemText>{delivery}Tk</ListItemText>
                                }
                            >
                                <ListItemText>Delivery:</ListItemText>
                            </ListItem>
                            <ListItem disableGutters
                                secondaryAction={
                                    <ListItemText>{grandTotal}Tk</ListItemText>
                                }
                            >
                                <ListItemText>Total:</ListItemText>
                            </ListItem>
                        </List>
                        <div className='w-full mt-5'>
                            <Link to='/checkout' className='text-white'><Button sx={{width: '100%', borderRadius: '0px', background: '#ff1e00', padding: '5px 20px', '&:hover': { backgroundColor: '#011B39' } }} variant="contained" >Checkout</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;