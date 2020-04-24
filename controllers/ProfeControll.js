// base de datos
const Mongoose = require('mongoose')

// models
const Profesor = require('../models/Profesor')

class ProfesorControll{
    constructor(){
        this.collectionName ='Profesor';
    }
    listProfesor(response){
        Profesor.find({}, function(error,profes){
            if(error) return response.send("error a la peticion")
            if(!profes) return response.send(" profes no existe")

            response.status(202).send(profes);
        })
        
    }

    Profesor(response, profeId){
        Profesor.findById(profeId, function(error, profe){
            if(error) return response.send("error a la peticion")
            if(!profe) return response.send(" profe no existe")

            response.status(202).send(profe);
        }) 
    }


    addProfesor(body){
        console.log(body);
        let profe = new Profesor();

        profe._id = body._id,
        profe.nombre= body.nombre,
        profe.edad = body.edad
        
        profe.save();
        
    }

    deleteProfesor(response, profeId){
        Profesor.findById(profeId, function(error, profe){
            if(error) return response.send("error a la peticion")
            if(!profe) return response.send(" profe no existe")

            profe.remove(function(error){
                if(error) return response.send("error a la peticion")
                response.status(202).send("profe borrado");
            })  
        }) 
    }
    updateProfesor(response,profeId,update){
        Profesor.findByIdAndUpdate(profeId, update,function(error, profe){
            if(error) return response.send("error a la peticion")
            if(!profe) return response.send(" profe no existe")

            response.status(202).send("actualizado")

        })
    } 
   

}
module.exports = ProfesorControll ;
