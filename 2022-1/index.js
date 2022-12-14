const fs = require('fs');

fs.readFile('2022-1/input.txt', 'utf-8', (err, data) => {
  if (err) {
    // Handle the error
    console.log(err);
  } else {
    // The data variable contains the contents of the file as a string
    const dataArray = data
      .split(/\n\s*\n/)
      .map((str) =>
        str.split('\n').map((numberString) => Number(numberString))
      );
    exec(dataArray);
  }
});

const exec = (input) => {
  const totalCal = input.map((elveCal) => {
    return elveCal.reduce((acc, curr) => acc + curr);
  });
  let topThreeCalories = 0;
  for (let i = 0; i < 3; i++) {
    const max = Math.max(...totalCal);
    topThreeCalories += max;
    totalCal.splice(totalCal.indexOf(max), 1);
  }
  console.log(topThreeCalories);
};
