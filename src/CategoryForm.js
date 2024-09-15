// import axios from 'axios';
// import { useState } from 'react';
// export default function CategoryForm(props){
//     const [categoriesName, setCategoriesName] = useState('')
//     const [categoryServerErrors, setCategoryServerErrors] = useState([])
//     const [categoryClientErrors,setCategoryClientErrors] = useState({})
//     const categoryErrors = {}

//     const runCategoryClientValidation =()=>{
//         if(categoriesName.trim().length === 0){
//             categoryErrors.name = 'name cannot be empty'
//         }
//     }
//     const handleCategorySubmit = (e) => {
//         e.preventDefault()
//         const formData = {
//             name: categoriesName
//         }
//         runCategoryClientValidation()
//         if(Object.keys(categoryErrors).length === 0){
//         axios.post('http://localhost:3033/api/categories', formData)
//             .then((response) => {
//                 alert('Category added')
//                 const result = response.data
//                 props.handleAddCategory(result)
//                 //console.log(result)
                
//                 setCategoriesName('')
//                 setCategoryServerErrors([])
//                 setCategoryClientErrors({})
//             })
//             .catch((err) => {
//                 console.log(err);
//                 setCategoryServerErrors(err.response.data.errors)
//             })
    
//     } else {
//         setCategoryClientErrors(categoryErrors)
//     }
// }
// return (
//         <div>
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
//                 />
//                 {categoryClientErrors.name && <span>{categoryClientErrors.name}</span>}
//                 <br />
//                 <input type="submit" />
//             </form>
           
//         </div>
//     )
// }


//------------------------using useContext-------------------
// import axios from 'axios';
// import { useState, useContext } from 'react';
// import CategoryContext from './CategoryContext';

// export default function CategoryForm() {
//   const { handleAddCategory } = useContext(CategoryContext);
//   const [categoriesName, setCategoriesName] = useState('');
//   const [categoryServerErrors, setCategoryServerErrors] = useState([]);
//   const [categoryClientErrors, setCategoryClientErrors] = useState({});
//   const categoryErrors = {};

//   const runCategoryClientValidation = () => {
//     if (categoriesName.trim().length === 0) {
//       categoryErrors.name = 'name cannot be empty';
//     }
//   };

//   const handleCategorySubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       name: categoriesName,
//     };
//     runCategoryClientValidation();
//     if (Object.keys(categoryErrors).length === 0) {
//       axios.post('http://localhost:3033/api/categories', formData)
//         .then((response) => {
//           alert('Category added');
//           handleAddCategory(response.data);
//           setCategoriesName('');
//           setCategoryServerErrors([]);
//           setCategoryClientErrors({});
//         })
//         .catch((err) => {
//           setCategoryServerErrors(err.response.data.errors);
//         });
//     } else {
//       setCategoryClientErrors(categoryErrors);
//     }
//   };

//   return (
//     <div>
//       <h2>Add Category</h2>
//       {categoryServerErrors.length > 0 && (
//         <div>
//           <h3>Server Error</h3>
//           <ul>
//             {categoryServerErrors.map((ele, i) => (
//               <li key={i}>{ele.msg}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <form onSubmit={handleCategorySubmit}>
//         <label>Enter Name</label><br />
//         <input
//           type="text"
//           value={categoriesName}
//           onChange={(e) => setCategoriesName(e.target.value)}
//         />
//         {categoryClientErrors.name && <span>{categoryClientErrors.name}</span>}
//         <br />
//         <input type="submit" value="Save" />
//       </form>
//     </div>
//   );
// }

//////////////////// USING CONTEXT ///////////////////////////////////////////////////////////////

// import axios from 'axios';
// import { useState, useContext } from 'react';
// import { CategoryContext } from './App';

// export default function CategoryForm() {
//     const [categoriesName, setCategoriesName] = useState('')
//     const [categoryServerErrors, setCategoryServerErrors] = useState([])
//     const [categoryClientErrors, setCategoryClientErrors] = useState({})
//     const categoryErrors = {}

//     const { setCategories } = useContext(CategoryContext)

