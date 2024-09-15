
//import ExpenseItem from './ExpenseItem';

//export default function ExpenseTable(props){

    // const deleteExpense = (expense) => {
    //     const userConfirm = window.confirm("Are you sure?");
    //     if (userConfirm) {
    //         axios.delete(`http://localhost:3033/api/expenses/${expense._id}`)
    //             .then((response) => {
    //                 const result = response.data
                    
    //                 props.handleRemoveExpense(result)
    //             })
    //             .catch((err) => {
    //                 console.log(err)
    //             })
    //     }
    // }

    // export default function ExpenseTable({ expenses, getCategoryName, expenseDispatch }) {
    //     const deleteExpense = (expense) => {
    //         const userConfirm = window.confirm("Are you sure?");
    //         if (userConfirm) {
    //             axios.delete(`http://localhost:3033/api/expenses/${expense._id}`)
    //                 .then((response) => {
    //                     const result = response.data
    //                     expenseDispatch({ type: 'REMOVE_EXPENSE', payload: result })
    //                 })
    //                 .catch((err) => {
    //                     console.log(err)
    //                 })
    //         }
    //     }

//     export default function ExpenseTable({ expenses, categories, expenseDispatch }) {
//         const getCategoryName = (expense) => {
//             const category = categories.find((cat) => {
//                 return cat._id === expense.category
//             });
//             return category ? category.name : 'N/A'
//         }
    
//     return(
//         <div>
//             <h2>Listing Expenses </h2>
//             {expenses.length > 0 ? (
//                 <div>
//                     <table border="1">
//                         <thead>
//                             <tr>
//                                 <th>Date</th>
//                                 <th>Title</th>
//                                 <th>Amount</th>
//                                 <th>Category</th>
//                                 <th>Description</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {/* {props.expenses.map((ele) => {
//                                 return (
//                                     <tr key={ele._id}>
//                                         <td>{new Date(ele.expenseDate).toLocaleDateString()}</td>
//                                         <td>{ele.title}</td>
//                                         <td>{ele.amount}</td>
//                                         <td>{props.getCategoryName(ele)}</td>
//                                         <td>{ele.description}</td>
//                                         <td>
//                                             <button onClick={() => {
//                                                 deleteExpense(ele)
//                                             }}>Remove</button>
//                                         </td>
//                                     </tr>
//                                 )
//                             })} */}
//                             {/* {expenses.map((expense) => (
//                                 <ExpenseItem
//                                     key={expense._id}
//                                     expense={expense}
//                                     getCategoryName={getCategoryName}
//                                     deleteExpense={deleteExpense}
//                                 />
//                             ))} */}
//                             {expenses.map((ele) => (
//                                 <ExpenseItem key={ele._id} expense={ele} getCategoryName={getCategoryName} expenseDispatch={expenseDispatch} />
//                             ))}
//                         </tbody>
//                     </table>
//                     <h3>Total Expenses - {expenses.reduce((acc, cv) => {
//                         return acc + cv.amount
//                     }, 0)}
//                     </h3>
//                 </div>
//             ) : <p>No expenses found. Fetch expense data</p>}

//         </div>
//     )
// }

//---------------------------------------useReducer--------------------------------------
// import React from 'react';
// import ExpenseItem from './ExpenseItem';

// export default function ExpenseTable({ expenses, getCategoryName, expenseDispatch }) {
//     return (
//         <div>
//             <h2> Listing Expenses - {expenses.length} </h2>
//             {expenses.length === 0 ? (
//                 <p>No expenses found.</p>
//             ) : (
//                 <table border="1">
//                     <thead>
//                         <tr>
//                             <th>Date</th>
//                             <th>Title</th>
//                             <th>Category</th>
//                             <th>Amount</th>
//                             <th>Description</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {expenses.map(expense => (
//                             <ExpenseItem 
//                                 key={expense._id} 
//                                 expense={expense} 
//                                 getCategoryName={getCategoryName} 
//                                 expenseDispatch={expenseDispatch} 
//                             />
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// }


//--------------------------------useContext---------------------------------

// import React, { useContext } from 'react';
// import axios from 'axios';
// import ExpenseItem from './ExpenseItem';
// import { ExpenseContext } from './App';

// export default function ExpenseTable({ getCategoryName }) {
//     const { expenses, expenseDispatch } = useContext(ExpenseContext)

