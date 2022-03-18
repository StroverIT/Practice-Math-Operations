import page from './node_modules/page/page.mjs'
// Views
import { calculateView } from "./views/calculate.js"
import { homeView } from './views/home.js';

page("/", homeView)
page("/calculatePage", calculateView)

page.start();
