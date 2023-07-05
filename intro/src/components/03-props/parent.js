import React, {useState} from "react";
import Enfant from './enfant'

function Parent() {
    const [prenom, setPrenom]=useState("Fran");
    const [age, setAge]=useState(30);
    const [ville, setVille]=useState("Paris");

    return(
        <div className="App">

    
    <h1><Enfant pseudo={prenom}
        age={age}
        ville={ville}/></h1>
    </div>

    )
}
export default Parent;