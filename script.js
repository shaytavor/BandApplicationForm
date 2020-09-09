const form = document.getElementById("form");
const cmdOK = document.getElementById("cmdSubmit");
const cmdClear = document.getElementById("cmdClear");

function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
        if(input.value.trim() === '') 
            showError(input, 'Required');
        else
            showOK(input);
    });
}

function checkRequiredCheckbox(chks) {
    if(chks.every(c => c.checked === false))
        showError(chks[0].parentElement, "Must choose an instrument");
    else
        showOK(chks[0].parentElement);
    
}

function clearItem(input) {
    control = input.parentElement;
    control.classList.remove('error');
    control.classList.remove('ok');
    input.value = '';
}
function showError(input, msg) {
    control = input.parentElement;
    control.classList.add('error');
    control.classList.remove('ok');
    small = control.querySelector('small');
    small.innerText = msg;
}

function showOK(input) {
    control = input.parentElement;
    control.classList.remove('error');
    control.classList.add('ok');
}

cmdClear.addEventListener('click', function(e) {
    inputs = Array.from(document.getElementsByTagName('input'));
    inputs.forEach(item => clearItem(item));
    formInstruments = document.querySelector('.form-instruments');
    formInstruments.classList.remove('ok');
    formInstruments.classList.remove('error');
});

cmdOK.addEventListener('click', function() {
    controls = Array.from(document.getElementsByClassName('form-control'));
    inputs = controls.map(control => control.querySelector('input'))
    chks = Array.from(document.querySelectorAll("input[type = 'checkbox']"));


    checkRequired(inputs);
    checkRequiredCheckbox(chks, document.querySelector('.form-instruments'));
});