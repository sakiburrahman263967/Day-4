document.getElementById('Submit-btn').addEventListener('click',function(){
  
const emailField = document.getElementById('user-email');
const email = emailField.value;



const passwordField = document.getElementById('user-password');
const password = passwordField.value;




if(email === 'sontan@baap.com' && password === 'secret'){
 window.location = 'js/bank.html'
}
else{
  alert(' toi password vole gesos ei karone.toke ami tejjo potro gosona korlam')
}

})