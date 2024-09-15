// import React from 'react';
// import AttendanceCalendar from './AttendanceCalender';
// function App(){
//     const categories = [{_id: 1, name: 'Food'},{ _id: 2, name: 'Rent'}]

//     const expenses =[
//         // {_id:1,expDate:"2024-05-10",amount:100,category:"Food",title:"treat"},
//         // {_id:2,expDate:"2024-05-02",amount:6500,category:"Rent",title:"pg rent for may"},
//         // {_id:3,expDate:"2024-05-05",amount:500,category:"Food",title:"canteen charges"}

//         {_id:1,expDate:"2024-05-10",amount:100,category:1,title:"treat"},
//         {_id:2,expDate:"2024-05-02",amount:6500,category:2,title:"pg rent for may"},
//         {_id:3,expDate:"2024-05-05",amount:500,category:1,title:"canteen charges"}
//     ]

//     const users = [
//         { username: "alice123", email: "alice@example.com", gender: "female" },
//         { username: "bob456", email: "bob@example.com", gender: "male" },
//         { username: "carol789", email: "carol@example.com", gender: "female" },
//         { username: "david101", email: "david@example.com", gender: "male" },
//         { username: "eve202", email: "eve@example.com", gender: "female" }
//       ];

//       const article = {
//         title: "The Future of JavaScript",
//         body: "JavaScript continues to evolve as a powerful language for web development, embracing new frameworks, features, and enhancements that promise to further transform the digital landscape...",
//         author: "Jane Doe",
//         publishDate: "2024-05-11",
//         comments: [
//             {
//                 commenter: "John Smith",
//                 comment: "Great insights on the upcoming ECMAScript features!",
//                 date: "2024-05-12"
//             },
//             {
//                 commenter: "Alice Johnson",
//                 comment: "I'm looking forward to using async iterators in my projects.",
//                 date: "2024-05-13"
//             },
//             {
//                 commenter: "Bob Lee",
//                 comment: "Do you think JavaScript will remain the dominant language for the web?",
//                 date: "2024-05-14"
//             }
//         ]
//     };

//     const team = {
//         name: "The Eagles",
//         players: [
//             { name: "John Doe", position: "Forward", isCaptain: false },
//             { name: "Jane Smith", position: "Goalkeeper", isCaptain: true }, // This player is the captain
//             { name: "Alice Johnson", position: "Defender", isCaptain: false },
//             { name: "Bob Lee", position: "Midfielder", isCaptain: false },
//             { name: "Carol White", position: "Defender", isCaptain: false }
//         ]
//     };

//     const numbers = [10,11,12,13]

//     const employee = {
//         name: "Michael Thompson",
//         attendance: [
//             { date: "2024-05-01", isPresent: true },
//             { date: "2024-05-02", isPresent: true },
//             { date: "2024-05-03", isPresent: false },
//             { date: "2024-05-04", isPresent: true },
//             { date: "2024-05-05", isPresent: true },
//             { date: "2024-05-08", isPresent: true },
//             { date: "2024-05-09", isPresent: false },
//             { date: "2024-05-10", isPresent: true },
//             { date: "2024-05-11", isPresent: true },
//             { date: "2024-05-12", isPresent: false }
//         ]
//     };

