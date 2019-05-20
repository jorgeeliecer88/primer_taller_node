//Jorge Eliecer Perez Niño

let fs = require('fs');
const {mensajes, cursos, opciones} = require('./util');

const yargs = require('yargs').command('inscribir', 'Inscribir a un estudiante',opciones ).argv;
function mostrarPorConsola(mensaje){
    console.log(mensaje);
}

function obtenerDatosCurso(curso){
    var textoIntroduccion = mensajes.texto_introduccion.replace('X1',curso.id).replace('X2',curso.nombre);
    var textoValor =  mensajes.texto_valor.replace('X3',curso.valor);
    var textoDuracion=  mensajes.texto_duracion.replace('X4',curso.duracion);
    return textoIntroduccion + textoValor + textoDuracion;
}

function mostrarCurso(curso, tiempo){
    setTimeout(function(){
        mostrarPorConsola(obtenerDatosCurso(curso));
    },tiempo);
}

function mostrarCursos(cursosIn) {
    if(cursosIn.length> 0 ){
        var tiempoInicial = 2000;
        cursosIn.forEach(curso => {
            mostrarCurso(curso,tiempoInicial);
            tiempoInicial+=2000;
        }); 
    }else{
        mostrarPorConsola(mensajes.ERROR_NO_CURSOS);
    }
}

function encontrarCursoPorId(curso){
    return curso.id==yargs.i;
}

function guardarRegistro(dato_curso, datos_entrada, nombre_archivo, mensaje_exito_registro){
    var info_matricula = mensajes.texto_matricula.replace('X1',datos_entrada.n).replace('X2', datos_entrada.x) + obtenerDatosCurso(dato_curso);
    fs.writeFile(nombre_archivo, info_matricula, (err)=>{ if(err) throw (err); mostrarPorConsola(mensaje_exito_registro); });
}

function validarExistenciaComando(argv){
    let isValido = false;
    if(typeof(argv.i) != "undefined" && typeof(argv.n) != "undefined" && typeof(argv.x)){
        isValido  = true;
    }
    return isValido;
}

function validarExistenciaCurso(curso){
    let existeCurso = false;
    if (typeof(curso) != "undefined"){
        existeCurso = true;
    }
    return existeCurso;
}

function inicio(cursos, argv, nombre_archivo, mensaje_exito_registro){
    if(validarExistenciaComando(argv)){
        var curso = cursos.find(encontrarCursoPorId);
        if (validarExistenciaCurso(curso)){
            guardarRegistro(curso,argv,nombre_archivo,mensaje_exito_registro);
        }else{
            mostrarPorConsola(mensajes.ERROR_NO_CURSO);
            mostrarCursos(cursos);
        }
    }else{
        mostrarCursos(cursos);
    }
}

inicio(cursos,yargs,mensajes.nombre_archivo,mensajes.mensaje_exito_registro);


