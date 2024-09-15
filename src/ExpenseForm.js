// import axios from 'axios';
// import { useState } from 'react';
// export default function ExpenseForm({ categories, expenseDispatch }){
//     const [expenseServerErrors, setExpenseServerErrors] = useState([])
//     const [expenseDate,setExpenseDate]=useState('')
//     const [title,setTitle]=useState('')
//     const [amount,setAmount]=useState('')
//     const [expenseCategory,setExpenseCategory]=useState('')
//     const [expenseDescription,setExpenseDescription]=useState('')
//    const [expenseClientErrors,setExpenseClientErrors] = useState({})
//     const expenseErrors = {}


//     const runExpenseClientValidation =()=>{
//         if(expenseDate.trim().length === 0){
//             expenseErrors.expenseDate = 'Date cannot be empty'
//         } else if (new Date( expenseDate ) > new Date()){
//             expenseErrors.expenseDate = 'Date cannot be greater than today'
//         }
//         if(title.trim().length === 0){
//             expenseErrors.title = ' Title cannot be empty'
//         }
//         if(amount.trim().length === 0){
//             expenseErrors.amount = 'Amount cannot be empty'
//         }
//         if(expenseCategory.trim().length === 0){
//             expenseErrors.expenseCategory = 'Expense category cannot be empty'
//         }
//     }
        
//     const handleExpenseSubmit = (e) => {
//             e.preventDefault()
//             const formData = {
//                 expenseDate:expenseDate,
//                 title:title,
//                 amount:amount,
//                 category:expenseCategory,
//                 description:expenseDescription
//             }
    
//            runExpenseClientValidation()
//            if(Object.keys(expenseErrors).length === 0){
//             axios.post('http://localhost:3033/api/expenses', formData)
//                 .then((response) => {
//                     alert('Expenses added')
//                     const result = response.data
//                     //props.handleAddExpense(result)
//                     expenseDispatch({ type: 'ADD_EXPENSE', payload: result })
//                     setExpenseDate('')
//                     setTitle('')
//                     setAmount('')
//                     setExpenseCategory('')
//                     setExpenseDescription('')
//                     setExpenseServerErrors([])
//                     setExpenseClientErrors({})
//                 })
//                 .catch((err) => {
//                     //console.log(err)
//                     setExpenseServerErrors(err.response.data.errors)
//                 })
//                 }else {
//                  setExpenseClientErrors(expenseErrors)
//                 }
//                 }
//     return(
//         <div>

// <h2>Add Expense</h2>
//             {expenseServerErrors.length > 0 && (
//                 <div>
//                     <h3>Server Error</h3>
//                     <ul>
//                         {expenseServerErrors.map((ele, i) => {
//                             return <li key={i}>{ele.msg}</li>
//                         })}
//                     </ul>
//                 </div>
//             )}
//             <form onSubmit={ handleExpenseSubmit }>
//                 <label>Enter Date</label><br />
//                 <input
//                     type="date"
//                     value={ expenseDate }
//                     onChange={(e) => {
//                         setExpenseDate(e.target.value)
//                     }}
//                 />
//                { expenseClientErrors.expenseDate && <span>{ expenseClientErrors.expenseDate }</span>}
//                 <br />
//                 <label>Enter Title</label><br />
//                 <input
//                     type="text"
//                     value={ title }
//                     onChange={(e) => {
//                         setTitle(e.target.value)
//                     }}
//                 />
//                 { expenseClientErrors.title && <span>{ expenseClientErrors.title }</span>}
//                 <br />
//                 <label>Enter Amount</label><br />
//                 <input
//                     type="number"
//                     value={ amount }
//                     onChange={(e) => {
//                         setAmount(e.target.value)
//                     }}
//                 />
//                 { expenseClientErrors.amount && <span>{ expenseClientErrors.amount }</span>}
//                 <br />
//                 <label>Expense Category</label><br />
//                 <select
//                     value={ expenseCategory }
//                     onChange={(e) => {
//                        setExpenseCategory(e.target.value)
//                     }}
//                 >
//                     <option value="">Select</option>
//                     {categories.map((category) => (
//                         <option key={category._id} value={category._id}>
//                             {category.name}
//                         </option>
//                     ))}
//                 </select>
//                 { expenseClientErrors.expenseCategory && <span>{ expenseClientErrors.expenseCategory }</span>}
//                 <br />
//                 <label>Enter Description</label><br />
                
//                 <textarea
//                     value={ expenseDescription }
//                     onChange={(e) => {
//                         setExpenseDescription(e.target.value)
//                     }}></textarea><br/>
            
