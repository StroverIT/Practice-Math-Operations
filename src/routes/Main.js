
import React from "react"
import {Link} from "react-router-dom"
const  Main = () =>{
    return(
        <div>
        <h1>Математически операции</h1>
        <p>Тука можете да упражнявате вашата математика</p>
        <ul>
            <li>
                <Link to="/startGame">Започни игра</Link>
            </li>
            <li>
                <Link to="/tutorial">Как се игра</Link>
            </li>
            <li>
                <Link to="/aboutMe">Относно сайта</Link>
            </li>
        </ul>
        </div>
    )
}
export default Main;
