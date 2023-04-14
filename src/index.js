import cipher from './cipher.js';
    const cdform = document.getElementById("codeform");
    const button = document.getElementById("bttn");
        button.addEventListener('click'), (event) => {
            const msg = document.getElementById("inputtext").value;
            const ofst = document.getElementById("inputoffset").value;
            const encoded = cipher.encode(ofst, msg);
            const decoded = cipher.decode(ofst, msg);
            event.preventDefault();
            console.log(encoded);
            console.log(decoded);
        }