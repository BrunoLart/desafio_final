function validaProc(){
    let opcaoMenu = 0;
    while(opcaoMenu == 0){
        let Valor1, Valor2, Valor3;
        Valor1 = parseInt(prompt("Insira o 1° valor :"));
        Valor2 = parseInt(prompt("Insira o 2° valor :"));
        Valor3 = parseInt(prompt("Insira o 3° valor :"));
    
        let Result = Valor1 + Valor2 + Valor3;
        console.log("O resultado final é : " + Result);

        opcaoMenu = parseInt(prompt("Deseja continuar ? 0 - Sim | 1 - Não"));

   }

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