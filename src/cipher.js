const cipher = {
  encode: function (txt, offset) {
    var coded_msg = ""
    for (var i=0; i<txt.length; i++){
      var char = txt[i]
      var char_ascii = char.charCodeAt(char)
      var coded_char = (char_ascii + offset - 65) % 26 + 65 
      if (char_ascii >=32 && char_ascii <=64) {
        coded_msg = coded_msg + char
      } if (char_ascii >=65 && char_ascii <=90) {
          coded_msg = coded_msg + String.fromCharCode(coded_char) 
      } if (char_ascii >=97 && char_ascii <=122) {
          var min_char = ((char_ascii - 32) + offset - 65) % 26 + 65
          coded_msg = coded_msg + String.fromCharCode(min_char)
      } if (char === "?") {
          coded_msg = coded_msg + "?"
      } if (char === "¿") {
          coded_msg = coded_msg + "¿"
      } if (char === "¡") {
          coded_msg = coded_msg + "¡"  
      } else {
          coded_msg = coded_msg + ""
      }
    } return coded_msg
  },
decode: function (txt, offset) {
  var decoded_msg = ""
  for (var i=0; i<txt.length; i++){
    var char = txt[i]
    var char_ascii = char.charCodeAt(char)
    var decoded_char = (char_ascii - offset - 65) % 26 + 65 
    if (char_ascii >=32 && char_ascii <=64) {
      decoded_msg = decoded_msg + char
    } if (char_ascii >=65 && char_ascii <=90) {
        decoded_msg = decoded_msg + String.fromCharCode(decoded_char) 
    } if (char_ascii >=97 && char_ascii <=122) {
        var min_char = ((char_ascii - 32) + offset - 65) % 26 + 65
        decoded_msg = decoded_msg + String.fromCharCode(min_char)
    } if (char === "?") {
        decoded_msg = decoded_msg + "?"
    } if (char === "¿") {
        decoded_msg = decoded_msg + "¿"
    } if (char === "¡") {
        decoded_msg = decoded_msg + "¡"  
    } else {
        decoded_msg = decoded_msg + ""
    }
  } return decoded_msg
}
}
export default cipher;