//     const runCategoryClientValidation = () => {
//         if (categoriesName.trim().length === 0) {
//             categoryErrors.name = 'name cannot be empty'
//         }
//     }

//     const handleCategorySubmit = (e) => {
//         e.preventDefault()
//         const formData = {
//             name: categoriesName
//         }
//         runCategoryClientValidation()
//         if (Object.keys(categoryErrors).length === 0) {
//             axios.post('http://localhost:3033/api/categories', formData)
//                 .then((response) => {
//                     alert('Category added')
//                     const result = response.data
//                     setCategories(prevCategories => [...prevCategories, result])
//                     setCategoriesName('')
//                     setCategoryServerErrors([])
//                     setCategoryClientErrors({})
//                 })
//                 .catch((err) => {
//                     console.log(err)
//                     setCategoryServerErrors(err.response.data.errors)
//                 })

//         } else {
//             setCategoryClientErrors(categoryErrors)
//         }
//     }

//     return (
//         <div>
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
//                 />
//                 {categoryClientErrors.name && <span>{categoryClientErrors.name}</span>}
//                 <br />
//                 <input type="submit" />
//             </form>
//         </div>
//     )
// }


///////////////////////////// USING EDIT FUNCTIONALITY //////////////////////////////

import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { CategoryContext } from './App';

export default function CategoryForm() {
    const [categoriesName, setCategoriesName] = useState('')
    const [categoryServerErrors, setCategoryServerErrors] = useState([])
    const [categoryClientErrors, setCategoryClientErrors] = useState({})
    const categoryErrors = {}

    const { categories, setCategories, editCategoryId, setEditCategoryId } = useContext(CategoryContext)

    useEffect(() => {
        if (editCategoryId) {
            const categoryToEdit = categories.find(cat => cat._id === editCategoryId)
            if (categoryToEdit) {
                setCategoriesName(categoryToEdit.name)
            }
        } else {
            setCategoriesName('')
        }
    }, [editCategoryId, categories])

    const runCategoryClientValidation = () => {
        if (categoriesName.trim().length === 0) {
            categoryErrors.name = 'Name cannot be empty'
        }
    }

    const handleCategorySubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: categoriesName
        }

        runCategoryClientValidation()
        if (Object.keys(categoryErrors).length === 0) {
            if (editCategoryId) {
                axios.put(`http://localhost:3033/api/categories/${editCategoryId}`, formData)
                    .then((response) => {
                        alert('Category updated')
                        const result = response.data
                        setCategories(prevCategories => prevCategories.map(cat => cat._id === result._id ? result : cat))
                        setEditCategoryId(null)
                        setCategoriesName('')
                        setCategoryServerErrors([])
                        setCategoryClientErrors({})
                    })
                    .catch((err) => {
                        console.log(err)
                        setCategoryServerErrors(err.response.data.errors)
                    })
            } else {
                axios.post('http://localhost:3033/api/categories', formData)
                    .then((response) => {
                        alert('Category added')
                        const result = response.data
                        setCategories(prevCategories => [...prevCategories, result])
                        setCategoriesName('')
                        setCategoryServerErrors([])
                        setCategoryClientErrors({})
                    })
                    .catch((err) => {
                        console.log(err);
                        setCategoryServerErrors(err.response.data.errors)
                    })
            }
        } else {
            setCategoryClientErrors(categoryErrors)
        }
    }

    return (
        <div>
            <h2>{editCategoryId ? 'Edit Category' : 'Add Category'}</h2>
            {categoryServerErrors.length > 0 && (
                <div>
                    <h3>Server Error</h3>
                    <ul>
                        {categoryServerErrors.map((ele, i) => {
                            return <li key={i}>{ele.msg}</li>
                        })}
                    </ul>
                </div>
            )}
            <form onSubmit={handleCategorySubmit}>
                <label>Enter Name</label><br />
                <input
                    type="text"
                    value={categoriesName}
                    onChange={(e) => {
                        setCategoriesName(e.target.value)
                    }}
                />
                {categoryClientErrors.name && <span>{categoryClientErrors.name}</span>}
                <br />
                <input type="submit" value={editCategoryId ? 'Update Category' : 'Add Category'} />
            </form>
        </div>
    )
}
