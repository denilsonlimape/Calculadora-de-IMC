const resultado = document.getElementById('resultado');

function calForm(){

    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    

    if(!isNaN(altura)&&!isNaN(peso) && altura >0 && peso >0){
        
       const valorIMC = (peso / (altura * altura)).toFixed(2);
       let classificação ='';
       if(valorIMC <18.5){
        classificação = 'Abaixo do Peso!'
        resultado.classList.add('abaixo-peso');
       }
       else if(valorIMC <25){
        classificação = 'Peso ideal. PARABÉNS!';
        resultado.classList.add('peso-ideal');
       }
       else if(valorIMC <30 ){
        classificação = 'Levemente acima do peso!';
        resultado.classList.add('acima-do-peso');
       }
       else if(valorIMC <35){
        classificação = 'Obesidade grau I!';
        resultado.classList.add('obesidade-grau1');
       }
       else if(valorIMC <40){
        classificação = 'Obesidade grau II!';
        resultado.classList.add('obesidade-grau2');
       }
       else{
        classificação = 'Obesidade grau III. CUIDADO!!!';
        resultado.classList.add('obesidade-grau3');
       }


       resultado.innerHTML =`Seu IMC é ${valorIMC} e você está no ${classificação}`;
        
    }
    else {resultado.innerHTML= "Favor, preencha todos os campos!*";
        resultado.classList.add("preenc-os-campos");

        setTimeout(function(){
            document.getElementById("resultado").innerHTML= "";   
        
    }, 3000);

    }
    
    }

    function limparForm(){
        document.getElementById('altura').value ='';
        document.getElementById('peso').value ='';
        resultado.innerHTML = '';
        resultado.innerHTML = '';
    }
