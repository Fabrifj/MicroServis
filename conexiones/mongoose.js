const mongoose = require('mongoose');


class Mongoose{
    constructor(direccion, baseDatos){
        //this.mongoose = mongoose();
        this.direccion = direccion;
        this.baseDatos = baseDatos;

    }
    async initialize(){
        this.conexion  = await mongoose.connect(this.direccion,function(err, response){
        if(err) throw err
        console.log('conexion establecida....')
        })
        //this.baseDatos = await this.conexion.db(this.baseDatos);
    }
}
 module.exports = Mongoose;