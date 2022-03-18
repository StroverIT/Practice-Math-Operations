// import { render, html } from './lit-html/lit-html.js';
import {render, html} from "../node_modules/lit-html/lit-html.js"
const homeTemplate = () => html`
      <h1>Математически операции</h1>
  <ul>
      <li><a href="/calculatePage">Започни</a></li>
      <li><a href="">За сайта</a></li>
      <li><a href="">Как се играе</a></li>
  </ul>
`;

const root = document.getElementById('root');

export const homeView = (ctx) => {
    render(homeTemplate(), root);
};


