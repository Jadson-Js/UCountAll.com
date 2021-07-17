import holidayData from './data.js' //  modulo que mostra os dados do feriado

import Central from '../intervalo/Central.js'
import formula from '../intervalo/formula.js' //  modulo que calcula intervals


const button = document.querySelector('.card__button')
const date = new Date();
const central = new Central()
const res = document.querySelector(".body__result")


export default function holidayPage() {
    const holiday = document.querySelector("#holiday") // setar o feriado escolhido

    const currentDate = [date.getDate(), date.getMonth() + 1, date.getFullYear()] // dia, mes e ano atual em um array
    const holidayDate = new holidayData(holiday.value, currentDate).date // essa é date completa do feriado

    let dateValue = [currentDate[0], currentDate[1], currentDate[2], holidayDate[0][0], holidayDate[0][1], holidayDate[0][2]]

    dateValue = central.timeline(dateValue, true)

    let interval = formula(dateValue) // resultado em interval
    if (interval < 0) interval *= (-1)

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    let dayName =  holidayDate[0][0]
    let monthName = month[holidayDate[0][1] - 1]
    let yearName = holidayDate[0][2]

    const dateToHoliday = `<time datetime="${yearName}-${holidayDate[0][1]}-${dayName}">${monthName} ${dayName}, ${yearName}</time> `
    
    const presentHoliday = `Congratulations visitor, today is <b> ${dateToHoliday} </b> day of <b> ${holiday.options[holidayDate[1]].text}</b>, and I bet you didn't even know that ksks .`
    const futureHoliday = `The <b>${holiday.options[holidayDate[1]].text}</b> holiday is celebrated at <b> ${dateToHoliday} </b> and there are <b> ${interval} days </b> before it arrives.`

    if (interval == 0) {
        res.innerHTML = presentHoliday
    } else {
        res.innerHTML = futureHoliday
    }
}