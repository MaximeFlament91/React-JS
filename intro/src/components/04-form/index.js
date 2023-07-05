import React, { useState } from 'react'

const Formulaire = () =>{
    const [user, setUser] = useState({
        prenom: "",
        nom: "",
    });

    const [checkForm, setCheckForm] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUser(user => ({...user, [name]: value}))
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        /* 
        C'est ici qu'on peut envoyer les informations pour la bdd, store, api et
        On peut aussi faire une ou des conditions pour vérifier par si le mdp contient bien 8 caractères au minimum
        etc.
        */
       /*
          Assurez-vous que le prénom et le nom s'affichent sur la page uniquement après l'envoi du formulaire, et non avant.
        */
    if (user.prenom.length >= 3 && user.nom.length >= 3) {
        setCheckForm(true);
        console.log("succès");
      } else {
        setCheckForm(false);
        console.log("erreur");
      }
    };

    return (
        <div>
          <h1>Formulaire</h1>
          {checkForm && (
            <p>
              Name : {user.nom} Prenom : {user.prenom}
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <label htmlFor="prenom">Prenom:</label>
            <input
              type="text"
              id="prenom"
              placeholder="votre prenom"
              name="prenom"
              onChange={handleChange}
            />
    
            <label htmlFor="nom">Nom:</label>
            <input
              type="text"
              id="nom"
              placeholder="votre nom"
              name="nom"
              onChange={handleChange}
            />
            <button>Valider</button>
          </form>
        </div>
      );
}


export default Formulaire;