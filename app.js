const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky");
const btn = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber)
{
    if (sum % luckyNumber ===0) {
        outputBox.innerText = "Your Birthday is lucky 😄";
        outputBox.style.color = "green";
    }else {
        outputBox.innerText = "Sorry! Your Birthday is not so lucky";
        outputBox.style.color = "red";
    }
}
function isBirthDateLucky() {
    const dob = birthDate.value;
    const sum = calSum(dob);
    if(luckyNumber.value > 0 && dob){
        compareValues(sum, luckyNumber.value);
    }
    else{
        outputBox.innerText="Please enter both the fields";
    }
}
function calSum(dob) {
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i = 0; i < dob.length; i++)
    {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}
btn.addEventListener('click', isBirthDateLucky);