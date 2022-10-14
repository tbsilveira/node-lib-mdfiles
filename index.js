import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
  //console.log(erro);
  throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
}

// *** async/await

async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(chalk.yellow(texto));
  } catch (erro) {
    trataErro(erro);
  } finally {
    console.log(chalk.green('Operação concluída'));
  }
}


//  *** promises with .then()

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'utf-8';
//   fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.orange(texto)))
//     .catch(trataErro)
// }


pegaArquivo('./arquivos/texto.md');
setInterval(() => pegaArquivo('./arquivos/'), 3000);