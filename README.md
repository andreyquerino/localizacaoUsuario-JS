# localizacaoUsuario-JS

Simples Javascript escrito para detectar a localização dos visitantes de um website.

Passo é pegar o resultado da localização através de uma requisição do site https://wtfismyip.com/. 

![Captura de tela 2021-12-30 200804](https://user-images.githubusercontent.com/88719652/147795488-9509836c-e351-4f43-9484-ec81b26aae70.png)

Usando async e await conseguir pegar aquisição de forma assíncrona com a função fetch() 

```js
async function localizacaoUsuario(){
    let requisicao = await fetch('https://wtfismyip.com/json');
}
```

Depois usar a função json para transformar a requição em JSON para poder montar essas informações do jeito que quiser.

```js
let json = requisicao.json();
```

![Captura de tela 2022-01-06 003816](https://user-images.githubusercontent.com/88719652/148324570-cfbb71cc-d890-41b2-9ae6-39bc07647459.png)

Por fim, podemos usar a função split() para poder dividir a string e pegar só à cidade ou o estado.

![code](https://user-images.githubusercontent.com/88719652/148324904-d5e29d61-5e36-4807-ac46-444619f63ebe.png)

![Captura de tela 2022-01-06 004401](https://user-images.githubusercontent.com/88719652/148325023-4b2858e0-511b-4f50-b558-a941ef3bfaa1.png)
