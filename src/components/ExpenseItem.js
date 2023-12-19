import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle, FaPlusCircle, FaMinusCircle  } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Currency } = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_EXPENSE',
            payload: item,
        });
    };

    const handleAddTen = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: item,
        });
    };

    const handleRemoveTen = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: item,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{Currency}{props.cost}</td>
            <td><FaPlusCircle size='2.2em' color='green' onclick={handleAddTen}></FaPlusCircle></td>
            <td><FaMinusCircle size='2.2em' color='blue' onclick={handleRemoveTen}></FaMinusCircle></td>
            <td><FaTimesCircle size='2.2em' color='red' onclick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    )
};

export default ExpenseItem;
