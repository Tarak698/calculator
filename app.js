let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttontext = e.target.innerText;
        console.log(buttontext);

        if(buttontext == 'x'){
            buttontext = '*';
            screenValue += buttontext;
            screen.value = screenValue;
        }
        else if(buttontext== 'C'){
            screen.value = "";
        }
        else if(buttontext == '='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttontext;
            screen.value = screenValue;
        }
    });
}