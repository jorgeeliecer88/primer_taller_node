
//Jorge Eliecer Perez Niño

let mensajes = {
    texto_introduccion : 'El curso con id X1 y nombre X2 ',
    texto_valor : 'tiene un valor de X3 pesos ',
    texto_duracion : 'y una duración de X4 horas.',
    ERROR_NO_CURSOS : '>> Los cursos no han sido cargados al sistema.',
    texto_matricula : 'El estudiante X1 con cédula nro X2 se ha matriculado en ',
    nombre_archivo : 'matricula.txt',
    mensaje_exito_registro : 'Se ha registrado el usuario, se ha creado el archivo.',
    ERROR_NO_CURSO : 'Ha ingresado un id que no corresponde a ningun curso existente.'
}

let cursos =  [
    {
        id:01,
        nombre: 'Programación',
        duracion:'60',
        valor:200000
    },
    {
        id:02,
        nombre: 'Ingles',
        duracion:'40',
        valor:250000
    },
    {
        id:03,
        nombre: 'Diseño',
        duracion:'38',
        valor:230000
    }
];

let opciones = {
    id: {
       demand: true,
       alias:'i'
     },
    nombre: {
       demand: true,
       alias:'n'
     },
     cedula: {
       demand: true,
       alias:'x'
     }
}


module.exports = { mensajes, cursos, opciones};