//     const handleRemove = (expense) => {
//         const userConfirm = window.confirm('Are you sure you want to delete this expense?')
//         if (userConfirm) {
//             axios.delete(`http://localhost:3033/api/expenses/${expense._id}`)
//                 .then(() => {
//                     expenseDispatch({ type: 'REMOVE_EXPENSE', payload: expense })
//                 })
//                 .catch((err) => {
//                     console.log(err)
//                 })
//         }
//     }
//     const totalAmount = expenses.data.reduce((sum, expense) => sum + expense.amount, 0)

//     return (
//         <div>
//             <h2>Listing Expenses - {expenses.data.length}</h2>
//             {expenses.data.length === 0 ? (
//                 <p>No expenses found.</p>
//             ) : (
//                 <div>
//                     <table border="1">
//                         <thead>
//                             <tr>
//                                 <th>Date</th>
//                                 <th>Title</th>
//                                 <th>Category</th>
//                                 <th>Amount</th>
//                                 <th>Description</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {expenses.data.map((expense) => (
//                                 <ExpenseItem
//                                     key={expense._id}
//                                     expense={expense}
//                                     getCategoryName={getCategoryName}
//                                     handleRemove={handleRemove}
//                                     expenseDispatch={expenseDispatch}
//                                 />
//                             ))}
//                         </tbody>
//                     </table>
//                     <br/>
//                     <div>
//                        <h2> <strong>Total Expenses: {totalAmount}</strong></h2>
//                     </div>
//                 </div>
//             )}
//         </div>
//     )
// ///////////////////////////Using Edit Functionality//////////////
// import React, { useContext } from 'react';
// import axios from 'axios';
// import ExpenseItem from './ExpenseItem';
// import { ExpenseContext } from './App';

// export default function ExpenseTable({ getCategoryName }) {
//     const { expenses, expenseDispatch } = useContext(ExpenseContext)

//     const handleRemove = (expense) => {
//         const userConfirm = window.confirm('Are you sure you want to delete this expense?')
//         if (userConfirm) {
//             axios.delete(`http://localhost:3033/api/expenses/${expense._id}`)
//                 .then(() => {
//                     expenseDispatch({ type: 'REMOVE_EXPENSE', payload: expense })
//                 })
//                 .catch((err) => {
//                     console.log(err)
//                 })
//         }
//     }

//     const totalAmount = expenses.data.reduce((sum, expense) => sum + expense.amount, 0)

//     return (
//         <div>
//             <h2>Listing Expenses - {expenses.data.length}</h2>
//             {expenses.data.length === 0 ? (
//                 <p>No expenses found.</p>
//             ) : (
//                 <div>
//                     <table border="1">
//                         <thead>
//                             <tr>
//                                 <th>Date</th>
//                                 <th>Title</th>
//                                 <th>Amount</th>
//                                 <th>Category</th>
//                                 <th>Description</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {expenses.data.map((expense) => (
//                                 <ExpenseItem
//                                     key={expense._id}
//                                     expense={expense}
//                                     getCategoryName={getCategoryName}
//                                     handleRemove={() => handleRemove(expense)}
//                                     expenseDispatch={expenseDispatch}
//                                 />
//                             ))}
//                         </tbody>
//                     </table>
//                     <br/>
//                     <div>
//                        <h2><strong>Total Expenses: {totalAmount}</strong></h2>
//                     </div>
//                 </div>
//             )}
//         </div>
//     )
// }


//////////////////////USING useMemo////////////////////////////////////
import React, { useContext, useMemo } from 'react';
import axios from 'axios';
import ExpenseItem from './ExpenseItem';
import { ExpenseContext } from './App';

export default function ExpenseTable({ getCategoryName }) {
  const { expenses, expenseDispatch } = useContext(ExpenseContext)

  const handleRemove = (expense) => {
    const userConfirm = window.confirm('Are you sure you want to delete this expense?')
    if (userConfirm) {
      axios.delete(`http://localhost:3033/api/expenses/${expense._id}`)
        .then(() => {
          expenseDispatch({ type: 'REMOVE_EXPENSE', payload: expense })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const totalAmount = useMemo(() => {
    return expenses.data.reduce((sum, expense) => sum + expense.amount, 0)
  }, [expenses.data])

  return (
    <div>
      <h2>Listing Expenses - {expenses.data.length}</h2>
      {expenses.data.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        <div>
          <table border="1">
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.data.map((expense) => (
                <ExpenseItem
                  key={expense._id}
                  expense={expense}
                  getCategoryName={getCategoryName}
                  handleRemove={() => handleRemove(expense)}
                  expenseDispatch={expenseDispatch}
                />
              ))}
            </tbody>
          </table>
          <br/>
          <div>
            <h2><strong>Total Expenses: {totalAmount}</strong></h2>
          </div>
        </div>
      )}
    </div>
  )
}

