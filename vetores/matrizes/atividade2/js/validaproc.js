function validaProc(){
    let matriz = [];
    let linhas = 2;
    let colunas = 2;

    for (i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (j = 0; j < colunas; j++) {
            matriz[i][j] = parseInt(prompt("Digite o valor da linha " + i + " e coluna " + j + ":"));
        }
    }

    
    let linhaEscolhida = parseInt(prompt("Digite o número da linha que deseja somar (0 ou 1):"));

    
    let soma = 0;
    for (j = 0; j < colunas; j++) {
        soma = soma + matriz[linhaEscolhida][j];
    }

    document.write("Matriz:<br>");
    for (i = 0; i < linhas; i++) {
        for (j = 0; j < colunas; j++) {
            document.write(matriz[i][j] + "&nbsp&nbsp");
        }
        document.write("<br>");
    }

    document.write("<br>");
    document.write("Soma da linha " + linhaEscolhida + " = " + soma);

    return false;
}