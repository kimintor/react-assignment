import "./index.css"
import { Link,Outlet } from "react-router-dom"

function Root (){
    return(
        <>
        <nav>
            <Link to ="/">Home</Link> <p>--</p> <Link to = "/about">About</Link>
            <p>---</p>
            <Link to ="/pokedex">Pokedex</Link>
            <Link to ="/pokemon">PokemonCard</Link>
            
        </nav>
        <Outlet>

        </Outlet>
        </>

    )
}

export default Root