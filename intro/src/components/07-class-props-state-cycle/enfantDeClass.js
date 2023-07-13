import React from 'react'

class EnfantDeClass extends React.Component{

  handleSubmit = event => {
    event.preventDefault()
    const value = event.target.title.value 
    // On récupère les données saisies dans le formulaire
    this.props.handleChange(value) 
    // On envoie la saisie du formulaire à la function parent.
  }

  render(){
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="text" name="title"/>
          <button>Change title</button>
        </form>
      </>
    )
  }
}
export default EnfantDeClass;