//     return ( // from a component you return UI
//       <div>
//         <h1>Expense App</h1>
//         <h1>Listing Categories - {categories.length}</h1>
//         <ul>
//             {
//             categories.map((ele)=>{
//                 return <li key ={ele._id}> {ele.name}</li> 
//             })
//             }
//         </ul>
//         <hr/>
//         <h2>Listing Expenses - {expenses.length}</h2>
//         <table border="1">
//             <thead>
//                 <tr>
//                     <th>Date</th>
//                     <th>Amount</th>
//                     <th>Title</th>
//                     <th>Category</th>
//                 </tr>
//             </thead>
//             <tbody>
//             {expenses.map((ele)=>{
//                         const category = categories.find(cat => cat._id === ele.category)
//                         const categoryName = category ? category.name : 'Unknown'
//                         return (
//                             <tr key={ele._id}>
//                                 <td>{ele.expDate}</td>
//                                 <td>{ele.amount}</td>
//                                 <td>{ele.title}</td>
//                                 <td>{categoryName}</td>
//                             </tr>
//                         )
//                     })}
//             </tbody>
//         </table>
//         <h2>Total -
//             {
//                 expenses.reduce((acc,cv)=>{
//                     return acc + cv.amount
//                 },0)
//             }
//         </h2>
//         <hr/>
//         <h2>Listing Users - {users.length}</h2>
//         <table>
//             <thead>
//                 <tr>
//                     <th>username</th>
//                     <th>email</th>
//                     <th>gender</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     users.filter(ele => ele.gender === 'female').map((ele,i) =>{
//                         return (
//                             <tr key={i}>
//                                 <td>{ele.username}</td>
//                                 <td>{ele.email}</td>
//                                 <td>{ele.gender}</td>
//                             </tr>
//                         )
//                     })
//                 }
//             </tbody>
//         </table>
//         <hr/>
//         <h2>{article.title}</h2>
//         <p>{article.body}</p>
//         <b>{ article.author } posted on { article.publishDate }</b>
//         <h3>comments - ( { article.comments.length } )</h3>
//         <ul>
//             {
//                 article.comments.map((ele,i) => {
//                     return <li key={i}> { ele.comment } by { ele.commenter } on { ele.date } </li>
//                 })
//             }
//         </ul>
//         <hr/>
//         <h2>{ team.name }</h2>
//         <table border="1">
//             <thead>
//                 <tr>
//                     <th>name</th>
//                     <th>position</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     team.players.map((ele,i) => {
//                         return (
//                             <tr key={i}>
//                             <td> { ele.name } { ele.isCaptain && <span> (captain)</span> } </td>
//                             <td> { ele.position } </td>
//                             </tr>
//                         )
//                     })
//                 }
//             </tbody>
//         </table>
//         <hr/>
//          <ul>
//             {
//                 numbers.map((n,i) => {
//                     return <li key={i}> { n } { n % 2 === 0 ? 'even' : 'odd' }</li>
//                 })
//             }
//          </ul>
//          <hr/>
//          <h2>{ employee.name} </h2>
//          <table border ="1">
//             <thead>
//                 <tr>
//                     <th>Date</th>
//                     <th>Status</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     employee.attendance.map((ele,i) =>{
//                         return (
//                             <tr key={i}>
//                                 <td> {ele.date} </td>
//                                 <td> {ele.isPresent ? 'Present' : 'Absent'} </td>
//                             </tr>
//                         )
//                     })
//                 }
//             </tbody>
//         </table>
//         <h2> Total Days : { employee.attendance.length } </h2>
//         <h2>Present Days: { employee.attendance.filter(ele => ele.isPresent).length } </h2>
//         <h2>Absent Days: { employee.attendance.length - employee.attendance.filter(ele => ele.isPresent).length } </h2>
//         < AttendanceCalendar attendance = { employee.attendance } />
//       </div>
//     )
//   }
//   export default App //module.exports = App

//  //<li>{categories[0].name}</li>
//             //<li>{categories[1].name}</li>
//             //<li>{JSON.stringify(categories[0])}</li> 

