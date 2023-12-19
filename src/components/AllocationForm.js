import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';


const AllocationForm = () => {
    const { dispatch } = useContext(AppContext);

    const [department, setDepartment] = useState('');
    const [allocation, setAllocation] = useState('');
    const [cost, setCost] = useState('');

    const submitEvent = () => {

        const item = {
            department: department,
            cost: parseInt(cost),
        };
    
        if(allocation === "Reduce") {
            dispatch({
                type: 'RED_QUANTITY',
                payload: item,
            });
        } else {
                dispatch({
                    type: 'ADD_QUANTITY',
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
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="Marketing"> Marketing</option>
                        <option value="Finance" name="Finance">Finance</option>
                        <option value="Sales" name="Sales">Sales</option>
                        <option value="Human Resources" name="Human Resources">Human Resources</option>
                        <option value="IT" name="IT">IT</option>
                  </select>
    
                <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                    <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                </div>
                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAllocation(event.target.value)}>
                    <option defaultValue value="Add" name="Add">Add</option>
                    <option value="Reduce" name="Reduce">Reduce</option>
                  </select>  
                  <span className="eco" style={{ marginLeft: '2rem', marginRight: '8px'}}></span>
    
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={{size: 10}}
                        onChange={(event) => setCost(event.target.value)}>
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