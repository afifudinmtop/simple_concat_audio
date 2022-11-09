# simple_concat_audio

simple concat / combine audio file using ffmpeg

## Installation

```
npm i simple_concat_audio
```

## Demo

Local demo:

```
git clone https://github.com/afifudinmtop/simple_concat_audio.git
cd simple_concat_audio
npm install && node test.js

// it will concat the audios, and create a new audio file
// please change the input and output variable to get different result
```

## Examples

```jsx
const simple_concat_audio = require("simple_concat_audio");

const input = ["./audio/1.mp3", "./audio/2.mp3", "./audio/3.mp3"];
const output = "./audio/output.mp3";

simple_concat_audio.concat(input, output);

// it will concat the audios, and create a new audio file
// please change the input and output variable to get different result
```

// you can see the example files on test.js

## License

simple_concat_audio is open source software [licensed as MIT](https://github.com/afifudinmtop/simple_concat_audio/blob/main/LICENSE).
