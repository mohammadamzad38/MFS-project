// Add money to the account

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addmoneyinput = document.getElementById('input-add-money').value; 
    const inputpinnumber = document.getElementById('pin-number-input').value;
    
    // step 3 verify pin
    if(inputpinnumber === '1234'){

        // 04 --get current balance
        const balance = document.getElementById('account-balance').innerText;

        // 05 --add money input with balance convert
        const addmoneynumber = parseFloat(addmoneyinput);
        const balancenumber = parseFloat(balance);
        const newbalance = addmoneynumber + balancenumber;

        document.getElementById('account-balance').innerText = newbalance;
    }
    else{
        alert ('please try again')
    }
})