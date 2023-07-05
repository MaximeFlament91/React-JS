import React, {useState} from 'react'

function Counter() {

    // On décloare un state Counter et nous devons déclarer en meme temps une fonction pour mettre a jour ce state 
    // (setCounter) & lui attribuer une valeur initiale.
const [counter, setCounter] = useState(0);
const [title, setTitle] = useState("Counter 🚀");


    return(
        <div>
            <h1>{title}</h1>
            <p>Counter : {counter}</p>
            <button>onClick={setCounter(counter)}</button> 
        </div>
    )
}

export default Counter;