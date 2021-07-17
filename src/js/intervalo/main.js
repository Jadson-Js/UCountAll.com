import formula from './formula.js' //  modulo que calcula intervals de tempo
import Central from './Central.js'

const central = new Central()

function counterPage() {
    let dateValue = central.autoDate()

    dateValue = dateValue.map((element) => parseInt(element))

    dateValue = central.timeline(dateValue)

    let interval = formula(dateValue) // vai calcular o interval

    central.response(interval, dateValue, "oneDate") // resposta final   

    event.preventDefault()
}


function intervalPage() {
    let dateValue = central.initalDate()

    dateValue = dateValue.map((element) => parseInt(element))

    dateValue = central.timeline(dateValue)

    let interval = formula(dateValue) // vai calcular o interval

    central.response(interval, dateValue, "twoDate") // resposta final   

    event.preventDefault()
}

export {counterPage, intervalPage}