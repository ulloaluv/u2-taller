const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true,
}

const req_number = {
    type: Number,
    required: true,
}

const empresa_schema = new Schema({
    RUC: req_string,
    nombre: req_string,
    domicilio: req_string,
    telefono: req_string,
})

const model = mongoose.model('empresa', empresa_schema)
module.exports = model