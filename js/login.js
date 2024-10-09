document.getElementById('log-button')
.addEventListener('click', function(event){
    event.preventDefault();

    // phone number input
    const phonenumber = document.getElementById('phone-number').value;
    // pin number input
    const pinnumber = document.getElementById('pin-number').value;

    console.log(phonenumber, pinnumber)

    if(phonenumber === '5' && pinnumber === '1234'){
        console.log('You are loged in')
        window.location.href= '/home.html';
    }
    else{
        alert('Wrong input')
    }
})