var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output")

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";
function getTranslationURL(text){
    return serverURL + "?" + "text=" + text; 
}

function errorHandling(error){
    
  
}

function translateEvent() {

    

    var Inputtext = txtInput.value
    
    fetch(getTranslationURL(Inputtext))
        .then(response => response.json())
        .then(json =>{
            var translatedText = json.contents.translated;
            txtOutput.innerHTML = translatedText;
        })
        .catch(errorHandling)


}

btnTranslate.addEventListener("click", translateEvent)