// base de datos
const Mongoose = require('mongoose')

// models
const Curso = require('../models/Cursos')

class CursoControll{
    constructor(){
        this.collectionName ='Cursos';
    }
    listCurso(response){
        Curso.find({}, function(error,cursos){
            if(error) return response.send("error a la peticion")
            if(!cursos) return response.send(" curso no existe")

            response.status(202).send(cursos);
        })
        
    }

    Curso(response, cursoId){
        Curso.findById(cursoId, function(error, curso){
            if(error) return response.send("error a la peticion")
            if(!curso) return response.send(" curso no existe")

            response.status(202).send(curso);
        }) 
    }


    addCurso(body){
        console.log(body);
        let curso = new Curso();

        curso._id = body._id,
        curso.nombre= body.nombre,
        curso.id_Profesor = body.id_profesor,
        curso.id_Alumno = body.id_alumno
        
        curso.save();
        
    }

    deleteCurso(response, cursoId){
        Curso.findById(cursoId, function(error, curso){
            if(error) return response.send("error a la peticion")
            if(!curso) return response.send(" curso no existe")

            curso.remove(function(error){
                if(error) return response.send("error a la peticion")
                response.status(202).send("curso borrado");
            })  
        }) 
    }
    updateCurso(response,cursoId,update){
        Curso.findByIdAndUpdate(cursoId, update,function(error, curso){
            if(error) return response.send("error a la peticion")
            if(!curso) return response.send(" curso no existe")

            response.status(202).send("actualizado")

        })
    } 
   

}
module.exports = CursoControll ;
