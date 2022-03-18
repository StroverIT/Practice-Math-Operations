import page from '/node_modules/page/page.mjs'
// Views
import { homeView } from './views/home.js';
import { calculateView } from "./views/calculateMain.js"
import { calcOperationView } from './views/calculate.js';

page("/", homeView)
page("/calculatePage", calculateView)
page("/calculate/:typeCalc", calcOperationView)
page.start();
