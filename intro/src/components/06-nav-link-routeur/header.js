import { Link, Outlet } from "react-router-dom";

function Header (){
return(
    <>
    <header>
        <nav>
            <ul>
                <li>
                    <link to='todoList'>Todo List</link>
                </li>
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