//---------------------------------------------------------------------------------------------->
// import axios from 'axios';
// import { useState } from 'react';
// export default function App(){
// const [categories,setCategories] = useState([])
// const [expenses,setExpenses] = useState([])
// const [categoriesName,setCategoriesName] = useState('')
// const [ categoryServerErrors,setCategoryServerErrors] = useState([])
// const handleClick = ()=>{
//     axios.get('http://localhost:3033/api/categories')
//     .then((response)=>{
// const result = response.data
// setCategories(result) 
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }
// const handleExpense =()=>{
//     axios.get('http://localhost:3033/api/expenses')
//     .then((response)=>{
//         const result = response.data
//         setExpenses(result)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }
//    const handleCategoryRemove = (category)=>{
//     const userConfirm = window.confirm("Are you sure?")
//     if(userConfirm){
//         axios.delete(`http://localhost:3033/api/categories/${category._id}`)
//         .then((response) => {
//             const result = response.data
//             const newArr = categories.filter((ele) => {
//                 return ele._id !== result._id
//             })
//             setCategories(newArr)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
//     }
//    }
//    const handleExpenseRemove = (expense)=>{
//     const userConfirm = window.confirm("are you sure?")
//     if(userConfirm){
//         axios.delete(`http://localhost:3033/api/expenses/${expense._id}`)
//         .then((response) => {
//             const result = response.data
//             const newArr = expenses.filter((ele) => {
//                 return ele._id !== result._id
//             })
//             setExpenses(newArr)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
//     }
//    }
// const getCategoryName = (expense) => {
// const category = categories.find((cat) => {
//     return cat._id === expense.category
// })
// if(category){
//     return category.name
// }
// else{
//     return 'N/A'
// }
// }

// const handleSubmit = (e) => {
//     e.preventDefault()
//     const formData ={
//         name:categoriesName
//     }
//     axios.post('http://localhost:3033/api/categories',formData)
//     .then((response)=>{
//         alert('category is added')
//         const result = response.data
//         const newArr = [...categories,result]
//         setCategories(newArr)
//         setCategoriesName('')
//         setCategoryServerErrors([])
//     })
//     .catch((err)=>{
//         console.log(err)
//         setCategoryServerErrors(err.response.data.errors)
//     })
// }
// return (
//     <div>
//         <h1>Expense App</h1>
//         <button onClick ={ handleClick }>Fetch Categories</button>
//         <h2>Listing Categories - {categories.length}</h2>
//         {/* <ul>
//             {categories.map((ele)=>{
//                 return <li key={ele._id}>{ele.name}<button onClick = { () => {
//                     handleCategoryRemove(ele)
//                 }}> remove </button></li>
//             })}
//         </ul> */}
//         {categories.length>0 &&(
//             <div>
//                 <table border="1">
//                 <thead>
//                     <tr>
//                         <th>Category Name</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {categories.map((category) => (
//                         <tr key={category._id}>
//                             <td>{category.name}</td>
//                             <td>
//                                 <button onClick={() => handleCategoryRemove(category)}>
//                                     Remove
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             </div>
//         )}
//         <h2>Add category</h2>
//         {categoryServerErrors.length >0 && (
//             <div>
//                 <h3>Server Error</h3>
//                 <ul>
//                     {categoryServerErrors.map((ele,i) => {
//                         return <li key={i}>{ ele.msg }</li>
//                     })}
//                 </ul>
//             </div>
//         )}
//         <form onSubmit ={ handleSubmit }>
//             <label> Enter Name</label><br/>
//             <input 
//             type="text"
//             value ={categoriesName}
//             onChange = {(e)=>{
//                 setCategoriesName(e.target.value)
//             }}
//             /><br/>
//             <input type="submit"/>
//         </form>
//         <hr/>

//         <button onClick = {handleExpense}>Fetch Expense</button>
//         <h2> Listing Expenses - {expenses.length}</h2>
//         { expenses.length > 0 ? (
//             <div>
//             <table border="1">
//             <thead>
//                 <tr>
//                     <th>Date</th>
//                     <th>Title</th>
//                     <th>Amount</th>
//                     <th>Category</th>
//                     <th>Description</th>
//                     <th>Actions</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {expenses.map((ele)=>{
//                     return(
//                         <tr key={ele._id}>
//                             <td>{new Date(ele.expenseDate).toLocaleDateString()}</td>
//                             <td>{ele.title}</td>
//                             <td>{ele.amount}</td>
//                             <td>{getCategoryName(ele)}</td>
//                             <td>{ele.description}</td>
//                             <td>
//                                 <button onClick = { () => {
//                                     handleExpenseRemove(ele)
//                                     }}> remove </button></td>
//                             </tr>
//                                 )
//                                 })}
//             </tbody>
//              </table>
//              <h3>Total Expenses - { expenses.reduce((acc, cv) => {
//                         return acc + cv.amount
//                     }, 0)} 
//             </h3>
//             </div> 
//             ) : <p> No expenses found. Fetch expense data</p> }
//             </div>
//             )
//             }

