$(document).ready(()=>{
    let valor_usd = document.querySelector(".input-ruble");
    let valor_rub = $(".output-ruble");
    let btn = $(".calculator-btn");
    let valor_actual_ruble = document.querySelector(".ruble-value");
    let ruble_icon = $(".ruble-icon");
    

    let date = document.querySelector(".date");
    
    
    ruble_icon.hide();


    btn.on("click", ()=>{
        let input = parseInt(valor_usd.value);
        let valor_ruble = parseInt(valor_actual_ruble.innerText);
        let answear = input*valor_ruble;
        if(isNaN(answear)){
            valor_rub.text("Ingresa un número");
            valor_usd.value = " ";
            ruble_icon.hide(); 
        }
        else{
            valor_rub.text("Obtendras: " + answear);
            ruble_icon.show(); 
        }
       
         
    });


    //API para saber el valor de rublos

    var requestURL = 'https://api.exchangerate.host/latest?base=USD';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        let response = request.response;

        valor_actual_ruble.innerText = parseInt(response.rates['RUB']) + 2;
        date.innerText = response.date;
    }

});