var resp = window.document.getElementById('saida');

// Lembre-se que toda variável declarada aqui fora possui escopo global.
// Veja mais sobre escopo no seu material em PDF,

function acao1() {
    resp.innerHTML += "<p>Clicou no primeiro botão</p>"

    var a = prompt("Informe um número");
    if (a != "6") {
        resp.innerHTML += "<h1>Diferente de 6</h1>";
    } else {
        resp.innerHTML += "<h1>Igual a 6</h1>";
    }
}

function acao2() {
    resp.innerHTML += "<p>Clicou no segundo botão</p>"

    switch(prompt("Como está o tempo? Use chuvoso, ensolarado ou nublado.")) {
        case "chuvoso":
            resp.innerHTML += "<h1>Lembre-se de trazer guarda-chuva</h1>";
            break;
        case "ensolarado":
            resp.innerHTML += "<h1>Use óculos de sol</h1>";
            break;
        case "nublado":
            resp.innerHTML += "<h1>O tempo está nublado</h1>";
            break;
        default:
            resp.innerHTML += "<h1>Opção inválida</h1>";