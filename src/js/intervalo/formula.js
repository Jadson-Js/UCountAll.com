const months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]   // os dias que cada mes tem

export default function formula(dateValue) {
    let summation = 0   //  funcionara como acumulador

    let intervalYear = dateValue[5] - dateValue[2]  //  intervalo entre os anos 

    for (let ad = dateValue[1]; ad < dateValue[4]; ad++) {  // percorrera os intervalo entre os months
        summation += months[ad]  //  a cada mes ele irá somar os dias de cada
    }

    // o intervalo dos anos sera multiplicado por 360
    const grossResult = intervalYear * 365 + summation // e depois sera somado o variavel summation
    const preparatory = dateValue[0] - dateValue[3] // ele vai ver o intervalo entre os dias      
    const liquidResult = grossResult - preparatory  // e depois subtrair na const 'preparatorio

    return liquidResult // e depois retornara o resultado
}