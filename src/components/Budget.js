import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, Currency } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Currency} 
                <input type="number"></input>
            </span>
        </div>
    );
};

export default Budget;
