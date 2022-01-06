# localizacaoUsuario-JS


Pequeno código em Javascript para detectar a localização dos visitantes de um website.

Primeiro passo é pegar o resultado da localização através de uma requisição do site https://wtfismyip.com/. 

![Captura de tela 2021-12-30 200804](https://user-images.githubusercontent.com/88719652/147795488-9509836c-e351-4f43-9484-ec81b26aae70.png)

Depois usando o **async** e **await** podemos pegar requisição de forma assíncrona com a função **fetch()**

```js
async function localizacaoUsuario(){
    let requisicao = await fetch('https://wtfismyip.com/json');
}
```

Próximo passo é usar a função json para transformar a requição em **JSON** para poder montar essas informações do jeito que quiser.

```js
let json = requisicao.json();
```

![Captura de tela 2022-01-06 184500](https://user-images.githubusercontent.com/88719652/148434545-8c63fe8f-153e-4e7c-a161-750c40ce40a3.png)


Por fim, podemos usar a função **split()** para poder dividir a string e pegar só à cidade ou o estado.


![code](https://user-images.githubusercontent.com/88719652/148434596-88c99f50-1426-4cc7-b5a6-916153973b62.png)

![Captura de tela 2022-01-06 184610](https://user-images.githubusercontent.com/88719652/148434657-0cb8f5d1-afbd-4916-9993-edeac9a62d1b.png)

link: https://andreyquerino.com/projects/localizandoUsuario/
