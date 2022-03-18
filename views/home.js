import {render, html} from "../node_modules/lit-html/lit-html.js"
const homeTemplate = () => html`
      <h1>Математически операции</h1>
  <ul>
      <li><a href="/calculatePage">Започни игра</a></li>
      <li><a href="">Как се играе</a></li>
      <li><a href="">За създателя</a></li>
  </ul>
`;

const root = document.getElementById('root');

export const homeView = (ctx) => {
    render(homeTemplate(), root);
};


