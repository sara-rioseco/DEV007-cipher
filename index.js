import cipher from "./cipher.js";
const encodeButton = document.getElementById("encode-button");
const decodeButton = document.getElementById("decode-button");
const inputText = document.getElementById('input-text');
const errorTextInput = document.getElementById('error-text-input');
const inputOffset = document.getElementById('input-offset');
const errorOffsetInput = document.getElementById('error-offset-input');
const copyButton = document.getElementById('copy-button');
const copyTextMessage = document.getElementById('copy-text-message');
const clearButton = document.getElementById('clear-button');
const modalLink = document.getElementById('first-section-p');
const modal = document.querySelector('dialog');
const okButton = document.getElementById('ok-button');

modalLink.addEventListener('click', (e) => {
  e.preventDefault();
  modal.showModal();
})

okButton.addEventListener('click', (e) => {
  e.preventDefault();
  modal.close();
})

inputText.addEventListener('input', (e) => {
  const value = e.target.value;
  if (!cipher.validateInput(value)) {
    inputText.value = value.slice(0, value.length - 1);
    errorTextInput.textContent = 'Only letters and spaces are allowed';
  } else {
    errorTextInput.textContent = '';
  }
});

inputText.addEventListener('blur', (e) => {
  const value = e.target.value;
  if (value.length === 0 ) {
    errorTextInput.textContent = 'Enter a message';
  } else {
    errorTextInput.textContent = '';
  }
});

inputOffset.addEventListener('input', (e) => {
  const value = e.target.value;
  if (!cipher.validateOffset(Number(value))) {
    inputOffset.value = '130';
    errorOffsetInput.textContent = 'Max 130';
  } else {
    errorOffsetInput.textContent = '';
  }
});

inputOffset.addEventListener('blur', (e) => {
  const value = e.target.value;
  if (value.length === 0 ) {
    errorOffsetInput.textContent = 'Enter a number';
  } else {
    errorOffsetInput.textContent = '';
  }
});

encodeButton.addEventListener("click", (event) => {
  const msg = document.getElementById("input-text").value;
  const ofst = document.getElementById("input-offset").value;
  const encoded = cipher.encode(Number(ofst), msg);
  event.preventDefault();
  const result = document.querySelector("#result");
  result.textContent = encoded;
});

decodeButton.addEventListener("click", (event) => {
  const msg2 = document.getElementById("input-text").value;
  const ofst2 = document.getElementById("input-offset").value;
  const decoded = cipher.decode(Number(ofst2), msg2);
  event.preventDefault();
  const result = document.querySelector("#result");
  result.textContent = decoded;
});

copyButton.addEventListener("click", (e) => {
  e.preventDefault();
  const result = document.querySelector("#result").textContent;
  cipher.copyResult(result);
  copyTextMessage.textContent = 'Your message has been copied!';
  setTimeout(()=> copyTextMessage.textContent = '', 1500);
})

clearButton.addEventListener("click", (e) => {
  e.preventDefault();
  const result = document.querySelector("#result");
  result.textContent = '';
})
