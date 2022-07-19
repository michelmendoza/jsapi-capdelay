#!/usr/bin/env node
import pegaArquivo from './index.js'; 
import chalk from 'chalk'; 
import pegarArquivo from './index.js';
import validaURLs from './http-validacao.js';

const caminho = process.argv

 
async function processaTexto(caminhoDoArquivo){

    const resultado = await pegarArquivo(caminhoDoArquivo[2])
    
    if (caminho[3] === 'validar'){
        console.log(chalk.yellow('links validados') ,await validaURLs(resultado[2]))
    } else {
        
        console.log(chalk.yellow('lista de links') , resultado)
    }


   

}

processaTexto(caminho);


 