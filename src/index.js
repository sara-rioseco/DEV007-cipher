import cipher from './cipher.js';
    var button = document.getElementById("bttn");
    var msg = document.getElementById("inputtext").value;
    var ofst = document.getElementById("inputoffset").value;
    var encoded = cipher.encode(ofst, msg);
    var decoded = cipher.decode(ofst, msg);
        button.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(encoded);
            console.log(decoded);
        })