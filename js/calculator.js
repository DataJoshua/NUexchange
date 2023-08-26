
let ruble_icon = $(".ruble-icon");
ruble_icon.hide()

let valor_actual_ruble = document.querySelector(".ruble-value");
let btn = $(".calculator-btn");
let valor_rub = $(".output-ruble");
let valor_usd = document.querySelector(".input-ruble");


btn.on("click", ()=>{

    let result = parseInt(valor_actual_ruble.innerHTML) * parseInt(valor_usd.value); 

    valor_rub.text("Obtendras: " + result);
    ruble_icon.show();
});
