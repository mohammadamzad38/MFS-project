document.getElementById('log-button')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log('loginbutton click  ')

    // phone number input
    const phonenumber = document.getElementById('phone-number').value;
    console.log(phonenumber, 'paisi')
})