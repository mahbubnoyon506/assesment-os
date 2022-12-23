import { Button, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import paymentImage from '../../assets/images/payment2.png'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';




const Checkout = () => {

    const navigate = useNavigate();
    // const [user] = useAuthState(auth);
    const user = ''

    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        (async () => {
            await axios.get(`http://localhost:5000/api/cart`)
                .then(res => {
                    setCartItems(res.data.data)
                })
        })()
    }, [])

    const carts = cartItems.filter((item) => item.email === user?.email)

    let total = 0;
    let delivery = 0;
    let vat = 1;
    let grandTotal = 0
    carts.forEach(item => {
        total = total + (item.price * item.quantity);
        delivery = delivery + (200 * item.quantity);
        vat = +(total * 0.05).toFixed(2);
        grandTotal = total + delivery + vat
    });

    const handleInput = (e) => {
        e.preventDefault();

        const inputValue = {
            firstName: user?.displayName,
            lastName: e.target.lastname.value,
            email: user?.email,
            country: e.target.country.value,
            address: e.target.address.value,
            town: e.target.town.value,
            zip: e.target.zip.value,
            phone: e.target.phone.value,
            comment: e.target.comment.value,
            totalCost: grandTotal,
            paymentMethod: e.target.value,
        }
    }


    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -12,
            top: -10,
            border: `2px solid ${theme.primary}`,
            padding: '0 4px',
        },
    }));

    return (
        <div className='lg:p-20 md:p-10 p-5'>
            <h2 className='text-3xl font-bold mb-10 p-0 text-left'>Shopping Cart</h2>
            <form onSubmit={handleInput} action="">
                <div className='lg:grid grid-cols-3 gap-5'>
                    <div className='col-span-2'>
                        <div className='lg:flex mb-5'>
                            <input className='p-3 bg-slate-100 mr-5 w-full' type="text" name="firstname" id="" placeholder={user?.displayName} required />
                            <input className='p-3 bg-slate-100 w-full' type="text" name="lastname" id="" placeholder='Last Name' />
                        </div>
                        <input className='p-3 bg-slate-100 w-full mb-5' type="email" name="email" id="" placeholder={user.email} required />
                        <input className='p-3 bg-slate-100 w-full mb-5' type="text" name="country" id="" placeholder='*Country' required />
                        <input className='p-3 bg-slate-100 w-full mb-5' type="text" name="address" id="" placeholder='*Address' required />
                        <input className='p-3 bg-slate-100 w-full mb-5' type="text" name="town" id="" placeholder='*Town' required />
                        <div className='lg:flex mb-5'>
                            <input className='p-3 bg-slate-100 mr-5 w-full' type="text" name="zip" id="" placeholder='Zip Code' />
                            <input className='p-3 bg-slate-100 w-full' type="text" name="phone" id="" placeholder='*Phone Number' required />
                        </div>
                        <textarea className='p-3 bg-slate-100 w-full mb-5' type="text" name="comment" id="" placeholder='Leave a comment about your order.' />
                        <div className='flex '>
                            <input type="checkbox" name="differentAddress" id="" />
                            <p className='text-sm'>Ship to different adderess</p>
                        </div>
                        <div className='flex '>
                            <input type="checkbox" name="account" id="" />
                            <p className='text-sm'>Create a new account</p>
                        </div>

                    </div>
                    <div className='bg-[#E4E8EB] lg:p-10 p-5'>
                        <h3 className='text-lg font-bold text-left p-0'>Cart Total</h3>
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
                            <div className='flex '>
                                <input type="radio" name="cashOn" id="" />
                                <p className='text-sm'>Cash on delivery</p>
                            </div>
                            <div className='flex '>
                                <input type="radio" name="card" id="" checked/>
                                <div className=''>
                                    <div className='w-full inline'><img src={paymentImage} alt="" /></div>
                                </div>
                            </div>
                            <div className='flex justify-center mt-5'>
                            <Button sx={{width: '100%', borderRadius: '0px', background: '#ff1e00', padding: '5px 20px', '&:hover': { backgroundColor: '#011B39' } }} variant="contained" ><input className='w-full' type="submit" value="MAKE PAYMENT" /></Button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;