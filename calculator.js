const appendNumber=(num)=>{
    let display=document.querySelector(".display");
    if(display.value==='0')
        display.value=num;
    else
        display.value+=num;
}

const appendOperator=(op)=>{
    let display=document.querySelector(".display");
    display.value+=op;
}

const clearDisplay=()=>{
    let display=document.querySelector(".display");
    display.value='';
}

const deleteDigit=()=>{
    let display=document.querySelector(".display");
    display.value=display.value.slice(0,-1); //delete the last digit
}

const calculate=()=>{
    let display=document.querySelector(".display");
    try{
        display.value=eval(display.value); //eval function evalue the string
    }
    catch(err){
        display.value='Error';
    }
}