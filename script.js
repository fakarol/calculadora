 const display = document.querySelector('#display');
 const buttons = document.querySelectorAll('button');

  buttons.forEach((item)=>{
    item.onclick=()=>{

        const botonApretado = item.innerText

        if(item.id=="clear"){
            display.innerText="";
        }else if(item.id=="backspace"){
            if (display.innerText.length === 1) {
                display.innerText = "0";
                setTimeout(()=> (display.innerText=""), 10000)
            }else{
                display.innerText= display.innerText.slice(0,-1);
            }
            
        }else if(display.innerText!="" && item.id=="equal"){
            display.innerText= eval(display.innerText)
        }else if(display.innerText == "" && item.id=="equal"){
            display.innerText= "NULL";
            setTimeout(()=> (display.innerText=""), 2000)
        }else{
            display.innerText+= item. id;
        }
    } 
})

const themeTogglerBta= document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
 
let isDark = true;
themeTogglerBta.onclick=()=>{
    calculator.classList.toggle("dark");
    themeTogglerBta.classList.toggle("active");
    isDark=!isDark;
};



