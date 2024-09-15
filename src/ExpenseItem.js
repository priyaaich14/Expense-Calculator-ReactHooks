
//------------------------useReducer------------------------------------------
// import React from 'react';
// import axios from 'axios';

// export default function ExpenseItem({ expense, getCategoryName, expenseDispatch }) {
//     const handleRemove = () => {
//         const userConfirm = window.confirm('Are you sure you want to delete this expense?')
//         if(userConfirm){
//         axios.delete(`http://localhost:3033/api/expenses/${expense._id}`)
//             .then(() => {
//                 expenseDispatch({ type: 'REMOVE_EXPENSE', payload: expense })
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//         }
//     }

//     return (
//         <tr>
//             <td>{new Date(expense.expenseDate).toLocaleDateString()}</td>
//             <td>{expense.title}</td>
//             <td>{getCategoryName(expense)}</td>
//             <td>{expense.amount}</td>
//             <td>{expense.description}</td>
//             <td><button onClick={ handleRemove }>Remove</button></td>
//         </tr>
//     )
// }


//----------------useContext------------------------------------------------------------

// import React from 'react';

// export default function ExpenseItem({ expense, getCategoryName, handleRemove , expenseDispatch}) {
//     const handleEdit = () => {
//         expenseDispatch({ type: 'SET_EDIT_ID', payload: expense._id })
//     }
//     return (
//         <tr>
//             <td>{new Date(expense.expenseDate).toLocaleDateString()}</td>
//             <td>{expense.title}</td>
//             <td>{getCategoryName(expense)}</td>
//             <td>{expense.amount}</td>
//             <td>{expense.description}</td>
//             <td>
//                 <button onClick={handleEdit}>Edit</button>
//                 <button onClick={() => handleRemove(expense)}>Remove</button>
//             </td>
//         </tr>
//     )
// }

//////////////////////Using Edit Functionalty///////////////////
import React, { useContext } from 'react';  // Ensure to import useContext from React

import { ExpenseContext } from './App';

export default function ExpenseItem({ expense, getCategoryName, handleRemove }) {
    const { expenseDispatch } = useContext(ExpenseContext)

    const handleEdit = () => {
        expenseDispatch({ type: 'SET_EDIT_ID', payload: expense._id })
    }
    const formatDate = (dateString) => {
        const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' }
        return new Date(dateString).toLocaleDateString('en-US', options)
    }

    return (
        <tr>
            {/* <td>{new Date(expense.expenseDate).toLocaleDateString()}</td> */}
            <td>{formatDate(expense.expenseDate)}</td>
            <td>{expense.title}</td>
            <td>{expense.amount}</td>
            <td>{getCategoryName(expense)}</td>
            <td>{expense.description}</td>
            <td>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleRemove}>Delete</button>
            </td>
        </tr>
    )
}
