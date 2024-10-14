document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashoutinput = document.getElementById('cash-out-input').value;
    const cashInputConvert = parseFloat(cashoutinput);

    const cashOutPin = document.getElementById('cash-out-pin').value;
    
    if(cashOutPin === '1234'){

        const previousBalance = document.getElementById('account-balance').innerText;
        const precashConvert = parseFloat(previousBalance);
        const resultCashOut = precashConvert - cashInputConvert;
        const cashOutUpdate = document.getElementById('account-balance').innerText = resultCashOut;
    }
    else{
        alert('Invalid input')
    }
})