let num;
let data= '';
while (num !== null) {
  num = prompt('Ingrese un numero');
  if(isNaN(Number(num))){
    alert('Ingrese numero valido')}
    else{ if(num!==null){
      data = data + num}
    }
}
console.log(data)