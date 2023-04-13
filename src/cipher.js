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
  var coded_msg = ""
  for (var i=0; i<txt.length; i++){
    var char = txt[i]
    var char_ascii = char.charCodeAt(char)
    var coded_char = (char_ascii - offset - 65) % 26 + 65 
    if (char_ascii >=32 && char_ascii <=64) {
      return char
    } if (char_ascii >=65 && char_ascii <=90) {
      return String.fromCharCode(coded_char) 
    } if (char_ascii >=97 && char_ascii <=122) {
        var min_char = ((char_ascii - 32) - offset - 65) % 26 + 65
        return String.fromCharCode(min_char)
    } if (char === "?") {
            return "?"
    } if (char === "¿") {
            return "¿"
    } if (char === "¡") {
            return "¡"  
    } else {
              return ""
    }
  return coded_msg}
}
}
export default cipher;
