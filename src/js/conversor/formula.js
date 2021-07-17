import data from './data.js' // ROTAS DANDO TUDO ERRADO

export default function formula(originalUnit, quantityUnit, resultUnit) {
    const unitData = data(originalUnit, resultUnit)

    let conversorNumerado = unitData[originalUnit]
    let produtoNumerado = unitData[resultUnit]
    let caso1 = produtoNumerado / (conversorNumerado * quantityUnit)

    if (caso1 <= 1) {
        produtoNumerado = conversorNumerado / produtoNumerado * quantityUnit

        if (!Number.isInteger(produtoNumerado)) {
            if (quantityUnit == 1) return `<b>${quantityUnit} ${originalUnit}</b> converted to <b>${resultUnit}s</b> is equal to ${produtoNumerado.toFixed(3)}...<b> ${resultUnit }s.</b>`
            return `<b>${quantityUnit} ${originalUnit}s</b> converted to <b>${resultUnit}s</b> is equal to <b> ${produtoNumerado.toFixed(3)}... ${resultUnit}s.</b>`
        }
        //
        if (quantityUnit == 1) return `<b>${quantityUnit} ${originalUnit}</b> converted to <b>${resultUnit}s</b> is equal to <b> ${Math.round(produtoNumerado)} ${resultUnit}s.</b>`
        return `<b>${quantityUnit} ${originalUnit}s</b> conprodutoNumeradoverted to <b>${resultUnit}s</b> is equal to <b> ${Math.round(produtoNumerado)} ${resultUnit }s.</b>`
    } else {
        produtoNumerado = produtoNumerado / (conversorNumerado * quantityUnit)

        if (!Number.isInteger(produtoNumerado)) {
            if (quantityUnit == 1) return `<b>${quantityUnit} ${originalUnit}</b> converted to <b>${resultUnit}s</b> is equal to <b> 1/${produtoNumerado. toFixed(3)}... ${resultUnit}s.</b>`
            return `${quantityUnit} <b>${originalUnit}s</b> converted to <b>${resultUnit}s</b> is equal to <b> 1/${produtoNumerado.toFixed(3)}. .. ${resultUnit}s.</b>`
        }

        if (quantityUnit == 1) return `<b>${quantityUnit} ${originalUnit}</b> converted to <b>${resultUnit}s</b> is equal to <b> 1/${Math. round(produtoNumerado) } ${resultUnit}s.</b>`
        return `${quantityUnit} <b>${originalUnit}s</b> converted to <b>${resultUnit}s</b> is equal to <b> 1/${Math.round(produtoNumerado)} ${resultUnit}s.</b>`
    } 
}