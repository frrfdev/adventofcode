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
  X: 1,
  Y: 2,
  Z: 3,
};

const shapeAdvantageDictionary = {
  X: 'Z', // X rock - Z scissors
  Y: 'X', // Y paper - X rock
  Z: 'Y', // Z scissors - Y paper
};

const normalizeElveShape = (elveShape) => {
  switch (elveShape) {
    case 'A':
      return 'X';
    case 'B':
      return 'Y';
    default:
      return 'Z';
  }
};

const exec = (input) => {
  const roundScores = input
    .map((round) => [normalizeElveShape(round[0]), round[1]])
    .map((round) => {
      const [elveShape, playerShape] = round;
      const shapeValue = shapeValueDictionary[playerShape];
      if (elveShape === playerShape) return shapeValue + 3;
      if (elveShape === shapeAdvantageDictionary[playerShape])
        return shapeValue + 6;

      return shapeValue;
    });
  console.log(roundScores);
  const totalScore = roundScores.reduce((acc, curr) => acc + curr);

  console.log(totalScore);
};
