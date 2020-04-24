const  express = require('express');
const bodyParser = require("body-parser");

const CursoControler = require('../controllers/CursoControll');
const EstuControler = require('../controllers/EstuControll');
const NotaControler = require('../controllers/NotaControll');
const ProfeControler = require('../controllers/ProfeControll');


class Express{
    constructor(){
        this.app = express();
    }
    initialize(){
        this.app.use(bodyParser.text());
        this.app.use(bodyParser.json());
// inicializar definir puerto
        this.app.listen(3005);
        console.log('la aplicacion esta escuchan el puerto 3005');
        //define routers
        this.defineRoutesCurso(); 
        this.defineRoutesEstudiante();
        this.defineRoutesNota();
        this.defineRoutesProfe();
    }
//curso
    defineRoutesCurso(){
        let CursoCtrl = new CursoControler();  

    // add
        this.app.post('/cursos/add', function(request, response){
            CursoCtrl.addCurso(request.body);
            response.status(200).send(request.body);
        })

    //get 
        this.app.get('/cursos/:cursoId', function(request, response){
            let cursoId = request.params.cursoId;
            CursoCtrl.Curso(response,cursoId);
        })
        this.app.get('/cursos', function(request, response){    
            CursoCtrl.listCurso(response);
        })

    //delete
        this.app.delete('/cursos/del/:cursoId', function(request, response){
            let cursoId = request.params.cursoId;   
            CursoCtrl.deleteCurso(response,cursoId);
        })
    // update
        this.app.put('/cursos/up/:cursoId', function(request, response){
            let cursoId = request.params.cursoId;   
            let update = response.body
            CursoCtrl.updateCurso(response,cursoId,update);
        })
    }
//estudiante
    defineRoutesEstudiante(){
        let EstuCtrl = new EstuControler();  

    // add
        this.app.post('/estudiante/add', function(request, response){
            EstuCtrl.addEstudiante(request.body);
            response.status(200).send(request.body)
        })

    //get 
        this.app.get('/estudiante/:estuId', function(request, response){
            let estuId = request.params.estuId;
            EstuCtrl.Estudiante(response,estuId);
        })
        this.app.get('/estudiante', function(request, response){    
            EstuCtrl.listEstudiante(response);
        })

        this.app.get('/curso-estu/:cursoId', function(request, response){
            let cursoId = request.params.cursoId;
            EstuCtrl.cursoEstudiante(response,cursoId);
            
            /*
            let estu = EstuCtrl.cursoEstudiante2(response,cursoId);
            console.log(estu);
            response.status(202).send(estu);
            */
        })



    //delete
        this.app.delete('/estudiante/del/:estuId', function(request, response){
            let estuId = request.params.estuId;   
            EstuCtrl.deleteEstudiante(response,estuId);
        })
    // update
        this.app.put('/estudiante/up/:estuId', function(request, response){
            let estuId = request.params.estuId;   
            let update = response.body
            EstuCtrl.updateEstudiante(response,estuId,update);
        })
    }
//nota
    defineRoutesNota(){
        let NotaCtrl = new NotaControler();  

    // add
        this.app.post('/nota/add', function(request, response){
            NotaCtrl.addNota(request.body);
            response.status(200).send(request.body)
        })

    //get 
        this.app.get('/nota/:notaId', function(request, response){
            let notaId = request.params.notaId;
            NotaCtrl.Nota(response,notaId);
        })
        this.app.get('/nota', function(request, response){    
            NotaCtrl.listNota(response);
        })
        this.app.get('/estu-nota/:estuId', function(request, response){
            let estuId = request.params.estuId;
            EstuCtrl.estuNota(response,estuId);
        })
        this.app.get('/curso-nota/:cursoid', function(request, response){
            let cursoid = request.params.cursoid;

            EstuCtrl.cursoNota(response,cursoid);
        })

    //delete
        this.app.delete('/nota/del/:notaId', function(request, response){
            let notaId = request.params.notaId;   
            NotaCtrl.deleteNota(response,notaId);
        })
    // update
        this.app.put('/nota/up/:notaId', function(request, response){
            let notaId = request.params.notaId;   
            let update = response.body
            NotaCtrl.updateNota(response,notaId,update);
        })
    }
//profe
    defineRoutesProfe(){
        let ProfeCtrl = new ProfeControler();  

    // add
        this.app.post('/profe/add', function(request, response){
            ProfeCtrl.addProfesor(request.body);
            response.status(200).send(request.body)
        })

    //get 
        this.app.get('/profe/:profeId', function(request, response){
            let profeId = request.params.profeId;
            ProfeCtrl.Profesor(response,profeId);
        })
        this.app.get('/profe', function(request, response){    
            ProfeCtrl.listProfesor(response);
        })

    //delete
        this.app.delete('/profe/del/:profeId', function(request, response){
            let profeId = request.params.profeId;   
            ProfeCtrl.deleteProfesor(response,profeId);
        })
    // update
        this.app.put('/profe/up/:profeId', function(request, response){
            let profeId = request.params.profeId;   
            let update = response.body
            ProfeCtrl.updateProfesor(response,profeId,update);
        })
    }

}
module.exports = Express;