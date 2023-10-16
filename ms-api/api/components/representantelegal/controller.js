const storage = require('./storage')

function get_representantelegal(filtro_representantelegal) {
    return new Promise((resolve, reject) => {
        resolve(storage.get(filtro_representantelegal))
    })
}

function add_representantelegal(representantelegal) {
    return new Promise((resolve, reject) => {
        if (!representantelegal.RUC) {
            return reject('No hay datos suficientes.')
        }
        storage.add(representantelegal)
        resolve(representantelegal)
    })
}

function update_representantelegal(representantelegal) {
    return new Promise((resolve, reject) => {
        let resultado = storage.update(representantelegal)
        if (resultado) {
            return resolve(representantelegal)
        } else {
            return reject('No existe el representante legal.')
        }
    })
}

module.exports = {
    get_representantelegal,
    add_representantelegal,
    update_representantelegal
}