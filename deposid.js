document.getElementById('button-deposit').addEventListener('click', function () {

  const deposidField = document.getElementById('deposid-field');

  const newdeposidAmountString= deposidField.value;
  const newdeposidAmount = parseFloat(newdeposidAmountString)
  
  deposidField.value = '';

  const deposidTotalElement = document.getElementById('Deposid-total');
  const previousdeposidTotalString = deposidTotalElement.innerText;
  const previousdeposidTotal = parseFloat(previousdeposidTotalString)

  const currentdiposidtotal= previousdeposidTotal + newdeposidAmount;

  deposidTotalElement.innerText =  currentdiposidtotal;




  const balanceTotalElement = document.getElementById('balane-Total');
  const previusbalaneTotalStrig = balanceTotalElement.innerText;
  const previusbalaneTotal = parseFloat(previusbalaneTotalStrig)

  const currentTotalbalence = previusbalaneTotal + newdeposidAmount;

  balanceTotalElement.innerText = currentTotalbalence;

 

})