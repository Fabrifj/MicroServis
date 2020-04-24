// base de datos
const Mongoose = require('mongoose')

// models
const Estudiante = require('../models/Estudiantes')
//holaa


class EstudianteControll{
    constructor(){
        this.collectionName ='Estudiante';
    }
    listEstudiante(response){
        Estudiante.find({}, function(error,estudiantes){
            if(error) return response.send("error a la peticion")
            if(!estudiantes) return response.send(" estudiante no existe")

            response.status(202).send(estudiantes);
        })
        
    }

    Estudiante(response, estuId){
        Estudiante.findById(estuId, function(error, estudiante){
            if(error) return response.send("error a la peticion")
            if(!estudiante) return response.send(" estudiante no existe")

            response.status(202).send(estudiante);
        }) 
    }
    cursoEstudiante(response, cursoId){
        Estudiante.find({curso:cursoId}, function(error, estudiantes){
            if(error) return response.send("error a la peticion")
            if(!estudiantes) return response.send(" estudiante no existe en ese curso")
            response.status(202).send(estudiantes);
        } )
    }
    cursoEstudiante2(response, cursoId){
        let list = [];
        list =  Estudiante.find({curso:cursoId}, function(error, estudiantes){
            if(error) return response.send("error a la peticion")
            if(!estudiantes) return response.send(" estudiante no existe en ese curso")
            return estudiantes;
        } )
        return list;
    }

    addEstudiante(body){
        console.log(body);
        let estu = new Estudiante();

        estu._id = body._id,
        estu.nombre= body.nombre,
        estu.id_Registro = body.id_Registro,
        estu.curso = body.curso
        
        estu.save();
        
    }
    deleteEstudiante(response, estuid){
        Estudiante.findById(estuid, function(error, estudiante){
            if(error) return response.send("error a la peticion")
            if(!estudiante) return response.send(" estudiante no existe")

            estudiante.remove(function(error){
                if(error) return response.send("error a la peticion")
                response.status(202).send("estudiante borrado");
            })  
        }) 
    }
    updateEstudiante(response,estuId,update){
        Estudiante.findByIdAndUpdate(estuId, update,function(error, estudiante){
            if(error) return response.send("error a la peticion")
            if(!estudiante) return response.send(" estudiante no existe")

            response.status(202).send("actualizado")

        })
    } 
   

}
module.exports = EstudianteControll ;
