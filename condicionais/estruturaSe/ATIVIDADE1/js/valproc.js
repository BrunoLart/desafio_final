function procFormulario() {

    if (document.frmnotas.txtnum1.value == "") {

        alert("Preencha o campo Nota 1");
        document.frmnotas.txtnum1.focus();
        return false;

        }else if (document.frmnotas.txtnum2.value == "") {

            alert("Preencha o campo Nota 2");
            document.frmnotas.txtnum2.focus();
            return false;

            }else if(document.frmnotas.txtnum3.value == ""){

                alert("Preencha o campo Nota 3");
                document.frmnotas.txtnum3.focus();
                return false;

            }else{

                //Processamento do programa...
                let nota1 = parseFloat(document.getElementById('num1').value);
                let nota2 = parseFloat(document.getElementById('num2').value);
                let nota3 = parseFloat(document.getElementById('num3').value);
                let media = (nota1+nota2+nota3)/3
                if (media >= 7){
                    alert("Você está APROVADO | sua média : " + media.toFixed(2));
                }else if (media >= 5 && media <= 6.9){
                    alert("Você está em RECUPERAÇÃO | sua média : " + media.toFixed(2));
                }else{
                    alert("Você está REPROVADO | sua média : " + media.toFixed(2));
                }
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