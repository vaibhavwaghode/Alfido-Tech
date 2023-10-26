let screen= document.getElementById('screen');
 buttons= document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText= e.target.innerText;
        console.log("button text", buttonText);

        if(buttonText=='X'){
            buttonText= '*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if (buttonText=='C'){
            screenValue= "";
            screen.value= screenValue;
        }
        else if(buttonText=='='){
            screen.value= eval(screenValue);
        }

        else if(buttonText=="Back"){
            screen.value=screenValue.substr(0,screenValue.length-1);
            screenValue=screen.value;
        }
        
        else{
            screenValue+=buttonText;
            screen.value= screenValue;
        }
    })
}