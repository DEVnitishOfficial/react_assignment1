import React, { useState } from 'react';
import './assignment.css'
import 'animate.css'

/*
Q1.  Create a component named "Person" that takes two props - "name" and "age". The component should  display the persons name and age in a paragraph element
*/
function Person(props){

    return(
        <>      
      <p className="person-name">

       {props.name} is {props.age} years old

      </p>
      </>
    )
}
export default Person

/*
 Q2. Create a component named "Button" that takes two props - "text" and "onClick". The component should display a button element with the given text and call the onClick function when clicked
*/

 export function Button({text,onClick}){
    const [output, setOutput] = useState('Button yet not clicked');

    const handleClick = () => {
      const result = onClick();
      setOutput(result);
    };
    return(
        <>
      <button className='btn' onClick={handleClick}> {text} </button>

      <p className='click-btn'>{output}</p>

        </>
    )
}

/*
 Q3. Create a component named "Header" that takes one prop - "title". The component should display a header element with the given title.
 */

 export function Header(props){
    return(
       <h1 className='centre'>  {props.title}   </h1>
    )
 }

 /**
  * Q4.  Create a component named "List" that takes one prop - "items". The component should display an unordered list element with the given list items.
  * 
  */

 export function List({items}){
  return(
    <>
     <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    </> 
  )
 }


