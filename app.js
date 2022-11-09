function concat(input, output) {
  const { exec } = require("child_process");

  // make var from array
  let list = "";
  input.forEach((element) => {
    list += element + "|";
  });

  // remove last |
  list = list.slice(0, -1);
  console.log(list);

  let command = `ffmpeg -i "concat:${list}" -acodec copy ${output}`;

  // begin concat
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}
module.exports = { concat };
