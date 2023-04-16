import cipher from "./cipher.js";
const button = document.getElementById("bttn");
button.addEventListener("click", (event) => {
  const msg = document.getElementById("inputtext").value;
  const ofst = document.getElementById("inputoffset").value;
  const encoded = cipher.encode(Number(ofst), msg);
  event.preventDefault();
  console.log(encoded);
});
const button2 = document.getElementById("bttn2");
button2.addEventListener("click", (event) => {
  const msg2 = document.getElementById("codedtext").value;
  const ofst2 = document.getElementById("codedoffset").value;
  const decoded = cipher.decode(Number(ofst2), msg2);
  event.preventDefault();
  console.log(decoded);
});
