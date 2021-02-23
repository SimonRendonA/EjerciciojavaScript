

let listado;
let detalle;


var XMLHttpRequest=  require("xmlhttprequest").XMLHttpRequest;


let solicitar= function(url){
     return new Promise((resolve, reject) =>{
        let req =  new XMLHttpRequest();
        
        req.open('GET', url);
        req.onload = function(){
            if(req.status == 200){
            resolve(JSON.parse(req.response));
            } else{
                reject("Error "+req.status);
            
            }
        };
        req.send();
    });
};
listado=solicitar('https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json')
 listado.then(( listaProductos ) =>{
     
     detalle = solicitar('https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json');
     detalle.then((detalleProductos) => {
        let numProductos = listaProductos.length;
        let array = new Array(numProductos).fill(0);
        detalleProductos.forEach(element => {
            array[parseInt (element.idproducto) - 1] += parseInt(item.cantidad)
        });
        let maximo= 0;
        let indice=-1;
        for(let i=0; i<array.length; i++){
            if(array>maximo){
                maximo= array[i];
                indice=i;
            }
        }
         console.log(
             "Producto: "+ listaProductos[indice].nombreProducto + " "+ maximo+" veces."
         )
    }).catch((error)=>{console.log(error)});
    
 }).catch((error)=>{console.log(error)});

