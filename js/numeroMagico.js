const enviarNumero = () =>{
    const ingresarNumero = document.querySelector('input').value;
    const numeroAleatorio = Math.floor(Math.random() * 50);
    
    if(ingresarNumero === numeroAleatorio){
        alert('Felicidades adivino el numero!!! 😁');
    }
    else if(ingresarNumero > numeroAleatorio){
        alert('El numero ingresado es mayor al resultado 😐');
    }
    else{
        alert('El numero ingresado es menor al resultado 😯');
    }

}
