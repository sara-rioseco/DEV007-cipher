const cipher = {
  encode: function (offset, txt) {
    let coded_msg = "";
    if (offset === null && txt === []) {
      coded_msg = [];
    }
    for (let i = 0; i < txt.length; i++) {
      const char = txt[i];
      const char_ascii = char.charCodeAt(char);
      const coded_char = ((char_ascii + offset - 65) % 26) + 65;
      if (char_ascii >= 65 && char_ascii <= 90) {
        coded_msg = coded_msg + String.fromCharCode(coded_char);
      }
      if (char_ascii >= 97 && char_ascii <= 122) {
        const min_char = ((char_ascii - 32 + offset - 65) % 26) + 65;
        coded_msg = coded_msg + String.fromCharCode(min_char);
      }
      if (char_ascii === 32) {
        coded_msg = "";
      }
    }
    return coded_msg;
  },
  decode: function (offset, txt) {
    let decoded_msg = "";
    if (offset === null && txt === []) {
      decoded_msg = [];
    }
    for (let i = 0; i < txt.length; i++) {
      const char = txt[i];
      const char_ascii = char.charCodeAt(char);
      const decoded_char = ((char_ascii - offset + 65) % 26) + 65;
      if (char_ascii >= 65 && char_ascii <= 90) {
        decoded_msg = decoded_msg + String.fromCharCode(decoded_char);
      }
      if (char_ascii >= 97 && char_ascii <= 122) {
        const min_char = ((char_ascii - 32 - offset + 65) % 26) + 65;
        decoded_msg = decoded_msg + String.fromCharCode(min_char);
      }
      if (char_ascii === 32) {
        decoded_msg = "";
      }
    }
    return decoded_msg;
  },
};
export default cipher;