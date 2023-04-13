import cipher from './cipher.js';
    var button = document.getElementById("bttn");
        button.addEventListener('click', (event) => {
            event.preventDefault();
            var msg = document.getElementById("inputtext").value;
            var offset = document.getElementById("inputoffset").value;
            var encoded = cipher.encode(msg, offset);
            var decoded = cipher.decode(msg, offset);
console.log(encoded);
console.log(decoded);
    })