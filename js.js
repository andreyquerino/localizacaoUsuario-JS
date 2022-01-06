// @andreyquerino
//
// Localização do usuário através do website

async function localizacaoUsuario(){
    let requisicao = await fetch('https://wtfismyip.com/json');
    let json = await requisicao.json();
    let localizacao = json.YourFuckingLocation.split(",");
    document.getElementById("cidade").innerHTML = localizacao[0];
}
localizacaoUsuario();
