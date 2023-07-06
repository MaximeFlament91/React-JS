import React from "react";
import { Link, Outlet } from "react-router-dom";

function Header (){
return(
    <>
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                    <li><Link to='todoList'>Todo List</Link></li>
                    <li><Link to='/Intro'>Intro</Link></li>
                    <li><Link to='/Counter'>Counter</Link></li>
                    <li><Link to='/Price'>Prix</Link></li>
                    <li><Link to='/Counter2'>Counter²</Link></li>
                    <li><Link to='/Parent'>Enfant/Parent</Link></li>
                    <li><Link to='/Formulaire'>Formulaire</Link></li>
                    <li><Link to='/Article'>Article</Link></li>
                    <li><Link to={{pathname: 'article/${id}'}}state={{titre: "Page Article 🛍"}}>Article bis</Link></li>

            </ul>
        </nav>
    </header>
    <section>
        <Outlet/>
    </section>
    </>
)

}
export default Header;