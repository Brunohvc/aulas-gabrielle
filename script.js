


// +
// - 
// /
// *


// = // atribuir valor


// == // comparação de valor
// === // comparação de valor, comparação de tipo
// <  // menor que
// <= // menor ou igual
// > // maior que
// >= // maior ou igual

// ! // negação


function somar() {

  const valueInput1 = document.getElementById('numero1').value;
  const valueInput2 = document.getElementById('numero2').value;

  const numero1 = Number(valueInput1);
  const numero2 = Number(valueInput2);

  const total = numero1 + numero2;

  const elementoResultado = document.getElementById('resultado');

  elementoResultado.innerHTML = 'Resultado: ' + total; // Concatenação
}

function toggleBackground() {
  const elementoResultado = document.getElementById('resultado');

  elementoResultado.classList.toggle('fundoVermelho');
}

const elemento = document.createElement('span');
elemento.style = 'width: 100px; height: 100px; background-color: blue; position: absolute; top: 0; left: 0;';
document.body.appendChild(elemento);

function moverQuadrado() {
  const posicaoAtual = Number(elemento.style.left.replace('px', ''));

  if (posicaoAtual < 1000) {
    const novaPosicao = posicaoAtual + 10;
    elemento.style.left = novaPosicao + 'px';

    setTimeout(moverQuadrado, 1000);
  }
}










async function funcaoAsincrona() {
  const promessa = new Promise(function (resolver, rejeitar) {

    setTimeout(async () => {
      console.log('Executando a função assincrona');

      const resultadoRequisicao = await fetch('https://fake-github.herokuapp.com/api/search/brunohvc');

      resolver(resultadoRequisicao);

    }, 2000);

  });


  return promessa;
}




function executarFetch(nomeUsuario) {

  // fetch -> Função nativa do JavaScript, para fazer requisições HTTP
  // primeiro parametro -> URL
  // segundo parametro -> objeto com as configurações da requisição
  // {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     nome: 'Bruno',
  //     idade: '23'
  //   })
  // }
  // retorna uma promessa

  const url = 'https://fake-github.herokuapp.com/api/search/' + nomeUsuario;
  const googleUrl = 'https://www.google.com.br/search?q=livro';


  // Tipos de dados de uma requisição:
  // 1 -> QUERY STRING -> GET
  // 2 -> BODY         -> POST, PUT
  // 3 -> PARAMETERS   -> DELETE

  const sendData = {
    nome: 'Bruno',
    idade: 23
  };

  // Padrão RESTFULL
  // GET -> Buscar
  // POST -> Criar
  // PUT -> Atualizar
  // DELETE -> Deletar

  // Códigos RESTFULL
  // 102 -> Processando
  // 200 -> OK
  // 201 -> Created
  // 204 -> No Content
  // 301 -> Redirecionamento
  // 400 -> Bad Request
  // 404 -> Not Found
  // 500 -> Internal Server Error


  const config = {
    method: 'GET', // GET, POST, PUT, DELETE, OPTIONS -> Padrão é GET
    headers: {
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify(sendData)
  };




  return fetch(url, config)
    .then(response => response.json())
    .catch(error => console.log(error));

}


function buscarDadosGithub(nomeUsuario) {
  executarFetch(nomeUsuario).then(resultado => {
    console.log('login: ', resultado.login);
    console.log('name: ', resultado.name);
    console.log('avatar_url: ', resultado.avatar_url);
  })
}


