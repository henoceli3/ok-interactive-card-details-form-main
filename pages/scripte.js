const inputName = document.getElementById('input-name');
const errorName = document.getElementById('error-name-message');
const nameCard = document.getElementById('name-add');
var testName;

inputName.addEventListener("input", function(event){
    if (inputName.validity.valid){
        errorName.innerHTML = "";
        nameCard.innerHTML = inputName.value;
        testName = true;
    }
    else{
        nameCard.innerHTML = inputName.value;
        errorName.innerHTML = "";
        testName = false;
    }
});


const inputCardNumber = document.getElementById('input-card-number');
const errorCardNumber = document.getElementById('error-card-number-message');
const cardNumber = document.getElementById('cardnumber-add');
var testCardNumber;
var stringCardNumber  = "";
var arrayCardNumber = [];
var sub;


inputCardNumber.addEventListener('input', function(event){
    if(isNaN(inputCardNumber.value) == false){
        errorCardNumber.innerHTML = "";
        stringCardNumber = inputCardNumber.value;
        cardNumber.innerHTML = inputCardNumber.value;
        
        testCardNumber = true;
    }else{
        errorCardNumber.innerHTML = "mauvais format, les chiffres uniquement";
        cardNumber.innerHTML = "0000 0000 0000 0000";
        testCardNumber = false;
    }
});

const inputMois = document.getElementById('input-mois');
const inputYear = document.getElementById('input-year');
const moisCard = document.getElementById('mois-add');
const yearCard = document.getElementById('year-add');
const errorMoisYearCard = document.getElementById('error-mois-date-message');
var testMois;
var testYear;

inputMois.addEventListener('input', function(event){
    if(isNaN(inputMois.value) == false){
        moisCard.innerHTML = inputMois.value;
        testMois = true;
    }else{
        moisCard.innerHTML = "00";
        errorMoisYearCard.innerHTML = "mauvais format, les chiffres uniquement";
        testMois = false;
    }
});
inputYear.addEventListener('input', function(event){
    if(isNaN(inputYear.value) == false){
        yearCard.innerHTML = inputYear.value;
        testYear = true;
    }else{
        yearCard.innerHTML = "00";
        errorMoisYearCard.innerHTML = "mauvais format, les chiffres uniquement";
        testYear = false;
    }
});

const reloadButon = document.getElementById("button-confirme");
const form = document.getElementById('formulaire');
const confimation = document.getElementById('confirme');
const confirmeTexte = document.getElementById('button-confirme-texte');
var isActive = true;

reloadButon.addEventListener("click", function(event){
    if(!isActive){
        location.reload();
        isActive = true;
    }else{
        if(testName == true && testCardNumber == true && testMois == true && testYear == true){
            form.style.display = "none";
            confimation.style.display = "flex";
            confirmeTexte.innerHTML = 'continue';
            isActive = false;
        }else{
            if(inputName.value == ""){
                errorName.innerHTML = "please enter your name";
            }
            if(inputCardNumber.value == ""){
                errorCardNumber.innerHTML = "please enter your card number";
            }else if(testCardNumber == false){
                errorCardNumber.innerHTML = "wrong format, numbers only";
            }
            if(inputMois.value == ""){
                errorMoisYearCard.innerHTML = "please enter the month and/or year of expiry of your card";
            }else if(testMois == false || testYear == false){
                errorMoisYearCard.innerHTML = "wrong format, numbers only";
            }
        }
    }
});