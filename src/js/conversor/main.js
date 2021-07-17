import formula from './formula.js' // ROTAS DANDO TUDO ERRADO

const res = document.querySelector('.body__result')

export default function conversionPage() {
    let originalUnit = document.querySelector("#originalUnit").value
    let quantityUnit = document.querySelector("#quantityUnit")
    let resultUnit = document.querySelector("#resultUnit").value

    if (Number(quantityUnit.value) <= 0) {
        quantityUnit.value = 1
    }

    if (originalUnit == "" || resultUnit == "") {
        res.style.color = "red"
        res.innerHTML = "Choose an input and an output unit."
    } else {
        res.style.color = "white"
        res.innerHTML = formula(originalUnit, Number(quantityUnit.value), resultUnit)
    }
};