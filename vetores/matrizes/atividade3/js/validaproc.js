function validaProc() {
    let matriz = [];
    const linhas = 2;
    const colunas = 2;
    let resultado = "Matriz 2x2 (soma dos índices):<br><br>";

    // Alimentar a matriz com a soma dos índices
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = i + j;
            resultado += matriz[i][j] + "&nbsp;&nbsp;&nbsp;";
        }
        resultado += "<br>";
    }

    // Exibir o resultado na div designada
    const divResult = document.getElementById("divResult");
    if (divResult) {
        divResult.innerHTML = resultado;
    } else {
        alert("Elemento divResult não encontrado!");
    }

    return false;
}