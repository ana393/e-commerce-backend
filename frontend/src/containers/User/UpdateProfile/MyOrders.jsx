import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getMyOrders } from '../../../redux/actions/orderActions';

const MyOrders = () => {
    const user = useSelector(state => state.user.user);
    const userID = user.isUser?._id;
    const MyOrders = useSelector(state => state.myorders.myorders)
    console.log(MyOrders)
    useEffect(() => {
        getMyOrders(userID);
    }, [userID])

    return (
        <div>
            <h3>My orders</h3>
        </div >
    )
}

export default MyOrders;
