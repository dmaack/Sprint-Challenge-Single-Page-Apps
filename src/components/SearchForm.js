import React, { useState } from "react";



// We create a mock list/array named Characters, from which display the list in our component.

 
export default function SearchForm(props) {


  const handleChange = event => {
   props.callback(event.target.value);
  };
  return (
    <div className="Search">
      <form>
        
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
         
          onChange={handleChange}
        />
      </form>
     
    </div>
  );
}
// import { withFormik, Form, Field } from 'formik';
// import axios from "axios";


// export default function SearchForm({values, status}) {
//   const [searchCharacter, setSearchCharacter] = useState({});
  
//   function handleChange(e){
//     setSearchCharacter({...searchCharacter, [e.target.name]: e.target.value})
//   }

//   function handleSubmit(e){
//     e.preventDefault();
//     const 
//   }
//   return (
//     <section className="search-form">
//  <Form>
//         <label for="name">Search:</label>
//         <Field
//           id="name"
//           type="text"
//           name="textfield"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={handleChange}
     
//         />
//       </Form>
//       <ul>
//           {searchResults.map(character => (
//             <li>{character}</li>
//           ))}
//         </ul>
//     </section>
//   );
// }
//  const FormikSearchForm = withFormik({
//   mapPropsToValues({  }) {

      
    
//   },
//  })(SearchForm);