//------------------------------------------------------------------------------------------------->

// import axios from 'axios';
// import { useState } from 'react';
// export default function App() {
//     const [categories, setCategories] = useState([])
//     const [expenses, setExpenses] = useState([])
//     const [categoriesName, setCategoriesName] = useState('')
//     const [categoryServerErrors, setCategoryServerErrors] = useState([])
//     const [expenseServerErrors, setExpenseServerErrors] = useState([])
//     const [newExpense, setNewExpense] = useState({
//         expenseDate: '',
//         title: '',
//         amount: '',
//         category: '',
//         description: ''
//     })

//     const handleClick = () => {
//         axios.get('http://localhost:3033/api/categories')
//             .then((response) => {
//                 const result = response.data
//                 setCategories(result)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }

//     const handleExpense = () => {
//         axios.get('http://localhost:3033/api/expenses')
//             .then((response) => {
//                 const result = response.data
//                 setExpenses(result)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }

//     const handleCategoryRemove = (category) => {
//         const userConfirm = window.confirm("Are you sure?");
//         if (userConfirm) {
//             axios.delete(`http://localhost:3033/api/categories/${category._id}`)
//                 .then((response) => {
//                     const result = response.data
//                     const newArr = categories.filter((ele) => {
//                         return ele._id !== result._id
//                     })
//                     setCategories(newArr)
//                 })
//                 .catch((err) => {
//                     console.log(err)
//                 })
//         }
//     }

//     const handleExpenseRemove = (expense) => {
//         const userConfirm = window.confirm("Are you sure?");
//         if (userConfirm) {
//             axios.delete(`http://localhost:3033/api/expenses/${expense._id}`)
//                 .then((response) => {
//                     const result = response.data
//                     const newArr = expenses.filter((ele) => {
//                         return ele._id !== result._id
//                     })
//                     setExpenses(newArr)
//                 })
//                 .catch((err) => {
//                     console.log(err)
//                 })
//         }
//     }

//     const getCategoryName = (expense) => {
//         const category = categories.find((cat) => {
//             return cat._id === expense.category
//         })
//         if (category) {
//             return category.name
//         } else {
//             return 'N/A'
//         }
//     }

//     const handleCategorySubmit = (e) => {
//         e.preventDefault()
//         const formData = {
//             name: categoriesName
//         }
//         axios.post('http://localhost:3033/api/categories', formData)
//             .then((response) => {
//                 alert('Category added')
//                 const result = response.data
//                 const newArr = [...categories, result]
//                 setCategories(newArr)
//                 setCategoriesName('')
//                 setCategoryServerErrors([])
//             })
//             .catch((err) => {
//                 console.log(err);
//                 setCategoryServerErrors(err.response.data.errors)
//             })
//     }

//     const handleExpenseSubmit = (e) => {
//         e.preventDefault()
//         axios.post('http://localhost:3033/api/expenses', newExpense)
//             .then((response) => {
//                 alert('Expense added')
//                 const result = response.data
//                 const newArr = [...expenses, result]
//                 setExpenses(newArr)
//                 setNewExpense({
//                     expenseDate: '',
//                     title: '',
//                     amount: '',
//                     category: '',
//                     description: ''
//                 })
//                 setExpenseServerErrors([])
//             })
//             .catch((err) => {
//                 //console.log(err)
//                 setExpenseServerErrors(err.response.data.errors)
//             })
//     }

