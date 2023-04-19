import cipher from "./cipher.js";
const button = document.getElementById("bttn");
button.addEventListener("click", (event) => {
  const msg = document.getElementById("inputtext").value;
  const ofst = document.getElementById("inputoffset").value;
  const encoded = cipher.encode(Number(ofst), msg);
  event.preventDefault();
  const result = document.querySelector("#result");
  result.textContent = encoded; 
});
const button2 = document.getElementById("bttn2");
button2.addEventListener("click", (event) => {
  const msg2 = document.getElementById("inputtext").value;
  const ofst2 = document.getElementById("inputoffset").value;
  const decoded = cipher.decode(Number(ofst2), msg2);
  event.preventDefault();
  const result = document.querySelector("#result");
  result.textContent = decoded;
});
