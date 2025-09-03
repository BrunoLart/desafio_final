function validaProc(){
    if(document.getElementById('tabuada').value==""){
        alert("Preencha o campo");
        document.frmnumint.focus();
        return false;
    }else{
        let tabuada=parseInt(document.getElementById('tabuada').value)
        for(let i = 1; i < 11; i++){
            let result = tabuada * i;
            console.log(tabuada+"x"+ i + "="+result);
        }
        return false;
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