//                 <input type="submit" />
//             </form>
//         </div>
//     )
// }

//--------------------------------------------useReducer---------------------
// import React, { useState } from 'react';
// import axios from 'axios';

// export default function ExpenseForm({ categories, expenseDispatch }) {
//     const [expenseDate, setExpenseDate] = useState('')
//     const [title, setTitle] = useState('')
//     const [amount, setAmount] = useState('')
//     const [expenseCategory, setExpenseCategory] = useState('')
//     const [expenseDescription, setExpenseDescription] = useState('')
//     const [expenseServerErrors, setExpenseServerErrors] = useState([])
//     const [expenseClientErrors, setExpenseClientErrors] = useState({})

//     const runExpenseClientValidation = () => {
//         const errors = {}
//         if (!expenseDate.trim()) {
//             errors.expenseDate = 'Date cannot be empty'
//         } else if (new Date(expenseDate) > new Date()) {
//             errors.expenseDate = 'Date cannot be greater than today'
//         }
//         if (!title.trim()) {
//             errors.title = 'Title cannot be empty'
//         }
//         if (!amount.trim()) {
//             errors.amount = 'Amount cannot be empty'
//         }
//         if (!expenseCategory.trim()) {
//             errors.expenseCategory = 'Expense category cannot be empty'
//         }
//         setExpenseClientErrors(errors)
//         return Object.keys(errors).length === 0
//     }

//     const handleExpenseSubmit = (e) => {
//         e.preventDefault()
//         if (!runExpenseClientValidation()) {
//             return;
//         }

//         const formData = {
//             expenseDate,
//             title,
//             amount,
//             category: expenseCategory,
//             description: expenseDescription
//         }

//         axios.post('http://localhost:3033/api/expenses', formData)
//             .then((response) => {
//                 alert('Expense added')
//                 const result = response.data
//                 expenseDispatch({ type: 'ADD_EXPENSE', payload: result })
//                 setExpenseDate('')
//                 setTitle('')
//                 setAmount('')
//                 setExpenseCategory('')
//                 setExpenseDescription('')
//                 setExpenseServerErrors([])
//             })
//             .catch((err) => {
//                 setExpenseServerErrors(err.response.data.errors)
//             })
//     }

//     return (
//         <div>
//             <h2>Add Expense</h2>
//             {expenseServerErrors.length > 0 && (
//                 <div>
//                     <h3>Server Error</h3>
//                     <ul>
//                         {expenseServerErrors.map((ele, i) => {
//                             return <li key={i}>{ele.msg}</li>
//                         })}
//                     </ul>
//                 </div>
//             )}
//             <form onSubmit={handleExpenseSubmit}>
//                 <label>Enter Date</label><br />
//                 <input
//                     type="date"
//                     value={expenseDate}
//                     onChange={(e) => {
//                         setExpenseDate(e.target.value)
//                     }}
//                 />
//                 {expenseClientErrors.expenseDate && <span>{expenseClientErrors.expenseDate}</span>}
//                 <br />
//                 <label>Enter Title</label><br />
//                 <input
//                     type="text"
//                     value={title}
//                     onChange={(e) => {
//                         setTitle(e.target.value)
//                     }}
//                 />
//                 {expenseClientErrors.title && <span>{expenseClientErrors.title}</span>}
//                 <br />
//                 <label>Enter Amount</label><br />
//                 <input
//                     type="number"
//                     value={amount}
//                     onChange={(e) => {
//                         setAmount(e.target.value)
//                     }}
//                 />
//                 {expenseClientErrors.amount && <span>{expenseClientErrors.amount}</span>}
//                 <br />
//                 <label>Expense Category</label><br />
//                 <select
//                     value={expenseCategory}
//                     onChange={(e) => {
//                         setExpenseCategory(e.target.value)
//                     }}
//                 >
//                     <option value="">Select</option>
//                     {categories.map((category) => (
//                         <option key={category._id} value={category._id}>
//                             {category.name}
//                         </option>
//                     ))}
//                 </select>
//                 {expenseClientErrors.expenseCategory && <span>{expenseClientErrors.expenseCategory}</span>}
//                 <br />
//                 <label>Enter Description</label><br />
//                 <textarea
//                     value={expenseDescription}
//                     onChange={(e) => {
//                         setExpenseDescription(e.target.value)
//                     }}
//                 ></textarea>
//                 <br />
//                 <input type="submit" />
//             </form>
//         </div>
//     )
// }


//-------------------------------------------useContext--------------------------

// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { CategoryContext, ExpenseContext } from './App';

