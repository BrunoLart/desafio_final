function validaProc(){
    let multiplar = 1;
    let result;
    if(document.getElementById('tabuada').value==""){
        alert("Preencha o campo");
        document.frmnumint.txttabuada.focus();
        return false;
    }else{

        let tabuada=parseInt(document.getElementById('tabuada').value)
       do{
        result = tabuada*multiplar
        console.log("Resultado da tabuada é : "+ tabuada+"x"+multiplar+": "+ result);
        multiplar = multiplar + 1;

       }while(multiplar <= 10 )
        return false;
    }
}