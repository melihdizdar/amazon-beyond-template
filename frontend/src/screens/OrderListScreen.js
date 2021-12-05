import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, listOrders } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ORDER_DELETE_RESET } from '../constants/orderConstants';
import "../screens/Styles/OrderList/orderlist.css";

export default function OrderListScreen(props) {
    const sellerMode = props.match.path.indexOf('/seller') >= 0; //Implement Seller View
    const orderList = useSelector((state) => state.orderList); //list orders
    const { loading,error,orders } = orderList; //list orders
    const orderDelete = useSelector((state) => state.orderDelete); //delete order
    const { loading:loadingDelete , error: errorDelete , success:successDelete,} = orderDelete; //delete order
    const userSignin = useSelector((state) => state.userSignin); //Implement Seller View
    const { userInfo } = userSignin; //Implement Seller View
    const dispatch = useDispatch(); //list orders
    useEffect(() => { //list orders
        dispatch({type: ORDER_DELETE_RESET}); //4delete order
        dispatch(listOrders({ seller: sellerMode ? userInfo._id : '' })); //4Implement Seller View
    }, [dispatch, sellerMode, successDelete, userInfo._id]); //Implement Seller View
        //dispatch(listOrders()); //list orders
    //}, [dispatch, successDelete]);
    //}, [dispatch]); //list orders
    const deleteHandler = (order) => { //list orders
        if(window.confirm('Are you sure to delete?')){ //delete order
            dispatch(deleteOrder(order._id)); //delete order
        }
    };
    return (
        <div className="orderlist">
            <div className="headerStage">
                <h1>Order List</h1>
            </div>
            <div className="tablediv">
            {loadingDelete && <LoadingBox/>}
            {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>} 
            {loading ? (<LoadingBox/>) : error ? (<MessageBox variant="danger">{error}</MessageBox>) : 
            (
                <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>USER</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th>PAID</th>
                    <th>DELIVERED</th>
                    <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                    <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.user.name}</td>
                        <td>{order.createdAt.substring(0, 10)}</td>
                        <td>${order.totalPrice.toFixed(2)}</td>
                        <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                        <td>
                        {order.isDelivered? order.deliveredAt.substring(0, 10) : 'No'}
                        </td>
                        <td>
                            <button type="button" className="small" onClick={() => { 
                            props.history.push(`/order/${order._id}`);}}>
                            Details
                            </button>
                            <button type="button" className="small" onClick={() => deleteHandler(order)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            )}
            </div>
        </div>
    )
}
