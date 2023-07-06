import React from "react";

class Cycle extends React.Component{

  // On peut aussi créer un state sans passer par un constructor
  state = {
    title: "Life Cycle React"
  }

  // s'éxécute quand on ouvre le component 
  // (au render du component apres l'affichage du dom)
  componentDidMount() {
    console.log("DidMount => ",1)
  }

  // s'exécute avant une modification sur notre component et 
  // doit retourner un bolean
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate => " , 2)
    return true
  }

  // s'exécute quand on effectue une modification sur notre component
  componentDidUpdate() {
    console.log("DidUpdate => ", 3)
  }

  handleChange = () => {
    this.setState({title: "Cycle"})
  }

  render(){
    const { title } = this.state
    return(
      <>
        <h1>{title}</h1>
        <button onClick={this.handleChange}>change title</button>
      </>
    )
  }
}
export default Cycle;

