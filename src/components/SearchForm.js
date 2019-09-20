import React, { useState, useEffect } from "react";


// We create a mock list/array named Characters, from which display the list in our component.

 
export default function SearchForm({status}) {
  const[characters, setCharacters] = useState([]);
  
  // searchTerm will save the data from the search input on every occurance of the change event.
  const [searchTerm, setSearchTerm] = useState("");
  // searchResults is used to set the search result.
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setCharacters([...characters, status])
  }, [status]);
  useEffect(() => {
    const results = characters.filter(character =>
      character.includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  // The handleChange method takes the event object as the arguement and sets the current value of the form to the searchTerm state using setSearchTerm
  const handleChange = event => {
    // console.log(event.target.value)
    setSearchTerm(event.target.value);
  };
  return (
    <div className="Search">
      <form>
        
        <label for="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <div className="character-list">
        <ul>
          {searchResults.map(character => (
            <li>{character}</li>
          ))}
        </ul>
      </div>
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