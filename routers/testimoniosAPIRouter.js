import express from 'express'
import controller from '../controllers/testimoniosApiController.js'

const router = express.Router()

router.route('/')
    .get(controller.allTestimonios)
    .post(controller.addTestimonio)

router.route('/:id')
    .patch(controller.publicTestimonio)
    .put(controller.replaceTestimonio)
    .delete(controller.deleteTestimonio)

export default router