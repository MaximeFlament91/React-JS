import React, {useState, useEffect} from 'react'

/* 
  Créer un state prix et total avec une valeur définit

 GÉNÉRER un button pour prix et total qui nous permettrons 
 de les incrémenter de cinq à chaque clique.

 rajouter ensuite le hook useEffect qui s'active 
 uniquement quand la valeur de total change et non du prix, 
 cette function doit contenir une alert pour prévenir du changement 
 de valeur.
   */

function Price(){

    const [prenom, setPrenom] = useState('Francis')
    const [prix, setPrix] = useState(25)
    const [total, setTotal] = useState(50)


    useEffect(() => {
        alert(`le total est : ${total}`)
    }, {total});

    return(
        <div>
            <h1>Price 💲</h1>
            <p>Prix : {prix}</p>
            <p>Total : {total}</p>
            <button onClick={() => setPrix(prix + 5)} >Incré Prix</button>
            <button onClick={() => setTotal(total + 5)} >Incré Total</button>
    </div>
  );
}

export default Price;