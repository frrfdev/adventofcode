const fs = require('fs');

fs.readFile('2022-2/input.txt', 'utf-8', (err, data) => {
  if (err) {
    // Handle the error
    console.log(err);
  } else {
    // The data variable contains the contents of the file as a string
    const dataArray = data.split(/\n/).map((str) => str.split(' '));
    console.log(dataArray);
    exec(dataArray);
  }
});

const shapeValueDictionary = {
  A: 1,
  B: 2,
  C: 3,
};

const shapeAdvantageDictionary = {
  A: { wins: 'C', loses: 'B' }, // rock
  B: { wins: 'A', loses: 'C' }, // paper
  C: { wins: 'B', loses: 'A' }, // scissors
};

const exec = (input) => {
  const roundScores = input.map((round) => {
    const [elveShape, requiredRoundResult] = round;
    switch (requiredRoundResult) {
      // lose
      case 'X':
        var requiredPlayerShape = shapeAdvantageDictionary[elveShape].wins;
        return shapeValueDictionary[requiredPlayerShape];
      // draw
      case 'Y':
        return shapeValueDictionary[elveShape] + 3;
      // win
      case 'Z':
        var requiredPlayerShape = shapeAdvantageDictionary[elveShape].loses;
        return shapeValueDictionary[requiredPlayerShape] + 6;
      default:
        return 0;
    }
  });
  const totalScore = roundScores.reduce((acc, curr) => acc + curr);

  console.log(totalScore);
};
