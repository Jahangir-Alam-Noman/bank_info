
/* function doubleIt(number) {
    const result = number * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(10);
 */


function getInputvalue(inputId) {
    // debugger;
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const amount = parseFloat(inputText);

    // clear the deposit input field
    inputField.value = '';
    return amount;

}

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const fieldTotal = document.getElementById(totalFieldId);
    const totalText = fieldTotal.innerText;
    const previousAmount = parseFloat(totalText);
    fieldTotal.innerText = previousAmount + amount;

}

function currentBalance() {
    const balanceTotal = document.getElementById('balance_total');
    const balanceTotalText = balanceTotal.innerText;
    const previousTotalAmount = parseFloat(balanceTotalText);
    return previousTotalAmount;
}


function updateBalance(balance, isAdd) {
    const balanceTotal = document.getElementById('balance_total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousTotalAmount = parseFloat(balanceTotalText); */
    const previousTotalAmount = currentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousTotalAmount + balance;
    }
    else {
        balanceTotal.innerText = previousTotalAmount - balance;
    }

}



// deposit

document.getElementById('deposit_button').addEventListener('click',
    function () {
        // get the deposit input
        /*    
        const depositInput = document.getElementById('deposit_input');
         const depositInputText = depositInput.value;
         const depositInputAmount = parseFloat(depositInputText); */



        // show  the deposit amount
        /*  const depositTotal = document.getElementById('deposit_total');
         const depositTotalText = depositTotal.innerText;
         const previousDepositAmount = parseFloat(depositTotalText);
         depositTotal.innerText = previousDepositAmount + depositInputAmount;

  */




        // update balance for deposit amount

        /*   const balanceTotal = document.getElementById('balance_total');
          const balanceTotalText = balanceTotal.innerText;
          const previousTotalAmount = parseFloat(balanceTotalText);
          balanceTotal.innerText = previousTotalAmount + depositInputAmount; */

        const depositInputAmount = getInputvalue('deposit_input');
        if (depositInputAmount > 0) {
            updateTotalField('deposit_total', depositInputAmount);
            updateBalance(depositInputAmount, true);
        }


        // clear the deposit input field
        // depositInput.value = '';


    });

// withdraw

document.getElementById('withdraw_button').addEventListener('click',
    function () {

        // get the withdraw amount
        /* const withdrawInput = document.getElementById('withdraw_input');
           const withdrawInputText = withdrawInput.value;
           const withdrawAmount = parseFloat(withdrawInputText); */



        // show withdraw amount
        /*   const withdrawTotal = document.getElementById('withdraw_total');
          const withdrawTotalText = withdrawTotal.innerText;
          const previousWithdrawTotal = parseFloat(withdrawTotalText);
          withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */




        // update balance for withdraw

        /*    const totalBalanceAmount = document.getElementById('balance_total');
           const totalBalanceAmountText = totalBalanceAmount.innerText;
           const previousBalanceAmount = parseFloat(totalBalanceAmountText);
           totalBalanceAmount.innerText = previousBalanceAmount - withdrawAmount;
    */

        const withdrawAmount = getInputvalue('withdraw_input');
        const currentAmount = currentBalance();
        if (withdrawAmount > 0 && withdrawAmount < currentAmount) {
            updateTotalField('withdraw_total', withdrawAmount);
            updateBalance(withdrawAmount, false);
        }
        if (withdrawAmount > currentAmount) {
            console.log('You can not withdraw more than what you in your account');
        }


        // clear the withdraw input
        // withdrawInput.value = '';


    });