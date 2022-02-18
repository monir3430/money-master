// Expenses Area
document.getElementById('btn-submit').addEventListener('click', function(){
   const foodField = document.getElementById('famount');
   const rentField = document.getElementById('ramount');
   const clotheField = document.getElementById('camount');
   const foodValue = foodField.value == ''? 0 :foodField.value;
   const rentValue = rentField.value == ''? 0 : rentField.value;
   const clotheValue = clotheField.value == ''? 0 : clotheField.value;
 
   const totalExpense = document.getElementById('t-expenses');
   const totalExpenseValue = totalExpense.innerText
   totalExpense.innerText = parseInt(foodValue)+parseInt(rentValue)+parseInt(clotheValue);
   
//    Income Area
   const incomeField = document.getElementById('iamount');
   const balanceField = document.getElementById('bamount');
   const incomeValue = incomeField.value;
   const balanceValue = balanceField.innerText;
   balanceField.innerText = parseInt(incomeField.value)-parseInt(foodValue)-parseInt(rentValue)-parseInt(clotheValue);
})