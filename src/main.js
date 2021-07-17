
import conversionPage from './js/conversor/main.js' // import dos modulos main das paginas 
import {
    counterPage,
    intervalPage
} from './js/intervalo/main.js'
import holidayPage from './js/feriado/main.js'

//  script da pagina de conversão de datas
document.addEventListener("click", (e) => {
    if (e.target.id == "converterButton") {
        conversionPage()
    }
})

//  script da pagina de intervalos de inicio e fim
document.addEventListener("submit", (e) => {
    if (e.target.id == "formOne") {
        counterPage()
    }
})

//  script da pagina de intervalos de inicio e fim
document.addEventListener("submit", (e) => {
    if (e.target.id == "formTwo") {
        intervalPage()
    }
})

//  script da pagina de feriados
document.addEventListener("click", (e) => {
    if(e.target.id == "holidayButton"){
        holidayPage()
    }
})

//  npm uninstall babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 webpack-dev-middleware webpack-hot-middleware --save-dev