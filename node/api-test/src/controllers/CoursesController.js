const knex = require('../databases/knex')
const fieldValidator = require('../utils/FieldValidator')

exports.create = async (req, res) => {
  try {
    const course = req.body

    const invalidFields = fieldValidator(course, ['title', 'description',])

    if (invalidFields.length)
    return res.status(404).send({
      status: 'invalid request',
      invalidFields
    })

    const [courseCreatedId] = await knex.insert(course).into('courses')

    const [courseCreated] = await knex.select('*').from('courses').where({id: courseCreatedId})

    return res.status(200).send({
      status: 'success',
      data: courseCreated
    })
  } catch (err) {
    return res.status(500).send({ error: e.message || e})
  }
}

/*exports.delete = async (req, res) => {
  try {
    console.log('esta no delete')
  } catch (err) {
    return res.status(500).send({ error: e.message || e})
  }
}*/