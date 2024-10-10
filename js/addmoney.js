document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addmoney = document.getElementById('input-add-money').value;
    const addmoneyconvert = parseFloat(addmoney);
     const inputPinNumber = document.getElementById('pin-number-input').value;

     if(inputPinNumber === '1234'){

        const balance = document.getElementById('account-balance').innerText;
        const balanceConvert = parseFloat(balance);

        const newbalance = addmoneyconvert + 
        balanceConvert;

        const updatedBalance = document.getElementById('account-balance').innerText = newbalance;
     }
     else{
        alert ('faield to add money')
     }
})
