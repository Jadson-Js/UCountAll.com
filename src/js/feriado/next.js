export default class proximo {
    constructor(currentDate, datas) {
        this.holiday = this.holiday(currentDate, datas)
    }

    holiday(currentDate, datas) {
        for (let holidayDate of datas) {
            const holidayPoints = holidayDate[1] * 40 + holidayDate[0]
            const currentPoints = currentDate[1] * 40 + currentDate[0]

            if(holidayPoints >= currentPoints) {
                return datas.indexOf(holidayDate) + 1
            }
        }
        return 3
    }

}