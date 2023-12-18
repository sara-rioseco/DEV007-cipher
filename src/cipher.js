const cipher = {
  validateInput: (input) => /[^a-zA-Z\s]+/.test(input),
  // validateOffset: (offset) => /^(0|[1-9][0-9]*)$/.test(offset),
  copyResult: (str) => navigator.clipboard.writeText(str),
  encode: function (offset, txt) {
    let coded_msg = "";
    if (typeof offset !== "number" || typeof txt !== "string") {
      throw new TypeError(
        "Invalid arguments: offset must be a number and txt must be a string"
      );
    } else
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
        if (char_ascii >= 32 && char_ascii <= 64) {
          coded_msg = coded_msg + char;
        }
      }
    return coded_msg;
  },
  decode: function (offset, txt) {
    let decoded_msg = "";
    if (typeof offset !== "number" || typeof txt !== "string") {
      throw new TypeError(
        "Invalid arguments: offset must be a number and txt must be a string"
      );
    } else
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
        if (char_ascii >= 32 && char_ascii <= 64) {
          decoded_msg = decoded_msg + char;
        }
      }
    return decoded_msg;
  },
};
export default cipher;
