function validaProc(){
    let matriz=[];
    let linhas=2;
    let colunas=3;

    //Alimentar a matriz

    for(i = 0; i < linhas; i++){
        matriz[i] = [];
        for(j = 0; j < colunas; j++){
            matriz[i][j] = parseInt(prompt("Digite o valor da linha " + i + " e coluna " + j + ":"));
        }
    }

    //Imprimindo os dados da matriz
    for(i = 0; i < linhas; i++){
        for(j = 0; j < colunas; j++){
            document.write(matriz[i][j] + "&nbsp&nbsp");
        }
        document.write("<br>");
    }
    return false;
    
    
}