// export default function ExpenseForm() {
//     const [expenseDate, setExpenseDate] = useState('')
//     const [title, setTitle] = useState('')
//     const [amount, setAmount] = useState('')
//     const [expenseCategory, setExpenseCategory] = useState('');
//     const [expenseDescription, setExpenseDescription] = useState('')
//     const [expenseServerErrors, setExpenseServerErrors] = useState([])
//     const [expenseClientErrors, setExpenseClientErrors] = useState({})

//     const { categories } = useContext(CategoryContext)
//     const { expenseDispatch } = useContext(ExpenseContext)

//     const runExpenseClientValidation = () => {
//         const errors = {}
//         if (!expenseDate.trim()) {
//             errors.expenseDate = 'Date cannot be empty'
//         } else if (new Date(expenseDate) > new Date()) {
//             errors.expenseDate = 'Date cannot be greater than today'
//         }
//         if (!title.trim()) {
//             errors.title = 'Title cannot be empty'
//         }
//         if (!amount.trim()) {
//             errors.amount = 'Amount cannot be empty'
//         }
//         if (!expenseCategory.trim()) {
//             errors.expenseCategory = 'Expense category cannot be empty'
//         }
//         setExpenseClientErrors(errors)
//         return Object.keys(errors).length === 0
//     }

//     const handleExpenseSubmit = (e) => {
//         e.preventDefault();
//         if (!runExpenseClientValidation()) {
//             return
//         }

//         const formData = {
//             expenseDate,
//             title,
//             amount,
//             category: expenseCategory,
//             description: expenseDescription
//         }

//         axios.post('http://localhost:3033/api/expenses', formData)
//             .then((response) => {
//                 alert('Expense added')
//                 const result = response.data
//                 expenseDispatch({ type: 'ADD_EXPENSE', payload: result })
//                 setExpenseDate('')
//                 setTitle('')
//                 setAmount('')
//                 setExpenseCategory('')
//                 setExpenseDescription('')
//                 setExpenseServerErrors([])
//             })
//             .catch((err) => {
//                 setExpenseServerErrors(err.response.data.errors)
//             })
//     }

//     return (
//         <div>
//             <h2>Add Expense</h2>
//             {expenseServerErrors.length > 0 && (
//                 <div>
//                     <h3>Server Error</h3>
//                     <ul>
//                         {expenseServerErrors.map((ele, i) => {
//                             return <li key={i}>{ele.msg}</li>
//                         })}
//                     </ul>
//                 </div>
//             )}
//             <form onSubmit={handleExpenseSubmit}>
//                 <label>Enter Date</label><br />
//                 <input
//                     type="date"
//                     value={expenseDate}
//                     onChange={(e) => {
//                         setExpenseDate(e.target.value)
//                     }}
//                 />
//                 {expenseClientErrors.expenseDate && <span>{expenseClientErrors.expenseDate}</span>}
//                 <br />
//                 <label>Enter Title</label><br />
//                 <input
//                     type="text"
//                     value={title}
//                     onChange={(e) => {
//                         setTitle(e.target.value)
//                     }}
//                 />
//                 {expenseClientErrors.title && <span>{expenseClientErrors.title}</span>}
//                 <br />
//                 <label>Enter Amount</label><br />
//                 <input
//                     type="number"
//                     value={amount}
//                     onChange={(e) => {
//                         setAmount(e.target.value)
//                     }}
//                 />
//                 {expenseClientErrors.amount && <span>{expenseClientErrors.amount}</span>}
//                 <br />
//                 <label>Select Category</label><br />
//                 <select
//                     value={expenseCategory}
//                     onChange={(e) => {
//                         setExpenseCategory(e.target.value)
//                     }}
//                 >
//                     <option value="">Select Category</option>
//                     {categories.map((category) => (
//                         <option key={category._id} value={category._id}>
//                             {category.name}
//                         </option>
//                     ))}
//                 </select>
//                 {expenseClientErrors.expenseCategory && <span>{expenseClientErrors.expenseCategory}</span>}
//                 <br />
//                 <label>Enter Description (optional)</label><br />
//                 <textarea
//                     value={expenseDescription}
//                     onChange={(e) => {
//                         setExpenseDescription(e.target.value)
//                     }}
//                 />
//                 <br />
//                 <input type="submit" value="Add Expense" />
//             </form>
//         </div>
//     )
// }

//////////////////////Using Edit Functionality///////////////////
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { CategoryContext, ExpenseContext } from './App';

