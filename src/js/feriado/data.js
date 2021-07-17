import next from './next.js'

export default class holidayData {
    constructor(req, currentDate) { // req = value do select que o usuario escolheu
        this.date = this.data(req, currentDate) //  vai receber todos os data do array
    }

    // os data do feriado só possui dia e mes.
    holidaYear(holidayDate, currentDate) { // e esse metodo vai calcular o ano a parti da data atual
        // expressão == se mes1 > que o mes2 || dia1 > que o dia2
        if (currentDate[1] > holidayDate[1] || currentDate[1] == holidayDate[1] && currentDate[0] > holidayDate[0]) {
            holidayDate[2] = currentDate[2] + 1 // então o ano do feriado é igual ao ano atual + 1
        } else {
            holidayDate[2] = currentDate[2]
        }
        return holidayDate // retornara a data completa
    }

    data(req, currentDate) { // metodo que mostra os data

        const holidayDates = { //  dia e mes do feriado
            1: [14, 2],
            2: [17, 3],
            3: [22, 3],
            4: [8, 5],
            5: [15, 6],
            6: [4, 7],
            7: [31, 10],
            8: [22, 11],
            9: [25, 12],
            10: [31, 12],
            11: [1, 1],
            12: [12, 2],
            13: [4, 4],
            14: [1, 5],
            15: [14, 6],
            16: [21, 9],
            17: [1, 10],
        }

        if (req == "0") {
            let date = []
            for (let key in holidayDates) {
                date.push(holidayDates[key])
            }
            req = new next(currentDate, date).holiday
        }

        return [this.holidaYear(holidayDates[req], currentDate), req] //  vai descobrir qual o ano do feriado
        // isso vai chamar o metodo com os data do mes escolhido e a data atual
    }
}