// base de datos
const Mongoose = require('mongoose')

// models
const Nota = require('../models/Nota')

class NotaControll{
    constructor(){
        this.collectionName ='Nota';
    }
    listNota(response){
        Nota.find({}, function(error,notas){
            if(error) return response.send("error a la peticion")
            if(!notas) return response.send(" notas no existe")

            response.status(202).send(notas);
        })
        
    }
    estuNota(response, estuId){
        Nota.find({id_Alumno:estuId}, function(error, nota){
            if(error) return response.send("error a la peticion")
            if(!nota) return response.send(" no hay nota ")

            response.status(202).send(nota);
        }) 
    }
    


    Nota(response, notaId){
        Nota.findById(notaId, function(error, nota){
            if(error) return response.send("error a la peticion")
            if(!nota) return response.send(" nota no existe")

            response.status(202).send(nota);
        }) 
    }


    addNota(body){
        console.log(body);
        let nota = new Nota();

        nota.nombre= body.nombre,
        nota.id_Alumno = body.id_alumno,
        nota.tipo = body.tipo,
        nota.nota = body.nota
        
        nota.save();
        
    }

    deleteNota(response, notaId){
        Nota.findById(notaId, function(error, nota){
            if(error) return response.send("error a la peticion")
            if(!nota) return response.send(" nota no existe")

            nota.remove(function(error){
                if(error) return response.send("error a la peticion")
                response.status(202).send("nota borrado");
            })  
        }) 
    }
    updateNota(response,notaId,update){
        Nota.findByIdAndUpdate(notaId, update,function(error, nota){
            if(error) return response.send("error a la peticion")
            if(!nota) return response.send(" nota no existe")

            response.status(202).send("actualizado")

        })
    } 

}
module.exports = NotaControll ;
