//const pegarArquivo = require('../index')
import pegarArquivo from '../index.js';
 
const arrayResultados = [[
    {
    "Implementation notes": "https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes",      
  },
    ]]


describe('pegarArquivo::',() => {
  it('deve ser uma funcao', () => {
    expect(typeof pegarArquivo).toBe('function');
  });
  it('deve retornar array com resultados', async () => {
    const resultados = await pegarArquivo('./test/arquivos/com_link')
    expect(resultados).toEqual(arrayResultados)
  });
  it('deve retornar "não tem links"', async () => {
    const resultados = await pegarArquivo('./test/arquivos/sem_link')
    expect(resultados).toEqual(["não há links"])
  });

  it('deve lançar um erro na falta de arquivo', async () => {
    await expect(pegarArquivo('./test/arquivos/')).rejects.toThrow(/EISDIR Não tem arquivo no diretório/)
  })

  it('deve resolver a função com sucesso', async () => {
    await expect(pegarArquivo('./test/arquivos/com_link')).resolves.toEqual(arrayResultados)
  })
})

 