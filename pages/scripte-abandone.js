const myTimeout = setInterval(addName, 100);
const myTimeoutTwo = setInterval(addCardNumber, 100);
const myTimeoutThree = setInterval(addDay, 100);
const myTimeoutFour = setInterval(addYear, 100);
const myTimeoutString = setInterval(testString,100);
const inputOne = document.getElementById('input-name');
const nameAdd = document.getElementById('name-add');

const inputTwo = document.getElementById("input-cardnumber");
const numberCard = document.getElementById("cardnumber-add");

const inputThree = document.getElementById("input-day");
const day = document.getElementById("day-add");

const inputFour = document.getElementById("input-year");
const year = document.getElementById("year-add");

function addName(){
    nameAdd.innerHTML = inputOne.value;
}

function addCardNumber(){
    numberCard.innerHTML = inputTwo.value;
}

function addDay(){
    day.innerHTML = inputThree.value;
}

function addYear(){
    year.innerHTML = inputFour.value;
}

const errorName = document.getElementById('error-une');
const errorCard = document.getElementById('error-deux');
var inputOneText = inputOne.value; /*input 1 */
var inputTwoText = inputTwo.value; /*input 2*/
var boolCharactere  = isNaN(inputOneText);

function testString(){
    if(boolCharactere == true){
        errorName.innerHTML = "";
    }else{
        errorName.innerHTML = "wrong format, string only";
    }
}


const buttonConfirm = document.getElementById('button-confirme');
const formulaire = document.getElementById('formulaire');
const confirme = document.getElementById('confirme');
const confirmeTexte = document.getElementById('button-confirme-texte');
var   isActive  = true;

buttonConfirm.addEventListener('click', confirmeProcess);

function confirmeProcess(){
    if(!isActive){
        location.reload();
        isActive = true;
    }else{
        formulaire.style.display = 'none';
        confirme.style.display = 'flex';
        confirmeTexte.innerHTML = 'continue';
        isActive = false;
    }
}