export default function ExpenseForm({ editId }) {
    const [expenseDate, setExpenseDate] = useState('')
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [expenseCategory, setExpenseCategory] = useState('')
    const [expenseDescription, setExpenseDescription] = useState('')
    const [expenseServerErrors, setExpenseServerErrors] = useState([])
    const [expenseClientErrors, setExpenseClientErrors] = useState({})

    const { categories } = useContext(CategoryContext)
    const { expenses, expenseDispatch } = useContext(ExpenseContext)

    useEffect(() => {
        if (editId) {
            const expenseToEdit = expenses.data.find(expense => expense._id === editId)
            if (expenseToEdit) {
                setExpenseDate(new Date(expenseToEdit.expenseDate).toISOString().split('T')[0])
                setTitle(expenseToEdit.title)
                setAmount(expenseToEdit.amount.toString())
                setExpenseCategory(expenseToEdit.category)
                setExpenseDescription(expenseToEdit.description)
            }
        } else {
            setExpenseDate('')
            setTitle('')
            setAmount('')
            setExpenseCategory('')
            setExpenseDescription('')
        }
    }, [editId, expenses.data])

    const runExpenseClientValidation = () => {
        const errors = {}
        if (!expenseDate.trim()) {
            errors.expenseDate = 'Date cannot be empty'
        } else if (new Date(expenseDate) > new Date()) {
            errors.expenseDate = 'Date cannot be greater than today'
        }
        if (!title.trim()) {
            errors.title = 'Title cannot be empty'
        }
        if (!amount.toString().trim()) {
            errors.amount = 'Amount cannot be empty'
        }
        if (!expenseCategory.trim()) {
            errors.expenseCategory = 'Expense category cannot be empty'
        }
        setExpenseClientErrors(errors);
        return Object.keys(errors).length === 0
    }

    const handleExpenseSubmit = (e) => {
        e.preventDefault();
        if (!runExpenseClientValidation()) {
            return
        }

        const formData = {
            expenseDate,
            title,
            amount: Number(amount),
            category: expenseCategory,
            description: expenseDescription,
        }

        if (editId) {
            axios.put(`http://localhost:3033/api/expenses/${editId}`, formData)
                .then((response) => {
                    alert('Expense updated')
                    expenseDispatch({ type: 'UPDATE_EXPENSE', payload: response.data })
                    expenseDispatch({ type: 'SET_EDIT_ID', payload: null })
                    setExpenseServerErrors([])
                })
                .catch((err) => {
                    setExpenseServerErrors(err.response.data.errors)
                })
        } else {
            axios.post('http://localhost:3033/api/expenses', formData)
                .then((response) => {
                    alert('Expense added')
                    expenseDispatch({ type: 'ADD_EXPENSE', payload: response.data })
                    setExpenseServerErrors([])
                })
                .catch((err) => {
                    setExpenseServerErrors(err.response.data.errors)
                })
        }

        setExpenseDate('')
        setTitle('')
        setAmount('')
        setExpenseCategory('')
        setExpenseDescription('')
    }

    return (
        <div>
            <h2>{editId ? 'Edit Expense' : 'Add Expense'}</h2>
            {expenseServerErrors.length > 0 && (
                <div>
                    <h3>Server Error</h3>
                    <ul>
                        {expenseServerErrors.map((ele, i) => {
                            return <li key={i}>{ele.msg}</li>
                        })}
                    </ul>
                </div>
            )}
            <form onSubmit={handleExpenseSubmit}>
                <label>Enter Date</label><br />
                <input
                    type="date"
                    value={expenseDate}
                    onChange={(e) => {
                        setExpenseDate(e.target.value)
                    }}
                />
                {expenseClientErrors.expenseDate && <span>{expenseClientErrors.expenseDate}</span>}
                <br />
                <label>Enter Title</label><br />
                <input
                    type="text"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
                {expenseClientErrors.title && <span>{expenseClientErrors.title}</span>}
                <br />
                <label>Enter Amount</label><br />
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => {
                        setAmount(e.target.value)
                    }}
                />
                {expenseClientErrors.amount && <span>{expenseClientErrors.amount}</span>}
                <br />
                <label>Select Category</label><br />
                <select
                    value={expenseCategory}
                    onChange={(e) => {
                        setExpenseCategory(e.target.value)
                    }}
                >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                        <option key={category._id} value={category._id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                {expenseClientErrors.expenseCategory && <span>{expenseClientErrors.expenseCategory}</span>}
                <br />
                <label>Enter Description (optional)</label><br />
                <textarea
                    value={expenseDescription}
                    onChange={(e) => {
                        setExpenseDescription(e.target.value)
                    }}
                />
                <br />
                <input type="submit" value={editId ? 'Update Expense' : 'Add Expense'} />
            </form>
        </div>
    )
}
