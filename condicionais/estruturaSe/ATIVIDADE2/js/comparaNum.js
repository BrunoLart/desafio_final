function procFormularioValores() {
    if (document.frmnumeros.txtnum1.value == "") {
        alert("Preencha o campo Número 1");
        document.frmnumeros.txtnum1.focus();
        return false;
    } else if (document.frmnumeros.txtnum2.value == "") {
        alert("Preencha o campo Número 2");
        document.frmnumeros.txtnum2.focus();
        return false;
    } else {
        let num1 = parseInt(document.getElementById('num1').value);
        let num2 = parseInt(document.getElementById('num2').value);
        if (num1 == num2) {
            alert("Os números inseridos são iguais!");
        } else if (num1 < num2) {
            alert("O Número 2 é maior!");
        } else {
            alert("O Número 1 é maior!");
        }
    }
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