document.getElementById('button-Withdraw').addEventListener('click',function(){
  
const withdrwField = document.getElementById('Withdraw-field');
const newWithdrwamounstring = withdrwField.value;
const newWithdrawamount = parseFloat(newWithdrwamounstring);

withdrwField.value = '';

const withdrawTotalElement = document.getElementById('withdraw-Total');
const previusWithdrawTotalString = withdrawTotalElement.innerText;
const previusWithdrawTotal= parseFloat(previusWithdrawTotalString)



const currenTotalWithdraw = previusWithdrawTotal + newWithdrawamount;
withdrawTotalElement.innerText = currenTotalWithdraw;




const balanceTotalElement = document.getElementById('balane-Total');
const previousbalaneTotalString = balanceTotalElement.innerText;
const previousbalaneTotal = parseFloat(previousbalaneTotalString)

const newBlaneTotal = previousbalaneTotal- newWithdrawamount;
balanceTotalElement.innerText= newBlaneTotal



})