const simple_concat_audio = require("./app.js");

const input = ["./audio/1.mp3", "./audio/2.mp3", "./audio/3.mp3"];
const output = "./audio/output.mp3";

simple_concat_audio.concat(input, output);
