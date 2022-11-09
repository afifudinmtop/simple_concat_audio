const simple_concat_audio = require("./app.js");

const input = ["./1.mp3", "./2.mp3", "./3.mp3"];
const output = "./output.mp3";

simple_concat_audio.concat(input, output);
