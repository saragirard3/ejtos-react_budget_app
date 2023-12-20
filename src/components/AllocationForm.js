import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const AllocationForm = () => {
    const { dispatch, currency } = useContext(AppContext);

    const [department, setDepartment] = useState('');
    const [allocation, setAllocation] = useState('');
    const [amount, setAmount] = useState('');

    const submitEvent = () => {

        const item = {
            name: department,
            cost: parseInt(amount),
        };
        console.log(item);    
        console.log(allocation);

        if(allocation === "Add") {
            console.log("in the add");
            dispatch({
                type: 'ADD_EXPENSE',
                payload: item,
            });
        } else {
                dispatch({
                    type: 'RED_EXPENSE',
                    payload: item,
                });
            }
    };


    return (
        <div>
            <div className='row'>
    
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Departments</label>
                </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setDepartment(event.target.value)}>
                    <option defaultValue>Choose one...</option>
                        <option value="Marketing" name="Marketing">Marketing</option>
                        <option value="Finance" name="Finance">Finance</option>
                        <option value="Sales" name="Sales">Sales</option>
                        <option value="Human Resource" name="Human Resource">Human Resources</option>
                        <option value="IT" name="IT">IT</option>
                  </select>
    
                <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                    <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                </div>
                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAllocation(event.target.value)}>
                    <option defaultValue>Choose one...</option>
                    <option value="Add" name="Add">Add</option>
                    <option value="Reduce" name="Reduce">Reduce</option>
                  </select>  
                  <span className="eco" style={{ marginLeft: '2rem', marginRight: '8px'}}>{currency} </span>
                    
                    <input
                        required='required'
                        type='number'
                        id='amount'
                        value={amount}
                        style={{size: 10}}
                        onChange={(event) => setAmount(event.target.value)}>
                        </input>
    
                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
            </div>
    
        </div>
    );
};

export default AllocationForm;