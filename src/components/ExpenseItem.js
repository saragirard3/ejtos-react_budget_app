import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle, FaPlusCircle, FaMinusCircle  } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
            cost: props.cost,
        };

        dispatch({
            type: 'DELETE_EXPENSE',
            payload: item,
        });
    };

    const handleAdd = () => {
        const item = {
            name: props.name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: item,
        });
    };

    const handleRemove = () => {
        const item = {
            name: props.name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: item,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><FaPlusCircle type='button' size='2.2em' color='green' onClick={handleAdd}></FaPlusCircle></td>
            <td><FaMinusCircle type='button' size='2.2em' color='blue' onClick={handleRemove}></FaMinusCircle></td>
            <td><FaTimesCircle type='button' size='2.2em' color='red' onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    )
};

export default ExpenseItem;
