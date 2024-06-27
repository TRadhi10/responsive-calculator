function appendToInput(value) {
  const inputField = document.getElementById('input');
  if (inputField.value.length < 100) {
    inputField.value += value;
  }
}
function clearInput() {
  document.getElementById('input').value = '';
}
function deleteLastCharacter() {
  const inputField = document.getElementById('input');
  let currentValue = inputField.value;

  if (currentValue.length > 0) {
    inputField.value = currentValue.slice(0, -1);
  }
}
function calculate() {
  try {
    const inputField = document.getElementById('input');
    let input = inputField.value;

    
    input = input.replace(/%/g, '%');

    let result = eval(input);
    inputField.value = result;
  } catch (error) {
    alert('Error: ' + error.message);
    clearInput();
  }
}document.addEventListener('DOMContentLoaded', function() {

  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const value = button.textContent;
      if (value === '=') {
        calculate();
      } else if (value === 'C') {
        clearInput();
      } else if (value === 'Del') {
        deleteLastCharacter();
      } else {
        appendToInput(value);
      }
    });
  });
  document.addEventListener('keydown', function(event) {
    const key = event.key;
    const inputField = document.getElementById('input');

  
    if (key.match(/[0-9+\-*/.=]|Enter|Backspace|Escape|%|0/)) {
      event.preventDefault();

      
      if (key === 'Enter') {
        calculate();
      } else if (key === 'Escape') {
        clearInput();
      } else if (key === 'Backspace') {
        deleteLastCharacter();
      } else if (key === '%') {
        appendToInput(key); 
      } else if (key === '0') {
        appendToInput('00'); 
      } else {
        appendToInput(key);
      }
    }
  });
});
