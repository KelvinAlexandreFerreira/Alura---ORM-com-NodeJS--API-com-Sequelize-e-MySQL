const Services = require('./Services')
const database = require('../models')

class MatriculasServices extends Services{
    constructor(){
        super('Matriculas')
    }

    async pegaUmRegistro(matriculaId, estudanteId){
        return database[this.nomeDoModelo].findOne({
            where: {
                id: Number(matriculaId),
                estudante_id: Number(estudanteId)
        } })
    }

    async atualizaRegistro(dadosAtualizados, matriculaId, estudanteId, transacao = {}){
        return database[this.nomeDoModelo]
            .update(dadosAtualizados, { 
                where: { 
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                } 
            }, transacao)
    }

    async apagaRegistro(matriculaId, estudanteId){
        return database[this.nomeDoModelo].destroy({ 
            where: { 
                id: Number(matriculaId),
                estudante_id: Number(estudanteId)
            } 
        })
    }

    async restauraRegistro(matriculaId, estudanteId){
        return database[this.nomeDoModelo].restore({ 
            where: { 
                id: Number(matriculaId),
                estudante_id: Number(estudanteId)
            } 
        })
    }
}

module.exports = MatriculasServices