

function calculate(){
    let calc = parseInt(basic.value) + parseInt(benefits.value); 
    if(calc <= 24000){
        value = calc*0.1;
    }else if (calc > 24000 && calc<=32333){
        value = 24000*0.1 + (calc-24000)*0.25;
    }else if(calc > 32333){
        value = calc*0.3
    }

    console.log(value)
    net.innerText = `${value}`
}

function nssf(){
    let calc = parseInt(basic.value) + parseInt(benefits.value);
    if(calc <= 8000){
        withnssf = num*0.05
    }else if(calc > 8000){
        withnssf = num - 400
    }

    console.log(withnssf)
    net.innerText = `${withnssf}`
}