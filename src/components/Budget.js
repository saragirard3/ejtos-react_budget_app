import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, currency } = useContext(AppContext);

    const changeBudget = (val)=>{
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
}

    return (
        <div className='alert alert-secondary'>
            <span>Budget:{currency} 
                <input type="number" value={budget} onChange={event=>changeBudget(event.target.value)} />
            </span>
        </div>
    );
};

export default Budget;
