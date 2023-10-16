const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_date = {
    type: Date,
    required: true,
}

const req_string = {
    type: String,
    required: true
}

const req_number = {
    type: Number,
    required: true,
}

const req_boolean = {
    type: Boolean,
    required: true,
}

const representantelegal_detalle_schema = new Schema({
    empresa: {
        type: Schema.ObjectId,
        ref: 'empresa',
    }
}, {
    timestamps: true,
})

const representantelegal_schema = new Schema({
    RUC: req_string,
    cedula: req_string,
    nombre: req_string,
    apellido: req_string,
    email: req_string,
    domicilio: req_string,
    telefono: req_string,
    representantelegal_detalle: [representantelegal_detalle_schema]
}, {
    timestamps: true,
})

const model = mongoose.model('representanteLegal', representantelegal_schema)
module.exports = model