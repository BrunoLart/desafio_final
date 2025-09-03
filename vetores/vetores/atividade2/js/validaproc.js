function validaProc() {
    //Declarando a variavél controladora i
    let i;
    let contadoraNota = 0;
    //Declaradndo Vetor
    let num = [];
    //Alimentando o vetor com dados
    for (i = 0; i < 3; i++) {
        num[i] = parseFloat(prompt("Digite  " + (i + 1) + "º nota:"));
    }

    //Ordenando o vetor
    for (i = 0; i < 3; i++) {
        if(num[i] >= 7.5){
            contadoraNota = contadoraNota + 1;
            console.log("As notas são : " + num[i]);
        }
    }
    console.log("A quantidade de notas acima de 7.5 é: " + contadoraNota);
    return false;
}

function procFormulario(){
    if(document.getElementById('numint').value==""){
        alert("Preencha o campo Número inteiro");
        document.frmnumint.focus();
        return false;
    }else{
        let numint=parseInt(document.getElementById('numint').value)
        switch (true) {
            case(numint >= 0 && numint <= 3):
                console.log("Bebê");
                return false;
            break;
            case(numint >= 4 && numint <= 10):
                console.log("Criança");
                return false;
            break;
            case(numint >= 11 && numint <= 18):
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