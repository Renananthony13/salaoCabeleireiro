function validaHora(hor, custom) {
    if(/^([01]\d|2[0-3]):([0-5]\d)$/.test(hor)) {
        return hor
    } {
        return custom.error('Horario invalido')
    }
}


module.exports = validaHora

