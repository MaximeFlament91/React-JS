import React from "react";

/**
   
@Destructuration
De cette manière, vous sécurisez votre propriété qui ne sera pas modifiable 
(comme on déstructure dans une const),
et c'est important que ce soit le cas!
permet directement de déclarer une variable
et de lui assigner la valeur d'une propriété d'un objet.
*/
function Enfant(props) {
//  const prenom = props.pseudo
//  const age = props.age
//  const ville = props.ville
/**
   * @Destructuration
   * De cette manière, vous sécurisez votre propriété qui ne sera pas modifiable 
   * (comme on déstructure dans une const), 
   * et c'est important que ce soit le cas!
   * permet directement de déclarer une variable 
   * et de lui assigner la valeur d'une propriété d'un objet.
   */
const { pseudo, age, ville  } = props
    return(
    <>
    
    <h1>Hello World 👋</h1>
    {props.pseudo} {ville}
    </>)
}
export default Enfant;