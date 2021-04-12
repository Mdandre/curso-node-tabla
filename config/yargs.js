const argv = require('yargs')
    .option('v', {
        alias: 'valor',
        type: 'number',
        demandOption: true,
        describe:'Es la base de la tabla de multiplicar, el valor de la tabla'
    })
    .option(
        'l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe:'Muestra la tabla en consola',
    }
    )
    .option(
        'h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe:'Valor máximo a multiplicar',
    }
    )
    .check((argv, options) => {
        if (isNaN(argv.v)) {
            throw 'El valor tiene que ser un número'
        }
        return true;
    })
    .argv;


    module.exports= argv;