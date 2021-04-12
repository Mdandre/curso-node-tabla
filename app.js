/* const { argv } = require('node:process'); */
const { boolean } = require('yargs');
const { generarTabla } = require('./helpers/multiplicar')
const argv = require('./config/yargs')


console.clear();
generarTabla(argv.v, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo + '  creado'))
    .catch(err => console.log(err))

//console.log(process.argv);
//console.log(argv);
//console.log('base : yargs', argv.valor)
//console.log(process.argv);
//const valor =7;
/*
const [,,arg3] = process.argv;
const [,valor] = arg3.split('=')
console.log(valor);
*/





