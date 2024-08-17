function insert(value){
    document.getElementById(`display`).value+=value;
}

function clear(){
    document.getElementById('display').value=0;
}

function backspace(){
    let display=document.getElementById(`display`);
    display.value=display.value.slice(0,-1);
}

function calculate(operation){
    let display=document.getElementById(`display`);
    try{
        if(operation){
            let value=parseFloat(display.value);
            switch(operation){
                case 'sqrt':
                    display.value=Math.sqrt(value);
                    break;
                
                case 'square':
                    display.value=Math.pow(value,2);
                    break;
                
                case 'sin':
                    display.value=Math.sin(value*(Math.PI/180));
                    break;

                case 'cos':
                    display.value=Math.cos(value*(Math.PI/180));
                    break;

                case 'tan':
                    display.value=Math.tan(value*(Math.PI/180));
            }
        }
        else{
            display.value=eval(display.value);
        }
    }
    catch(error){
        display.value=`Error`;
    }
}