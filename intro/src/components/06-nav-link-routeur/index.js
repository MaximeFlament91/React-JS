import React from "react";
import { useLocation, useParams } from "react-router-dom";

function Article() {
  // usePrams, permet de récupérer les paramètres qui sont dans l 'url.
  const params = useParams();
  // const id = params.id
  const { id } = params

  const location = useLocation()
  const { titre } = location.state

  return (
    <>
      <h1>{titre} </h1>
      <p>Params : {id}</p>
    </>
  );
}
    export default Article;