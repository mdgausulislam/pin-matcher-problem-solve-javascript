function getPin() {
    const pin = generatePin();
    const pinString = pin + '';

    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}



function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();

    const displayField = document.getElementById('display-pin');
    displayField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (events) {
    const number = events.target.innerText;
    const typeNumberField = document.getElementById('type-numbers');
    const previousNumber = typeNumberField.value;
    if (isNaN(number)) {
        if (number == 'C') {
            typeNumberField.value = '';
        } else if (number == '<') {
            const digits = previousNumber.split('');
            digits.pop();
            const remainingDigits= digits.join('');
            typeNumberField.value=remainingDigits;

        }
    } else {
        const newTypeNumber = previousNumber + number;
        typeNumberField.value = newTypeNumber;
    }
    console.log();
})


document.getElementById('verify-pin').addEventListener('click',function(){
    const displayField = document.getElementById('display-pin');
    const currentPin=displayField.value;

    const typeNumberField=document.getElementById('type-numbers');
    const typeNumber=typeNumberField.value;

    const pinSuccessMessage=document.getElementById('pin-success');
    const pinFailureMessage=document.getElementById('pin-failure');

    if(typeNumber==currentPin){
        
        pinSuccessMessage.style.display='block';
        pinFailureMessage.style.display='none';

    }else{
        pinFailureMessage.style.display='block';
        pinSuccessMessage.style.display='none';

    }


    displayField.value = pin;
})

