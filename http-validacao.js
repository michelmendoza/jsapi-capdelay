import fetch from "node-fetch";
import chalk from 'chalk'; 

async function checkStatus(arrayURLs){
    try{
        // promisses async await
        const arrayStatus = await Promise
        .all(arrayURLs
            .map(async url => {
                const res = await fetch(url)
                return `${res.status} - ${res.statusText}`;
        }))
        return arrayStatus;
        
    } catch (erro) {
        manejaErros(erro)
    }
}


function geraArrayDeURLs (arrayLinks){
//Loop para cada {chave : valor}
//    Object.values(objeto)
    return arrayLinks
    .map(ObjectLink => Object
        .values(ObjectLink).join())
}

async function validaURLs (arrayLinks){
    const links = geraArrayDeURLs(arrayLinks);
    const statusLinks = await checkStatus(links)
    console.log(arrayLinks, statusLinks)
    // spread operator
    const resultados = arrayLinks.map((object, index)  => ({ ...object, status: statusLinks[index] }))
    return resultados;
}

function manejaErros(erro){
    throw new Error(chalk.red(erro.message))

}


export default validaURLs; 
