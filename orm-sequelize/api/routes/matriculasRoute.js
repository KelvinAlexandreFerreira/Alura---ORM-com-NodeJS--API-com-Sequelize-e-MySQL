const { Router } = require('express')
const MatriculaController = require('../controllers/MatriculaController')

const router = Router()

router.get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.pegaUmaMatricula)
router.get('/pessoas/matricula/:turmaId/confirmadas', MatriculaController.pegaMatriculasPorTurma)
router.get('/pessoas/matricula/lotada', MatriculaController.pegaTurmasLotadas)

router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculaController.restauraMatricula)
router.post('/pessoas/:estudanteId/matricula', MatriculaController.criaMatricula)

router.put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.atualizaMatricula)

router.delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.apagaMatricula)

module.exports = router