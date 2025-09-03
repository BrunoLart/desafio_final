function validaProc(){
    let i = 1;
    let result = 0;
    while(i <= 3){
        num = parseInt(prompt("Insira o valor :"));
        if(num < 0){
            alert("Número inválido, tente novamente.");
        }else{
            if(num % 5 == 0){
                result +=   num;
            }
            i++
        }
        
    }
    console.log("A soma dos números é: " + result);
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