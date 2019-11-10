const criteria = [
  {
    desc: "Mutiples of 2",
    criteria: (x) => {
      if ((x % 2) == 0) {
        return true;
      }
      else {
        return false;
      }
    },
  },
  {
    desc: "Mutiples of 3",
    criteria: (x) => {
      if ((x % 3) == 0) {
        return true;
      }
      else {
        return false;
      }
    },
  },
  {
    desc: "Multiples of 5",
    criteria: (x) => {
      if ((x % 5) === 0) {
        return true;
      }
      else {
        return false;
      }
    },
  },
  {
    desc: "Multiples of 7",
    criteria: (x) => {
      if ((x % 7) === 0) {
        return true;
      }
      else {
        return false;
      }
    },
  },
  {
    desc: "Multiples of 13",
    criteria: (x) => {
      if ((x % 13) === 0) {
        return true;
      }
      else {
        return false;
      }
    },
  },
  {
    desc: "Factors of 144",
    criteria: (x) => {
      if ((144 % x) === 0) {
        return true;
      }
      else {
        return false;
      }
    },
  },
  {
    desc: "Factors of 338",
    criteria: (x) => {
      if ((338 % x) === 0) {
        return true;
      }
      else {
        return false;
      }
    },
  },
  {
    desc: "Factors of 385",
    criteria: (x) => {
      if ((385 % x) === 0) {
        return true;
      }
      else {
        return false;
      }
    },
  },
  {
    desc: "Factors of 378",
    criteria: (x) => {
      if ((378 % x) === 0) {
        return true;
      }
      else {
        return false;
      }
    },
  }
];

exports.getCriteria = () => {
  return criteria[Math.floor(Math.random()*criteria.length-1)];
}

exports.generateBoard = ({criteria}) => {
  let ansArray = [];
  for (let j = 0; ansArray.length < 30; j++) {
    if (ansArray.length < 16) {
      let y = Math.floor(Math.random() * 400);
      if (criteria(y) === true) {
        ansArray.push(y);
      }
    }
    else if (ansArray.length > 14) {
      let z = Math.floor(Math.random() * 400);
      if (criteria(z) === false) {
        ansArray.push(z);
      }
    }

  }
  let t = scrambleBoard(ansArray);
  
  return t;
}

function scrambleBoard(answers){
  return answers.sort(() => Math.random() - 0.5);
}