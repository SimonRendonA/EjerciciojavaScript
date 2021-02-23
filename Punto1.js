let  result=[];
function secret(msg, process, key){
    result=[];
    if(process==='encrypt'){
        msg.forEach(element => {
            let aux=element+key;
            result.push(aux)
        });
    }
    else{
        msg.forEach(element => {
            let aux=element-key;
            result.push(aux)
        });
    }
    console.log(result);
}
secret([1,2,3,1], 'encrypt', 1);
secret([2,3,4,2], 'decrypt',1);