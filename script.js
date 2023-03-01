var button = document.getElementsByClassName('button');
var display = document.getElementById('display-text');
var displayEquation = document.getElementById('display-equation');
var operand1 = null;
var operand2 = null;
var operator = null;
var result = null;
for(var i=0 ; i<button.length ; i++){
    button[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');
        if(value == '+' || value == '-' || value == '*' || value == "/"){
            operand1 = display.textContent;
            if(operand1[0] == '-'){
                displayEquation.innerText = '('+ operand1+')';
            }
            if(!displayEquation.textContent == ''){
                displayEquation.innerText += value;
            }
            operator = value;
            display.innerText = '';
        }
        else if(value == '='){
            operand2 = display.textContent;
            if(operand1[0] == '-' && operand2[0] == '-'){
                displayEquation.innerText = '('+ operand1+')'+ operator + '('+ operand2+')';
            }
            else if(operand2[0] == '-'){
                displayEquation.innerText = operand1 + operator + '('+ operand2+')';
            }
            result = eval(operand1 + operator + operand2);
            display.innerText = result;
        }
        else if(value == 'AC'){
            display.innerText = '';
            displayEquation.innerText = '';
            operand1 = null;
            operand2 = null;
            operator = null;
        }
        else if(value == '%'){
            result = display.textContent;
            result = eval(result / 100);
            display.innerText = result;
            displayEquation.innerText = result;
        }
        else if(value == '+/-'){
            var value1 = display.textContent;
            if(value1.length>0 && value1[0] == '-'){
                display.innerText = value1.slice(1);
            }else{
                display.innerText = '-' + display.innerText;
            }
        }
        else{
            display.innerText += value;
            displayEquation.innerText += value;
        }
    });
}
