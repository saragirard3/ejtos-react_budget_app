import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, Currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);
    const remaining = 5;

    return (
        <div className='alert alert-secondary'>
            <span>Remaining: {Currency}{remaining}</span>
        </div>
    );
};

export default Budget;
