const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", answer => {
  let name = answer;

  rl.question("What's your favourite colour? ", answer => {
    let colour = answer;

    rl.question("What's your favourite sport? ", answer => {
      let sport = answer;

      rl.question("Where are you from? ", answer => {
        let location = answer;

        process.stdout.write(
          `Hi ${name}. Very nice to meet you. We like your colour choice of ${colour}. I've never tried ${sport}, but I've always wanted to. Nice of you to join us from ${location}.\n`
        );

        rl.close();
      });
    });
  });
});
