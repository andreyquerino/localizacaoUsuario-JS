# Detectando-localizacao-website
JavaScript simples para detectar a localização dos visitas de um website

API
```js
var request = new XMLHttpRequest();
```

Utilizando a API XMLHttpRequest(); é possível enviar requisições HTTP ou HTTPS diretamente para um servidor web e carregar os dados de resposta do servidor diretamente de volta ao script.
<br />
Próximo passo é usar o método GET para poder pegar as informações do arquivo json do site https://wtfismyip.com/

![Captura de tela 2021-12-30 200804](https://user-images.githubusercontent.com/88719652/147795488-9509836c-e351-4f43-9484-ec81b26aae70.png)

```js
request.open("GET", "https://wtfismyip.com/json", !0),
```

Por fim pegando a informação da linha que queremos através do this.status e atribuindo a class "cidade".

```js
200 <= this.status && this.status < 400 && ((e = JSON.parse(this.response).YourFuckingLocation.replace(/\,.+/g, "$'")), (document.getElementById("cidade").innerHTML = y));
```

![Captura de tela 2021-12-30 201315](https://user-images.githubusercontent.com/88719652/147795494-1f333f90-5ed7-4957-a6e4-73c408d536e5.png)

