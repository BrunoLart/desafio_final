function validaProc() {
    // Obtém o elemento div onde mostraremos o resultado
    const resultadoDiv = document.getElementById('resultado');
    
    let matriz = [];
    let linhas = 3;
    let colunas = 3;
    let matrizHtml = '';

    // Cria a matriz e obtém os valores dos inputs
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            let valor = document.getElementById(`elemento${i}${j}`).value;
            matriz[i][j] = parseInt(valor);
        }
    }

    // Obtém o multiplicador
    let multiplicador = parseInt(document.getElementById('multiplicador').value);

    // Cria a string HTML para a matriz original
    matrizHtml = '<p><strong>Matriz Original:</strong></p>';
    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            matrizHtml += matriz[i][j] + '&nbsp;&nbsp;';
        }
        matrizHtml += '<br>';
    }

    // Adiciona a matriz multiplicada
    matrizHtml += '<p><strong>Matriz Multiplicada por ' + multiplicador + ':</strong></p>';
    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            matrizHtml += (matriz[i][j] * multiplicador) + '&nbsp;&nbsp;';
        }
        matrizHtml += '<br>';
    }

    // Mostra o resultado
    resultadoDiv.innerHTML = matrizHtml;

    return false;
}