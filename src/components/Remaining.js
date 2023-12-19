import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget, Currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.cost));
    }, 0);
    const remaining = budget - totalExpenses;

    return (
        <div className='alert alert-primary'>
            <span>Remaining: {Currency}{remaining}</span>
        </div>
    );
};

export default Remaining;