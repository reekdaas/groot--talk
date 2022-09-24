let input = document.querySelector("#input-box");
let btnClick = document.querySelector("#click");
let outputBox = document.querySelector("#output-box");

let serverURL = "https://api.funtranslations.com/translate/groot.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

let errorHandler = function (err) {
  alert("Something wrong with server.Please try after sometime.");
};

const clickEvent = function () {
  let inputText = input.value;
  // console.log(inputText);
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      let outputText = json.contents.translated;
      // console.log(json);
      outputBox.innerText = outputText;
    })
    .catch(errorHandler);
};

btnClick.addEventListener("click", clickEvent);
