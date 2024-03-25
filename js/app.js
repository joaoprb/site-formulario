var valoresArmazenados = [];

function armazenarValores() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var email = document.getElementById("email").value;
    var endereco = document.getElementById("endereco").value;

    valoresArmazenados.push({
        nome: nome,
        idade: idade,
        email: email,
        endereco: endereco
    })

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("email").value = "";
    document.getElementById("endereco").value = "";

    imprimirValores();

}

function imprimirValores() {
    var objDivValores = document.getElementById("valores");
    objDivValores.innerHTML = "";

    valoresArmazenados.forEach(function(item, index) {
        objDivValores.innerHTML += "Dados do cadastrante " + (index + 1) + "<br>";
        objDivValores.innerHTML += "Nome: " + item.nome + "<br>";
        objDivValores.innerHTML += "Idade: " + item.idade + "<br>";
        objDivValores.innerHTML += "Email: " + item.email + "<br>";
        objDivValores.innerHTML += "Endereço: " + item.endereco + "<br>";
    });

}