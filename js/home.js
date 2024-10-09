// Add money to the account

document.getElementById('bt  n-add-money').addEventListener('click', function(event){
    event.preventDefault();
    
    const addmoneyinput = document.getElementById('input-add-money').value; 
    const inputpinnumber = document.getElementById('pin-number-input').value;
    console.log(addmoneyinput, inputpinnumber)
})