var btntranslate =document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-Input");
var outputdiv=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/thuum.json"

function getTranslationURL(input){
        return serverURL+"?"+"text="+input;
    }
 
    
 
function clickHandler() {
    var inputText = txtinput.value;

fetch (getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json=> {
        var translatedText= json.contents.translated;
        outputdiv.innerText=translatedText;
    })
};

    btntranslate.addEventListener("click",clickHandler);
        
    
 
 
