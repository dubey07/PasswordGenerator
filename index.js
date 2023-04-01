const sliderValue = document.querySelector("[data-lengthSlider]");
const numberLength = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const number = document.querySelector("#number");
const symbol = document.querySelector("#symbol");
const copyMsg = document.querySelector("[data-copyMsg]");
const copybtn = document.querySelector("[data-copy]");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector("[generateBtn]");
const allCheckBox = document.querySelectorAll("input[type=checkbox]"); 
const symbolList = '`~!@#$%^&*()_+={[}]|:;"<,>?/';
const bcolor = document.querySelector("[bg]");

let password = "";
let passwordLength = 10;
let checkCount = 0;

handleSlider();

function handleSlider(){
    sliderValue.value = passwordLength;
    numberLength.innerText = passwordLength;
}

sliderValue.addEventListener('input' , (e)=>{
    passwordLength = e.target.value;
    handleSlider();
});

function getRandInteger(min,max){
    return Math.floor(Math.random()*(max-min)) + min;
}

function getRandonNumber(){
    return getRandInteger(0,9);
}

function getRandUppercase(){
    return String.fromCharCode(getRandInteger(65,91));
}
 
function getRandLowercase(){
    return String.fromCharCode(getRandInteger(97,123));
}

function getRandomSymbol(){
   let i = getRandInteger(0,symbolList.length);
   return symbolList.charAt(i);
}

function handleCheckBoxChange(){
    checkCount = 0;

    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked) checkCount++;
    });
}

allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change', handleCheckBoxChange);
});


function calcStrength(){
    bcolor.classList.remove("strong");
    bcolor.classList.remove("medium");
    bcolor.classList.remove("easy");

    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if(uppercase.checked) hasUpper = true;
    if(lowercase.checked) hasLower = true;
    if(number.checked) hasNum = true;
    if(symbol.checked) hasSym = true;

    

    if(hasUpper && hasLower && (hasNum || hasSym) && password.length >=8){
    bcolor.classList.add("strong");
    }
    else if((hasLower || hasUpper) && (hasNum || hasSym) && password.length >=6){
        bcolor.classList.add("medium");
    }
    else if(password.length < 6){
        bcolor.classList.add("easy");
    }
}


async function copyMessage(){
    try{
        navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e){
        copyMsg.innerText = "failed";
    }

    copyMsg.classList.add("active")
        setTimeout(()=>{
            copyMsg.classList.remove("active");
        },2000);

}

copybtn.addEventListener('click',()=>{
    if(passwordDisplay.value)
    copyMessage();
});

generateBtn.addEventListener('click', ()=>{
    if(passwordLength <= 0)
    return;
    
    if(passwordLength < checkCount){
    passwordLength = checkCount;
    handleSlider();
    }


    password = "";
    let funcArr = [];

    if(uppercase.checked)
    funcArr.push(getRandUppercase);
    if(lowercase.checked)
    funcArr.push(getRandLowercase);
    if(number.checked)
    funcArr.push(getRandonNumber);
    if(symbol.checked)
    funcArr.push(getRandomSymbol);

    for(let i=0; i<funcArr.length; i++)
    {
        password += funcArr[i]();
    }

    for(let i=0; i<passwordLength-funcArr.length; i++){
        let j = getRandInteger(0,funcArr.length);
        password += funcArr[j]();
    }

    // shufflePassword();

    passwordDisplay.value = password;
    calcStrength();

})