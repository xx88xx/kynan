import 'babel-polyfill'
import main from './main';
import App from './js/App.js';
// require('viewport-units-buggyfill').init();

main();

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
