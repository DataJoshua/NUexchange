$(document).ready(()=>{
    
    let valor_actual_ruble = document.querySelector(".ruble-value");
    let date = $(".date");
    let btn = $(".calculator-btn");
    let valor_usd = document.querySelector(".input-ruble");
    let valor_rub = $(".output-ruble");


    
    //API para saber el valor de rublos
    var myHeaders = new Headers();
    myHeaders.append("apikey", "8RNa1SAourpeaawdUd7WcZnncUMp85wl");

    var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };

/**
    fetch("https://api.apilayer.com/exchangerates_data/convert?to=RUB&from=USD&amount=1", requestOptions)
    .then(response => response.json())
    .then(result => {
        let rate = result.result;

        valor_actual_ruble.innerText = parseInt(rate);
        return result;
    }    
    )
    .catch(error => console.log('error', error)); 

   */ 
    
    valor_actual_ruble.innerHTML = 56;
    
    let btn_cambio = document.querySelector(".cambio-btn");

    btn_cambio.addEventListener("click", ()=>{

        window.location.href =  "https://nuexchange.netlify.app/contact.html";
    });
 
    let ruble_icon = $(".ruble-icon");

    btn.on("click", ()=>{

        let result = parseInt(valor_actual_ruble.innerHTML) * parseInt(valor_usd.value); 
   
        valor_rub.text("Obtendras: " + result);

    });

    ruble_icon.hide()

  


    // WP logo


    let fixed_ws = $(".fixed-ws");
    let fixed_div = $(".fixed-div");
    let fixed_img = $(".fixed-ws img");
    let fixed_p = $(".fixed-div p");
    
    fixed_div.hide();
    fixed_p.css("color", "#ccc");


    fixed_img.on("mouseover", ()=>{
        fixed_div.show("fast", ()=>{
            fixed_p.css("color", "#000");
        });
      
        
    });

    fixed_img.on("mouseout", ()=>{
        fixed_p.css("color", "#ccc");
        fixed_div.hide("fast");
        
    });


});

 