//     return (
//         <div>
//             <h1>Expense App</h1>
//             <button onClick={handleClick}>Fetch Categories</button>
//             <h2>Listing Categories - {categories.length}</h2>
//             {categories.length > 0 && (
//                 <div>
//                     <table border="1">
//                         <thead>
//                             <tr>
//                                 <th>Category Name</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {categories.map((category) => (
//                                 <tr key={category._id}>
//                                     <td>{category.name}</td>
//                                     <td>
//                                         <button onClick={() => handleCategoryRemove(category)}>
//                                             Remove
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//             <h2>Add Category</h2>
//             {categoryServerErrors.length > 0 && (
//                 <div>
//                     <h3>Server Error</h3>
//                     <ul>
//                         {categoryServerErrors.map((ele, i) => {
//                             return <li key={i}>{ele.msg}</li>
//                         })}
//                     </ul>
//                 </div>
//             )}
//             <form onSubmit={handleCategorySubmit}>
//                 <label>Enter Name</label><br />
//                 <input
//                     type="text"
//                     value={categoriesName}
//                     onChange={(e) => {
//                         setCategoriesName(e.target.value)
//                     }}
//                 /><br />
//                 <input type="submit" />
//             </form>
//             <hr />

//             <button onClick={handleExpense}>Fetch Expenses</button>
//             <h2>Listing Expenses - {expenses.length}</h2>
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
//                             {expenses.map((ele) => {
//                                 return (
//                                     <tr key={ele._id}>
//                                         <td>{new Date(ele.expenseDate).toLocaleDateString()}</td>
//                                         <td>{ele.title}</td>
//                                         <td>{ele.amount}</td>
//                                         <td>{getCategoryName(ele)}</td>
//                                         <td>{ele.description}</td>
//                                         <td>
//                                             <button onClick={() => {
//                                                 handleExpenseRemove(ele)
//                                             }}>Remove</button>
//                                         </td>
//                                     </tr>
//                                 )
//                             })}
//                         </tbody>
//                     </table>
//                     <h3>Total Expenses - {expenses.reduce((acc, cv) => {
//                         return acc + cv.amount;
//                     }, 0)}
//                     </h3>
//                 </div>
//             ) : <p>No expenses found. Fetch expense data</p>}

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
//                     value={newExpense.expenseDate}
//                     onChange={(e) => {
//                         setNewExpense({ ...newExpense, expenseDate: e.target.value })
//                     }}
//                 /><br />
//                 <label>Enter Title</label><br />
//                 <input
//                     type="text"
//                     value={newExpense.title}
//                     onChange={(e) => {
//                         setNewExpense({ ...newExpense, title: e.target.value })
//                     }}
//                 /><br />
//                 <label>Enter Amount</label><br />
//                 <input
//                     type="number"
//                     value={newExpense.amount}
//                     onChange={(e) => {
//                         setNewExpense({ ...newExpense, amount: e.target.value })
//                     }}
//                 /><br />
//                 <label>Select Category</label><br />
//                 <select
//                     value={newExpense.category}
//                     onChange={(e) => {
//                         setNewExpense({ ...newExpense, category: e.target.value })
//                     }}
//                 >
//                     <option value="">Select</option>
//                     {categories.map((category) => (
//                         <option key={category._id} value={category._id}>
//                             {category.name}
//                         </option>
//                     ))}
//                 </select><br />
//                 <label>Enter Description</label><br />
//                 <textarea
//                     value={newExpense.description}
//                     onChange={(e) => {
//                         setNewExpense({ ...newExpense, description: e.target.value })
//                     }}></textarea><br/>
            
//                 <input type="submit" />
//             </form>
//         </div>
//     )
// }


//-------------------------------------------------------------------->
// import axios from 'axios';
// import { useState } from 'react';
// import CategoriesList from './CategoriesList';
// import ExpenseTable from './ExpenseTable';
// import CategoryForm from './CategoryForm';
// import ExpenseForm from './ExpenseForm';

// export default function App() {
//     const [categories, setCategories] = useState([])
//     const [expenses, setExpenses] = useState([])
    

    
//     const handleClick = () => {
//         axios.get('http://localhost:3033/api/categories')
//             .then((response) => {
//                 const result = response.data
//                 setCategories(result)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }

//     const handleExpense = () => {
//         axios.get('http://localhost:3033/api/expenses')
//             .then((response) => {
//                 const result = response.data
//                 setExpenses(result)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }

