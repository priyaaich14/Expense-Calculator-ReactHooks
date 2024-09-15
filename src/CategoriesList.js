// import axios from 'axios';
// export default function CategoriesList(props){
//     // const { categories } = props
//     const deleteCategory = (category) => {
//         const userConfirm = window.confirm("Are you sure?");
//         if (userConfirm) {
//             axios.delete(`http://localhost:3033/api/categories/${category._id}`)
//                 .then((response) => {
//                     const result = response.data
//                     props.handleRemoveCategory(result)
//                 })
//                 .catch((err) => {
//                     console.log(err)
//                 })
//         }
//     }


//     return(
//         <div>
//              <h2>Listing Categories - {props.categories.length}</h2>
//             {props.categories.length > 0 && (
//                 <div>
//                     <table border="1">
//                         <thead>
//                             <tr>
//                                 <th>Category Name</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {props.categories.map((category) => (
//                                 <tr key={category._id}>
//                                     <td>{category.name}</td>
//                                     <td>
//                                         <button onClick={() => deleteCategory(category)}>
//                                             Remove
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     )
// }

//-----------------using useContext-------------------
// import axios from 'axios';
// import { useContext } from 'react';
// import CategoryContext from './CategoryContext';

// export default function CategoriesList() {
//   const { categories, handleRemoveCategory } = useContext(CategoryContext);

//   const deleteCategory = (category) => {
//     const userConfirm = window.confirm("Are you sure?");
//     if (userConfirm) {
//       axios.delete(`http://localhost:3033/api/categories/${category._id}`)
//         .then((response) => {
//           handleRemoveCategory(response.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   };

//   return (
//     <div>
//       <h2>Listing Categories - {categories.length}</h2>
//       {categories.length > 0 && (
//         <div>
//           <table border="1">
//             <thead>
//               <tr>
//                 <th>Category Name</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {categories.map((category) => (
//                 <tr key={category._id}>
//                   <td>{category.name}</td>
//                   <td>
//                     <button onClick={() => deleteCategory(category)}>
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

//////////////////////////// USING CONTEXT ////////////////////////////////////////////////////////////
// import axios from 'axios';
// import { useContext } from 'react';
// import { CategoryContext } from './App';

// export default function CategoriesList() {
//     const { categories, setCategories } = useContext(CategoryContext)

//     const deleteCategory = (category) => {
//         const userConfirm = window.confirm("Are you sure?")
//         if (userConfirm) {
//             axios.delete(`http://localhost:3033/api/categories/${category._id}`)
//                 .then((response) => {
//                     const result = response.data
//                     setCategories(prevCategories => prevCategories.filter(cat => cat._id !== result._id))
//                 })
//                 .catch((err) => {
//                     console.log(err)
//                 })
//         }
//     }

//     return (
//         <div>
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
//                                         <button onClick={() => deleteCategory(category)}>
//                                             Remove
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     )
// }


///////////////////////////// USING EDIT FUNCTIONALITY //////////////////////////////////////

import axios from 'axios';
import { useContext } from 'react';
import { CategoryContext } from './App';

export default function CategoriesList() {
    const { categories, setCategories, setEditCategoryId } = useContext(CategoryContext)

    const deleteCategory = (category) => {
        const userConfirm = window.confirm("Are you sure?");
        if (userConfirm) {
            axios.delete(`http://localhost:3033/api/categories/${category._id}`)
                .then((response) => {
                    const result = response.data
                    setCategories(prevCategories => prevCategories.filter(cat => cat._id !== result._id))
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    const editCategory = (category) => {
        setEditCategoryId(category._id)
    }

    return (
        <div>
            <h2>Listing Categories - {categories.length}</h2>
            {categories.length > 0 && (
                <div>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Category Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => (
                                <tr key={category._id}>
                                    <td>{category.name}</td>
                                    <td>
                                        <button onClick={() => editCategory(category)}>Edit</button>
                                        <button onClick={() => deleteCategory(category)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}
