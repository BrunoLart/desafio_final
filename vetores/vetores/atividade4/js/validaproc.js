function validaProc() {
    let i, j;
    let num = [];

    // Alimentando o vetor com dados
    for (i = 0; i < 10; i++) {
        num[i] = parseInt(prompt("Digite o " + (i + 1) + "º número: "));
    }

    // Exibindo apenas os elementos que estão em posições ímpares
    for (j = 0; j < 10; j++) {
        if (j % 2 !== 0) {
            console.log("Posição Ímpar: " + j + " | Valor: " + num[j]);
        }
    }

    return false;
}

function procFormulario() {
    if (document.getElementById('numint').value == "") {
        alert("Preencha o campo Número inteiro");
        document.frmnumint.focus();
        return false;
    } else {
        let numint = parseInt(document.getElementById('numint').value)
        switch (true) {
            case (numint >= 0 && numint <= 3):
                console.log("Bebê");
                return false;
                break;
            case (numint >= 4 && numint <= 10):
                console.log("Criança");
                return false;
                break;
            case (numint >= 11 && numint <= 18):
                console.log("Adolescente");
                return false;
                break;
            default:
                console.log("Adulto");
                return false;
                break;
        }
    }
}
