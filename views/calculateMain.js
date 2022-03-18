// import { render, html } from './lit-html/lit-html.js';
import {render, html} from "../node_modules/lit-html/lit-html.js"
const calculateTemplate = () => html`
<div>
<a href="/"><i class="fa-solid fa-arrow-turn-down"></i></a>
        <h1>Изберете типа на математическата операция</h1>
        <ul>
            <li><a href="/calculate/addition">Събиране</a></li>
            <li><a href="/calculate/subtraction">Изваждане</a></li>
            <li><a href="/calculate/multiplication">Умножение</a></li>
            <li><a href="/calculate/division">Деление</a></li>
        </ul>
</div>
`;

const root = document.getElementById('root');

export const calculateView = (ctx) => {
    render(calculateTemplate(), root);
};
