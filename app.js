var btnTranslate = document.querySelector("#click");
var textInput = document.querySelector("#inputDiv");
var textOutput = document.querySelector("#outputDiv");

function createURL(text)
{
    var url = "https://api.funtranslations.com/translate/ferb-latin.json?text="+text;
    return url;
}
function clickHandler()
{
    var input = textInput.value;
    //console.log(input);
    fetch(createURL(input))
    .then(response => response.json()).then(JSON => textOutput.innerText=JSON.contents.translated).catch(error => console.log(error));
}

//will give error if clickHandler() is written instead of clickHandler
btnTranslate.addEventListener("click", clickHandler);