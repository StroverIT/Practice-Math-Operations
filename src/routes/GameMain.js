
import React from "react"
import {Link} from "react-router-dom"
import Returnicon from "../components/ReturnIcon"
 const  GameMain = () => {
    let currLinks = []
    for(let i = 1; i <= 10; i ++){
        currLinks.push(
            <li key={i}>
            <Link to={`/level/${i}`}>Ниво: {i}</Link>
        </li>
        )
    }
    return(
        <div>
         <Returnicon goTo="/" />
            {/* 
            Animation to
            BsChevronDoubleLeft
            */}
        <h1>Изберете типа на операцията</h1>
        <ul>
            {currLinks.map(l=> l)}
      

        </ul>
        </div>
    )
}
export default GameMain