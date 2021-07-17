const res = document.querySelector(".body__result")
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export default class Central {
    autoDate() {
        let finalDate = document.querySelector('.finalDate').value
        finalDate = finalDate.split("-")

        const initalDate = new Date();

        let dayI = initalDate.getDate();
        let monthI = initalDate.getMonth() + 1;
        let yearI = initalDate.getFullYear();

        let dayF = finalDate[2]
        let monthF = finalDate[1]
        let yearF = finalDate[0]

        return [dayI, monthI, yearI, dayF, monthF, yearF]
    }

    initalDate() {
        let initalDate = document.querySelector('.initalDate').value
        let finalDate = document.querySelector('.finalDate').value

        initalDate = initalDate.split("-")
        finalDate = finalDate.split("-")

        let dayI = initalDate[2]
        let monthI = initalDate[1]
        let yearI = initalDate[0]

        let dayF = finalDate[2]
        let monthF = finalDate[1]
        let yearF = finalDate[0]

        return [dayI, monthI, yearI, dayF, monthF, yearF]
    }

    timeline(dateValue) {
        if (dateValue[2] > dateValue[5] || dateValue[1] > dateValue[4] || dateValue[1] == dateValue[4] && dateValue[0] > dateValue[3]) { //  se ano passado for maior que o futuro    
            let interD = dateValue[0]
            let interM = dateValue[1]
            let interY = dateValue[2]

            dateValue[0] = dateValue[3]
            dateValue[1] = dateValue[4]
            dateValue[2] = dateValue[5]

            dateValue[3] = interD
            dateValue[4] = interM
            dateValue[5] = interY

            dateValue.push(true)

            return dateValue
        } else {
            dateValue.push(false)
            return dateValue
        }
    }

    response(interval, dateValue, page) {
        res.style.color = 'white'

        if (interval < 0) interval *= (-1)
        
        const datetimeI = `<b><time datetime="${dateValue[2]}-${dateValue[1]}-${dateValue[0]}">${month[dateValue[1] - 1]} ${dateValue[0]}, ${dateValue[2]}</time></b>`
        const datetimeF = `<b><time datetime="${dateValue[5]}-${dateValue[4]}-${dateValue[3]}">${month[dateValue[4] - 1]} ${dateValue[3]}, ${dateValue[5]}</time></b>`
        
        const zero = `Ehhh... I think the range between ${datetimeI} and ${datetimeF} It can only be humm... mandarin ?`
        const positive = `between today ${datetimeI} and ${datetimeF} there is a  ${interval} days gap.`
        const negative = `between today ${datetimeF} and ${datetimeI} there is a  ${interval} days gap.`
        const neutre = `Between ${datetimeI} and ${datetimeF} there will be an interval of ${interval} days.`

        if (interval == 0) {
            res.innerHTML = zero
        } else {
            if (page == "oneDate") {
                if (dateValue[6]) { 
                    res.innerHTML = negative
                } else {
                    res.innerHTML = positive
                }
            } else {
                res.innerHTML = neutre
            } 
        }
    }
}