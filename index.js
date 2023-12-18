import cipher from "./cipher.js";
const button = document.getElementById("bttn");
const button2 = document.getElementById("bttn2");
const inputText = document.getElementById('inputtext');
const errorInputText = document.getElementById('erroridinput');
const inputOffset = document.getElementById('inputoffset');
const errorInputOffset = document.getElementById('erroridoffset');
const copyBttn = document.getElementById('bttn3');

inputText.addEventListener('input', (e) => {
  const value = e.target.value;
  if (cipher.validateInput(value)) {
    inputText.value = value.slice(0, value.length - 1);
    errorInputText.textContent = 'Only letters and spaces are allowed';
  } else {
    errorInputText.textContent = '';
  }
});
inputText.addEventListener('blur', (e) => {
  const value = e.target.value;
  if (value.length === 0 ) {
    errorInputText.textContent = 'Enter a message';
  } else {
    errorInputText.textContent = '';
  }
});

inputOffset.addEventListener('blur', (e) => {
  const value = e.target.value;
  if (value.length === 0 ) {
    errorInputOffset.textContent = 'Enter a number';
  } else {
    errorInputOffset.textContent = '';
  }
});


button.addEventListener("click", (event) => {
  const msg = document.getElementById("inputtext").value;
  const ofst = document.getElementById("inputoffset").value;
  const encoded = cipher.encode(Number(ofst), msg);
  event.preventDefault();
  const result = document.querySelector("#result");
  result.textContent = encoded;
});

button2.addEventListener("click", (event) => {
  const msg2 = document.getElementById("inputtext").value;
  const ofst2 = document.getElementById("inputoffset").value;
  const decoded = cipher.decode(Number(ofst2), msg2);
  event.preventDefault();
  const result = document.querySelector("#result");
  result.textContent = decoded;
});

copyBttn.addEventListener("click", (e) => {
  e.preventDefault();
  const result = document.querySelector("#result").textContent;
  cipher.copyResult(result)
})