//     const handleRemoveCategory = (category)=>{
//         const newArr = categories.filter((ele)=>{
//             return ele._id !== category._id
//         })
//         setCategories(newArr)
//     }
//     const handleRemoveExpense = (expense)=>{
//     const newArr = expenses.filter((ele) => {
//         return ele._id !== expense._id
//     })
//     setExpenses(newArr)
//     }
//     const getCategoryName = (expense) => {
//         const category = categories.find((cat) => {
//             return cat._id === expense.category
//         })
//         if (category) {
//             return category.name
//         } else {
//             return 'N/A'
//         }
//     }
     
//    const handleAddCategory =(ele)=>{
//     const newArr = [...categories, ele]
//         setCategories(newArr)
//    }
   
//    const handleAddExpense =(ele)=>{
//     const newArr = [...expenses, ele]
//     setExpenses(newArr)
//    }


//     return (
//         <div>
//             <h1>Expense App</h1>
//             <button onClick={handleClick}>Fetch Categories</button>

//             < CategoriesList categories = { categories } handleRemoveCategory = { handleRemoveCategory }/>
//             < CategoryForm  handleAddCategory = { handleAddCategory }/>

//             <hr/>

//             <button onClick={handleExpense}>Fetch Expenses</button>
            
//             < ExpenseTable expenses = { expenses} getCategoryName = { getCategoryName } handleRemoveExpense = { handleRemoveExpense }/>
//             <ExpenseForm categories = { categories }  handleAddExpense = { handleAddExpense }/>
            
//         </div>
//     )
// }


///-------------------------------------------------------------------------------------------
//--------- Using useState and useEffect() useReducer() hook

// import axios from 'axios';
// import { useState, useEffect, useReducer } from 'react';
// import CategoriesList from './CategoriesList';
// import ExpenseTable from './ExpenseTable';
// import CategoryForm from './CategoryForm';
// import ExpenseForm from './ExpenseForm';

// const expenseReducer = (state, action) => {
//     if (action.type === 'SET_EXPENSES') {
//         return { ...state, data: action.payload }
//     } else if (action.type === 'ADD_EXPENSE') {
//         return { ...state, data: [...state.data, action.payload] }
//     } else if (action.type === 'REMOVE_EXPENSE') {
//         return { ...state, data: state.data.filter(expense => expense._id !== action.payload._id) }
//     } else {
//         return { ...state }
//     }
// }

// export default function App() {
//     const [categories, setCategories] = useState([])
//     const [expenses, expenseDispatch] = useReducer(expenseReducer, { data: [] })

//     // Fetch categories on component mount
//     useEffect(() => {
//         axios.get('http://localhost:3033/api/categories')
//             .then((response) => {
//                 const result = response.data
//                 setCategories(result)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }, [])

//     const fetchExpenses = () => {
//         axios.get('http://localhost:3033/api/expenses')
//             .then((response) => {
//                 console.log('Expenses fetched:', response.data)
//                 expenseDispatch({ type: 'SET_EXPENSES', payload: response.data })
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }

//     const handleRemoveCategory = (category) => {
//         const newArr = categories.filter((ele) => {
//             return ele._id !== category._id
//         })
//         setCategories(newArr)
//     }

//     const getCategoryName = (expense) => {
//         const category = categories.find((cat) => {
//             return cat._id === expense.category
//         })
//         if (category) {
//             return category.name
//         } else {
//             return 'N/A'
//         }
//     }

//     const handleAddCategory = (ele) => {
//         const newArr = [...categories, ele]
//         setCategories(newArr)
//     }

//     return (
//         <div>
//             <h1>Expense App</h1>
//             <CategoriesList categories={categories} handleRemoveCategory={handleRemoveCategory} />
//             <CategoryForm handleAddCategory={handleAddCategory} />

//             <hr />
//             <button onClick={fetchExpenses}>Fetch Expenses</button>
//             <ExpenseTable expenses={expenses.data} getCategoryName={getCategoryName} expenseDispatch={expenseDispatch} />
//             <ExpenseForm categories={categories} expenseDispatch={expenseDispatch} />
//         </div>
//     )
// }

