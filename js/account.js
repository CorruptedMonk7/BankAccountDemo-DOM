// get the amount deposited
document.getElementById('deposit-button').addEventListener('click',function(){
    const depositInput= document.getElementById('deposit-input'); //input amount
    const depositAmount= depositInput.value;   


    const depositCurrent= document.getElementById('deposit-amount');  //deposit predefined 00
    const previousDepositAmount= depositCurrent.innerText;

    const updatedDeposit= parseFloat(depositAmount)+ parseFloat(previousDepositAmount); //adding previous 

    depositCurrent.innerText= updatedDeposit; //the deposit input coming to depositAmount and depositasitAmount is setting as innetrText

    //updating balance
    const totalBalance= document.getElementById('balance-total');
    const balance= totalBalance.innerText;

    const updatedBalance = parseFloat(depositAmount)+ parseFloat(balance);

    totalBalance.innerText = updatedBalance;
    
    depositInput.value=''
})

document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput= document.getElementById('withdraw-input');  //getting input value of withdraw money
    const withdrawAmount= withdrawInput.value;

    const firstWithdraw= document.getElementById('withdraw-amount'); //taking and updating 00 withdraw
    const previousWithdraw= firstWithdraw.innerText;

    const totalWithdraw= parseFloat(previousWithdraw)+ parseFloat(withdrawAmount);
   

    firstWithdraw.innerText= totalWithdraw;

    
    //balance reduction for withdraw
    const totalBalance= document.getElementById('balance-total');
    const balance= totalBalance.innerText;

    const newBalance= parseFloat(balance)-parseFloat(withdrawAmount)

    totalBalance.innerText= newBalance;
    withdrawInput.value=''

})
