function isToEmoji(code) {
  return code
    .split("")
    .map((letter) => String.fromCodePoint(letter.charCodeAt(0) - 65 + 0x1f1e6))
    .join("");
}
isToEmoji("IN");
