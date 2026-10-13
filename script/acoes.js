var resp = window.document.getElementById('saida');

// Lembre-se que toda variável declarada aqui fora possui escopo global.
// Veja mais sobre escopo no seu material em PDF

function acao1(){
    resp.innerHTML += '<p>Clicou no primeiro botão</p>'

    var a = prompt("Informe um número");
    if (a != "6") {
        resp.innerHTML += '<h1>Diferente de 6</h1>';
    } else {
         resp.innerHTML += '<h1>Igual a 6</h1>';

    }
}

function acao2() {
    resp.innerHTML += '<p>Clicou no segundo botão</p>';

    switch(prompt("Como está o tempo? use o chuvoso, ensolarado ou nublado")) {
        //switch("chuvoso") {
        case "chuvoso":
            resp.innerHTML += '<h1>Lembresse de trazer guarda-chuva!</h1>';
            break;
        case "ensolarado":
            resp.innerHTML += '<h1>Vista roupas leves!</h1>';
            break;
        case "nublado":
            resp.innerHTML += '<h1>Vá lá fora!!!</h1>';
            break;
        default:
            resp.innerHTML += '<h1>Tempo desconhecido</h1>';
            break;        

    
    }
}

function acao3() {
    resp.innerHTML += '<p>Clicou no terceiro botão</p>'
    
    let numero = prompt ("Informe um número");
    for (let i = 0; i < numero; i++) {
        resp.innerHTML += '<p>Paragrafo ' + i + '</p>'
    }
}

function acao4() {
    let numero = prompt ("Infome um número");
    while (numero <= 10){
        resp.innerHTML += 'Linha'+numero+'<br/>';
        numero++;
    }
}

function acao5() {
    resp.innerHTML += '<p>Clicou no quinto botão</p>';
    
    let var1 = prompt("Informe um número");
    do {
        resp.innerHTML += 'Linha'+var1+'<br/>';
        var1++;
    } while (var1 <=10);
}