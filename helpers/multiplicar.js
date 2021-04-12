const fs = require('fs');
const colors = require('colors')
let salida = '';
let nombreArchivo = ' ';
const generarTabla = async(numero = 5, listar = false, hasta = 10) => { //tengo que usar el "ASYNC" para que ande el try y catch
    console.clear();

    
    for (i = 0; i <= hasta; i++) {
        const numeroN = numero * i;
        salida += (`${numero}`+ '  x  ' + `${i} = ${numeroN}\n`);
    }
    nombreArchivo = `tabla-${numero}.txt`;
    try { 
       
        fs.writeFileSync('./salida/'+nombreArchivo,salida); 
    } catch (e){ 
        throw e; 
    }
    if(listar){
        console.log('======================='.green);
        console.log('   Tabla del: ', numero);
        console.log('======================='.blue);


        console.log(salida);
    }
   
    return nombreArchivo;
}

module.exports = {
    generarTabla
}
