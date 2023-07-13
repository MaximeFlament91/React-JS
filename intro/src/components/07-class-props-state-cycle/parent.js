import React from "react"
import Enfant from './enfant.js'

class LifeCycle extends React.Component{
  /*
    Pour déclarer un state à votre class component, 
    il vous faut utiliser la méthode de construction.
    Comme l'on surcharge cette méthode, il est important d'appeler
    la class parente (Component)
    afin de continuer de lui fournir les props avec le mot-clé super
  */
  constructor(props){
    // super fait référence au constructeur de la classe parente (React.Component).  
    super(props) 
    
    /* 
      Dès lors, vous pouvez initialiser votre state dans votre this
      On peut utiliser this dans un constructeur 
      qu’après avoir appelé le constructeur parent `
      (si vous avez fait un extends spécifique).
     */
    this.state = {
      title: "class Parent",
    }
  }

  // chilData provient du component enfant.
  handlChange = (childData) => {
    this.setState({ title: childData})
  }


  render(){
    /* 
      Zone ou l'on peut déstructuré des propriétés qui appartiennent à notre objet.
      On peut créer des const qui contiendront des map et qui seront appelés par la suite
      dans le return.
    */
    const { title } = this.state
    return(
      <>
        <h1>{title}</h1>
        <Enfant 
          handleChange={this.handlChange} // on envoie la methode au compoent enfant
        />
      </>
    )
  }
}
export default LifeCycle