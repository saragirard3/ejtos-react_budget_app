import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, Currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);
    const remaining = 5;

    return (
        <div className='alert alert-primary'>
            <span>Remaining: {Currency}{remaining}</span>
        </div>
    );
};

export default Remaining;