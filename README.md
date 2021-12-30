# Detectando-localizacao-website
JavaScript simples para detectar a localização dos visitas de um website

API
```js
var request = new XMLHttpRequest();
```

Utilizando a API XMLHttpRequest(); é possível enviar requisições HTTP ou HTTPS diretamente para um servidor web e carregar os dados de resposta do servidor diretamente de volta ao script.
< br>
Próximo passo é usar o método GET para poder pegar as informações do arquivo json do site https://wtfismyip.com/

```js
request.open("GET", "https://wtfismyip.com/json", !0),
```

Por fim pegando a informação da linha que queremos através do this.status e atribuindo a class "cidade".

```js
200 <= this.status && this.status < 400 && ((e = JSON.parse(this.response).YourFuckingLocation.replace(/\,.+/g, "$'")), (document.getElementById("cidade").innerHTML = y));
```

