const model = require('./model')

function get_representantelegal(filtro_representantelegal) {
  return new Promise((resolve, reject) => {
    let filtro = {};
    if (filtro_representantelegal) {
      filtro = { RUC: filtro_representantelegal };
    }

    model.find(filtro)
      .populate({
        path: 'representantelegal_detalle',
        populate: {
          path: 'empresa',
          model: 'empresa'
        }
      })
      .lean()  // Opcional, para obtener objetos JavaScript en lugar de objetos Mongoose
      .then(data => {
        const lista = data.map(elemento => {
          const objeto = {
            id: elemento._id,
            RUC: elemento.RUC,
            cedula: elemento.cedula,
            nombre: elemento.nombre,
            apellido: elemento.apellido,
            email: elemento.email,
            domicilio: elemento.domicilio,
            telefono: elemento.telefono,
            empresas: elemento.representantelegal_detalle.map(detalle => ({
              id: detalle._id,
              RUC: detalle.empresa.RUC,
              nombre: detalle.empresa.nombre,
              domicilio: detalle.empresa.domicilio,
              telefono: detalle.empresa.telefono
            }))
          };
          return objeto;
        });

        resolve(lista);
      })
      .catch(error => {
        reject(error);
      });
  });
}

function add_representantelegal(representantelegal) {
  const objeto = new model(representantelegal)
  objeto.save()
}

async function update_representantelegal(representantelegal) {
  const objeto = await model.findOne({ RUC: representantelegal.RUC })

  if (objeto) {
    objeto.estado = False
    return resultado = await objeto.save()
  } else {
    return null
  }
}

module.exports = {
  add: add_representantelegal,
  get: get_representantelegal,
  update: update_representantelegal
}