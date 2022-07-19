import chalk from 'chalk'; 
import fs from 'fs' ;
import { url } from 'inspector';
import { stringify } from 'querystring';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);


function extraiLinks (texto){
  //   const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const regex = /(Feature:.*?[A-z]+$)|(Scenario:.*?[A-z]+$)|(Given\s.*[A-z]?)+$|(When\s.*[A-z]?)+$|(Then\s.*[A-z]?)+$|(And\s.*[A-z]?)+$/gm
    const arrayResultados = []
    let temp;
    while((temp = regex.exec(texto)) !== null ){
        arrayResultados.push(temp[0])
    }
    return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
}

function tratarErro(err){
    throw new Error(chalk.red(err.code , 'Não tem arquivo no diretório'))
}

async function pegaArquivo(path) {
    const enconding = 'uft-8';
    try {
    const texto = await fs.promises.readFile(path,stringify(enconding))
    return extraiLinks(texto)
    } catch(err){
        tratarErro(err)
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }
}

async function pegarArquivo(caminho) {
    const caminhoAbsoluto = path.join("__dirname",'..', caminho);
    console.log('caminhoAbsoluto:' + caminhoAbsoluto)
    const encoding = 'utf-8';
    try {
      const arquivos = await fs.promises.readdir(caminhoAbsoluto, { encoding });
      console.log('arquivos:' + arquivos)
      const result = await Promise.all(arquivos.map(async (arquivo) => {
        const localArquivo = `${caminhoAbsoluto}/${arquivo}`;
        const texto = await fs.promises.readFile(localArquivo, encoding);
        return extraiLinks(texto);
      }));
      return result;
    } catch (erro) {
      return tratarErro(erro);
    }
   }
 
 export default pegarArquivo;

 
