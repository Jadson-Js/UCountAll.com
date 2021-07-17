export default function uniDados(t1, t2) {
    let conversor
    let produto

    function dados() {
        this.nanosecond = 1,
        this.microsecond = 1000,
        this.millisecond = this.microsecond * 1000,
        this.second = this.millisecond * 1000,
        this.minute = this.second * 60,
        this.hour = this.minute * 60,
        this.day = this.hour * 24,
        this.week = this.day * 7,
        this.fortnight = this.day * 15,
        this.month = this.week * 4.34524,
        this.bimester = this.month * 2,
        this.quarter = this.month * 3,
        this.semester = this.quarter * 2,
        this.year = this.semester * 2
        this.decade = this.year * 10
        this.century = this.decade * 10
        this.millennium = this.century * 10
    }
    const dadosFormatado = new dados()

    for (let medida in dadosFormatado) {
        if (medida == t1) conversor = dadosFormatado[medida]
        if (medida == t2) produto = dadosFormatado[medida]
    }
    
    return {
        [t1]: conversor,
        [t2]: produto
    }
}