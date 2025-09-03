function validaProc() {
    //Declarando a variavél controladora i
    let i;
    //Declaradndo Vetor
    let num = [];
    //Alimentando o vetor com dados
    for (i = 0; i < 10; i++) {
        num[i] = i * i;
    }

    //Ordenando o vetor
    for (i = 0; i < 10; i++) {
        if(i % 2 == 1){
            console.log(" Valor: " + num[i] + " é impar");
        }
    }
    
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