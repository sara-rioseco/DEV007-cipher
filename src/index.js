import cipher from "./cipher.js";
const button = document.getElementById("bttn");
button.addEventListener("click", (event) => {
  const msg = document.getElementById("inputtext").value;
  const ofst = document.getElementById("inputoffset").value;
  console.log(msg);
  console.log(ofst);
  const encoded = cipher.encode(Number(ofst), msg);
  const decoded = cipher.decode(Number(ofst), msg);
  event.preventDefault();
  console.log(encoded);
  console.log(decoded);
});
