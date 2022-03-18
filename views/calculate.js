// import { render, html } from './lit-html/lit-html.js';
import {render, html} from "../node_modules/lit-html/lit-html.js"
const calculateTemplate = () => html`
<div>
<i class="fas-solid fas-location-arrow"></i>
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, exercitationem?</p>
</div>
`;

const root = document.getElementById('root');

export const calculateView = (ctx) => {
    render(calculateTemplate(), root);
};
