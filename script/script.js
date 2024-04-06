var originalText = "I Love my country Pakistan. <br>I Like my city Faisalabad. <br>I Love my Homeland."

var cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Burewala', 'Sheikhupura', 'Kashmir'];

function upperCase() {

    let upperCaseText = originalText.toUpperCase();
    document.getElementById("output").innerHTML = upperCaseText;
}
function lowerCase() {

    let lowerCaseText = originalText.toLowerCase();
    document.getElementById("output").innerHTML = lowerCaseText;
}
function capatalize() {

    let capatalizeText = '<span style="text-transform: capitalize;">' + originalText + '</span>';
    document.getElementById("output").innerHTML = capatalizeText;
}
function betterFormatting() {

    let text = document.getElementById("inputText").value;
    if (text === "") {
        alert("Please type your text")
        return;
    }
    text = text.toLowerCase();
    document.getElementById("output").style.textTransform = 'capitalize';
    document.getElementById("output").innerHTML = text;
}
function printAllCities() {

    document.getElementById("output").innerHTML = "";

    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById("output").innerHTML += num + ')' + cities[i] + '<br>';
    }
}
function addCity() {
    let city = document.getElementById("inputText").value;

    if (city.length < 3) {
        alert('Please type your city name correctly.');
        return;
    }

    let cityFirstLetter = city.charAt(0).toUpperCase();
    let cityAllLetters = city.slice(1).toLowerCase();

    let cityWordInCapitalize = cityFirstLetter + cityAllLetters;


    let cityFound = false;

    for (let i = 0; i < cities.length; i++) {

        if (cities[i] === cityWordInCapitalize) {

            cityFound = true;
            let html = '<span style="color: red; font-size: 20px;">"' + cityWordInCapitalize + '"</span> is already in list.';
            document.getElementById("output").innerHTML = html;
        }
    }

    if (cityFound === false) {

        cities.push(cityWordInCapitalize);
        let html = '<span style="color: green; font-size: 20px;">"' + cityWordInCapitalize + '"</span> has been successfully added into list.';
        document.getElementById("output").innerHTML = html;
    }
}
function checkCity() {
    let city = document.getElementById("inputText").value;

    if (city.length < 3) {
        alert('Please type your city name correctly.');
        return;
    }

    let cityFirstLetter = city.charAt(0).toUpperCase();
    let cityAllLetters = city.slice(1).toLowerCase();

    let cityWordInCapitalize = cityFirstLetter + cityAllLetters;


    let cityFound = false;

    for (let i = 0; i < cities.length; i++) {

        if (cities[i] === cityWordInCapitalize) {

            cityFound = true;
            let html = '<span style="color: green; font-size: 20px;">"' + cityWordInCapitalize + '"</span> is already in list. &#128151;';
            document.getElementById("output").innerHTML = html;
        }
    }

    if (cityFound == false) {

        // cities.push(cityWordInCapitalize);
        let html = 'SORRY &#128524; We could not find your city <span style="color: red; font-size: 20px;">"' + cityWordInCapitalize + '" </span> in list. ';
        document.getElementById("output").innerHTML = html;
    }
}

function findWord() {
    let newOriginalText = originalText.toLowerCase();

    let word = document.getElementById("inputText").value;

    if (!word) {
        alert('Please type a word for find.');
        return;
    }

    word = word.toLowerCase();

    let findWord = newOriginalText.indexOf(word);

    if (findWord !== -1) {
        let html = 'Your word <span style="color: green; font-size: 18px;">"' + word + '"</span> found at index: ' + findWord;
        document.getElementById("output").innerHTML = html;
    } else {
        let html = 'Your word <span style="color: red; font-size: 18px;">"' + word + '"</span> does not exist in the Original String';
        document.getElementById("output").innerHTML = html;
    }
}

function replaceWord() {
    let newOriginalText = originalText.toLowerCase();

    let word = document.getElementById("inputText").value;

    if (!word) {
        alert('Please type a word for replacing.');
        return;
    }
    let replaceWith = prompt('Enter a word that you want to replace with');

    if (!replaceWith) {

        alert('Please type a word to replace it with' + word + ".");
        return;
    }
    word = word.toLowerCase();
    word = new RegExp(word, 'g');
    replaceWith = replaceWith.toLowerCase();

    let replaceWord = newOriginalText.replace(word, replaceWith);
    document.getElementById("output").innerHTML = replaceWord;
}

document.getElementById("clean").onclick = function (){
    let html = " ";
    document.getElementById("output").innerHTML = html;
}