//--------------------------- USING useContext---------------------------
// import { useState, useEffect,useReducer, createContext } from 'react';
// import axios from 'axios';
// import CategoryForm from './CategoryForm';
// import CategoriesList from './CategoriesList';
// import ExpenseForm from './ExpenseForm';
// import ExpenseTable from './ExpenseTable';

// // Create contexts
// export const CategoryContext = createContext()
// export const ExpenseContext = createContext()

// // Reducer function
// const expenseReducer = (state, action) => {
//     if (action.type === 'SET_EXPENSES') {
//         return { ...state, data: action.payload }
//     } else if (action.type === 'ADD_EXPENSE') {
//         return { ...state, data: [...state.data, action.payload] }
//     } else if (action.type === 'SET_EDIT_ID') {
//         return { ...state, editId: action.payload };
//     } else if (action.type === 'REMOVE_EXPENSE') {
//         return { ...state, data: state.data.filter(expense => expense._id !== action.payload._id) }
//     } else {
//         return { ...state }
//     }
// }

// export default function App() {
//     const [categories, setCategories] = useState([])
//     const [expenses, expenseDispatch] = useReducer(expenseReducer, { data: [], editId: null })

//     // Fetch categories and expenses from API
//     useEffect(() => {
//         axios.get('http://localhost:3033/api/categories')
//             .then((response) => {
//                 setCategories(response.data)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//         },[])

//         useEffect(() => {
//         axios.get('http://localhost:3033/api/expenses')
//             .then((response) => {
//                 expenseDispatch({ type: 'SET_EXPENSES', payload: response.data })
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }, [])

//     const getCategoryName = (expense) => {
//         const category = categories.find(cat => cat._id === expense.category)
//         return category ? category.name : 'Unknown'
//     }

//     return (
//         <CategoryContext.Provider value={{ categories, setCategories }}>
//             <ExpenseContext.Provider value={{ expenses, expenseDispatch }}>
//                 <div>
//                     <CategoryForm />
//                     <CategoriesList />
//                     <ExpenseForm editId={expenses.editId}/>
//                     <ExpenseTable getCategoryName={getCategoryName} />
//                 </div>
//             </ExpenseContext.Provider>
//         </CategoryContext.Provider>
//     )
// }

/////////////////////////Using Edit Functionality//////////////////////
// import React, { useState, useEffect, useReducer, createContext } from 'react';
// import axios from 'axios';
// import CategoryForm from './CategoryForm';
// import CategoriesList from './CategoriesList';
// import ExpenseForm from './ExpenseForm';
// import ExpenseTable from './ExpenseTable';

// // Create contexts
// export const CategoryContext = createContext()
// export const ExpenseContext = createContext()

// // Reducer function
// const expenseReducer = (state, action) => {
//     if (action.type === 'SET_EXPENSES') {
//         return { ...state, data: action.payload }
//     } else if (action.type === 'ADD_EXPENSE') {
//         return { ...state, data: [...state.data, action.payload] }
//     } else if (action.type === 'SET_EDIT_ID') {
//         return { ...state, editId: action.payload }
//     } else if (action.type === 'REMOVE_EXPENSE') {
//         return { ...state, data: state.data.filter(expense => expense._id !== action.payload._id) }
//     } else if (action.type === 'UPDATE_EXPENSE') {
//         const updatedData = state.data.map(expense => {
//             if (expense._id === action.payload._id) {
//                 return action.payload // Update the edited expense
//             }
//             return expense
//         })
//         return { ...state, data: updatedData }
//     } else {
//         return { ...state }
//     }
// }

// export default function App() {
//     const [categories, setCategories] = useState([])
//     const [expenses, expenseDispatch] = useReducer(expenseReducer, { data: [], editId: null })

//     // Fetch categories and expenses from API
//     useEffect(() => {
//         axios.get('http://localhost:3033/api/categories')
//             .then((response) => {
//                 setCategories(response.data)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }, [])

//     useEffect(() => {
//         axios.get('http://localhost:3033/api/expenses')
//             .then((response) => {
//                 expenseDispatch({ type: 'SET_EXPENSES', payload: response.data })
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }, [])

