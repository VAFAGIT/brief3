var contactName = document.getElementById('name');
var phone = document.getElementById('phone');
var email = document.getElementById('email');
var message = document.getElementById('message');


var button = document.getElementById('button');

button.addEventListener('click', function(e){
    e.preventDefault();
    alert("your name is " + contactName.value + " and your phone number is " + phone.value + " and your email is " + email.value + " and your message is " + message.value);
});