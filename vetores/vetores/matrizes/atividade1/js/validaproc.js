function validaProc(){
    let matriz=[];
    let linhas=3;
    let colunas=3;

    //Alimentar a matriz

    for(i = 0; i < linhas; i++){
        matriz[i] = [];
        for(j = 0; j < colunas; j++){
            matriz[i][j] = parseInt(prompt("Digite o valor da linha " + i + " e coluna " + j + ":"));
        }
    }
    multiplicador = parseInt(prompt("Digite o valor do multiplicador:"));
    //Imprimindo os dados da matriz
    document.write("Matriz Original:<br>");
    for(i = 0; i < linhas; i++){
        for(j = 0; j < colunas; j++){
            document.write(matriz[i][j] + "&nbsp&nbsp");
        }
        document.write("<br>");
    }
    document.write("<br>");
    document.write("<br>");
    document.write("Matriz Multiplicada:<br>");
    for(i = 0; i < linhas; i++){
        for(j = 0; j < colunas; j++){
            document.write(matriz[i][j]*multiplicador + "&nbsp&nbsp");
        }
        document.write("<br>");
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