//     const getCategoryName = (expense) => {
//         const category = categories.find(cat => cat._id === expense.category)
//         return category ? category.name : 'Unknown'
//     }

//     return (
//         <CategoryContext.Provider value={{ categories, setCategories }}>
//             <ExpenseContext.Provider value={{ expenses, expenseDispatch }}>
//                 <div>
//                     <CategoryForm />
//                     <CategoriesList />
//                     <hr/>
//                     <ExpenseForm editId={expenses.editId}/>
//                     <ExpenseTable getCategoryName={getCategoryName} />
//                 </div>
//             </ExpenseContext.Provider>
//         </CategoryContext.Provider>
//     )
// }
/////////////////////// For Both categories and Expenses///////////////////////////
import React, { useState, useEffect, useReducer, createContext } from 'react';
import axios from 'axios';
import CategoryForm from './CategoryForm';
import CategoriesList from './CategoriesList';
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';

// Create contexts
export const CategoryContext = createContext()
export const ExpenseContext = createContext()

// Reducer function
const expenseReducer = (state, action) => {
    if (action.type === 'SET_EXPENSES') {
        return { ...state, data: action.payload }
    } else if (action.type === 'ADD_EXPENSE') {
        return { ...state, data: [...state.data, action.payload] }
    } else if (action.type === 'SET_EDIT_ID') {
        return { ...state, editId: action.payload }
    } else if (action.type === 'REMOVE_EXPENSE') {
        return { ...state, data: state.data.filter(expense => expense._id !== action.payload._id) }
    } else if (action.type === 'UPDATE_EXPENSE') {
        const updatedData = state.data.map(expense => {
            if (expense._id === action.payload._id) {
                return action.payload  // Update the edited expense
            }
            return expense
        })
        return { ...state, data: updatedData }
    } else {
        return { ...state }
    }
}

export default function App() {
    const [categories, setCategories] = useState([])
    const [editCategoryId, setEditCategoryId] = useState(null)
    const [expenses, expenseDispatch] = useReducer(expenseReducer, { data: [], editId: null })

    // Fetch categories and expenses from API
    useEffect(() => {
        axios.get('http://localhost:3033/api/categories')
            .then((response) => {
                setCategories(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:3033/api/expenses')
            .then((response) => {
                expenseDispatch({ type: 'SET_EXPENSES', payload: response.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const getCategoryName = (expense) => {
        const category = categories.find(cat => cat._id === expense.category)
        return category ? category.name : 'Unknown'
    }

    return (
        <CategoryContext.Provider value={{ categories, setCategories, editCategoryId, setEditCategoryId }}>
            <ExpenseContext.Provider value={{ expenses, expenseDispatch }}>
                <div>
                    <CategoryForm />
                    <CategoriesList />
                    <hr />
                    <ExpenseForm editId={expenses.editId} />
                    <ExpenseTable getCategoryName={getCategoryName} />
                </div>
            </ExpenseContext.Provider>
        </CategoryContext.Provider>
    )
}


//------------------- React Assigment forms------------------------
//Employee Container
// import React from 'react';
// import EmployeeContainer from './React-Assignment-Forms/EmployeeContainer';

// const employees = [
//   { id: 1, name: 'emp1', email: 'emp1@gmail.com' },
//   { id: 2, name: 'emp2', email: 'emp2@gmail.com' },
//   { id: 3, name: 'emp3', email: 'emp3@gmail.com' },
//   { id: 4, name: 'emp4', email: 'emp4@gmail.com' },
// ]

// export default function App(){
//   return (
//     <div className="App">
//       <EmployeeContainer employees={employees} />
//     </div>
//   )
// }


// Show Progress

// import React from 'react';
// import TasksContainer from './React-Assignment-Forms/TaskContainer';

// const tasks = [
//   { id: 1, title: 'get the website live', completed: false },
//   { id: 2, title: 'work on user validation', completed: false },
//   { id: 3, title: 'Automate the deployment process', completed: false }
// ]

// export default function App(){
//   return (
//     <div className="App">
//       <TasksContainer tasks={tasks} />
//     </div>
//   )
// }



