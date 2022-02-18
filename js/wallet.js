// Expenses Area
document.getElementById('btn-submit').addEventListener('click', function(){
   const foodField = document.getElementById('famount');
   const rentField = document.getElementById('ramount');
   const clotheField = document.getElementById('camount');
   const foodValue = foodField.value == ''?0 : foodField.value;
   const rentValue = rentField.value == ''?0 : rentField.value;
   const clotheValue = clotheField.value ==''?0 : clotheField.value;
   const totalExpense = document.getElementById('t-expenses');
   totalExpense.innerText = parseInt(foodValue)+parseInt(rentValue)+parseInt(clotheValue);
   
   
//    Income Area
   const incomeField = document.getElementById('iamount');
   const balanceField = document.getElementById('bamount');
   const incomeValue = incomeField.value;
   balanceField.innerText = parseInt(incomeValue)-parseInt(foodValue)-parseInt(rentValue)-parseInt(clotheValue);
   
   // Error Messaging by alert
   if(foodValue < 0  || rentValue < 0 || clotheValue < 0 || incomeValue < 0 || isNaN(foodValue)  || isNaN(rentValue) || isNaN(clotheValue) || isNaN(incomeValue) )
{
    alert("value cannot be negative or String")
    
}
else if(balanceField.innerText < 0){
   alert("Income is less than expenses")
}


});

document.getElementById('sbutton').addEventListener('click', function(){
   let savingField = document.getElementById('sfield');
   const incomeField = document.getElementById('iamount');
   const incomeFieldValue = incomeField.value == ''?0 : incomeField.value;
   let remainingBalance = document.getElementById('rbalance');
   
   let savingAmount = document.getElementById('sresult');
   let savingAmountValue = savingAmount.innerText;
   savingAmount.innerText = parseInt(incomeFieldValue)*parseInt(savingField.value)/100;
   const balanceField = document.getElementById('bamount');
   remainingBalance.innerText = balanceField.innerText-savingAmount.innerText;

   if(remainingBalance.innerText < 0 ) {
      alert("income field value can not be less than others value")
   }

});
