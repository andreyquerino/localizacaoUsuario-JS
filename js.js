// @andreyquerino
//
// Detecção da locatização do visitante no Website

var request = new XMLHttpRequest();
request.open("GET", "https://wtfismyip.com/json", !0),
    (request.onload = function () {
        var y;
        200 <= this.status && this.status < 400 && ((e = JSON.parse(this.response).YourFuckingLocation.replace(/\,.+/g, "$'")), (document.getElementById("cidade").innerHTML = y));
    }),
    (request.onerror = function () {}),
    request.send();