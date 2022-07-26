const { request } = require('express');
const knex = require('../databases/knex');
const fieldValidator = require('../utils/FieldValidator');

exports.create = async (req, res) => {
  try {
    const invalidFields = fieldValidator(
      req.body, ['title', 'description', 'videoId', 'instructorId', 'coursedId']
    )

    if (invalidFields.length || !Object.keys(req.body).length) {
      return res.status(400).send({
        status: 'requesição invalida',
        invalidFields
      })
    }

    const requiredFields = ['title', 'videoId', 'instructorId', 'coursedId']

    const requiredFieldsExists = []

    requiredFields.forEach(requiredFields => {
      if (!req.body.includes(requiredFields)) {
        requiredFieldsExists.push(requiredFields)
      }
    })
    
    
    if (requiredFields.length) {
    return res.status(400).send ({
      status: "Campors obrigatorios não foram informados",
      requiredFields: requiredFieldsExists
    })
  }
    // se eles existem "instructorId", "couresId"
    const [course] = await knex
      .select('*')
      .from('courses')
      .where({ id: Number(req.body.courseId)})

      if (!course) {
        return res.status(404).send({
          status: `nenhum curso com o id: ${courseId}registro foi encontrado`
        })
      }

    const [instructor] = await knex
     .select('*')
     .from('instructors')
     .where({ id: Number(req.body.instructorId)})

    if (!instructor) {
      return res.status(404).send({
        status: `nenhum instrutor com o id: ${instructorId}registro foi encontrado`
      })
    }

    const {title, videoId, description} = req.body
    const [lessonCreatedId] = await knex
      .insert({
        title,
        videoId,
        instructorID: instructor.id,
        courseId: course.id,
        description: description ? description : null
      })
      .into('lessons')

    const [lessonCreated] = await knex
      .select('*')
      .where({ id: lessonCreatedId })

    return res.status(200).send({
      status: 'success',
      data: lessonCreated
    })
  } catch (err) {
    return res.status(500).send({ error: err.message || err });
  }
}