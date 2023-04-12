const cipher = {
  codingChar: function (char, offset) {	
    if (char.charCodeAt(char) >=32 && char.charCodeAt(char) <=64) {
      return char
    } if (char === "?") {
      return "?"
    } if (char === "¿") {
      return "¿"
    } if (char === "¡") {
      return "¡"  
    } else {
      var coded_ascii = (char.charCodeAt(char) + offset - 65) % 26 + 65
      var coded_char = String.fromCharCode(coded_ascii)
      return coded_char
    }
  },
  encode: function (msg, offset) {
    var coded_msg = ""
    for (var i=0; i<msg.length; i++){
      coded_msg = coded_msg + codingChar(msg[i], offset)
    }
    return coded_msg
  },
  decodingChar: function (char, offset) {	
    if (char.charCodeAt(char) >=32 && char.charCodeAt(char) <=64) {
      return char
    } if (char === "?") {
      return "?"
    } if (char === "¿") {
      return "¿"
    } if (char === "¡") {
      return "¡"  
    } else {
      var coded_ascii = (char.charCodeAt(char) - offset - 65) % 26 + 65
      var coded_char = String.fromCharCode(coded_ascii)
      return coded_char
    }
  },
  decode: function (msg, offset) {
    var coded_msg = ""
    for (var i=0; i<msg.length; i++){
      coded_msg = coded_msg + decodingChar(msg[i], offset)
    }
    return coded_msg
  },
};
export default cipher;
