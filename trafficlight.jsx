function red() {
  console.log("red");
}

function green() {
  console.log("green");
}

function yellow() {
  console.log("yellow");
}

const light = (timer, callback) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      callback(), resolve();
    }, timer)
  );
};

const trafficlight = () => {
  Promise.resolve()
    .then(() => light(3000, red))
    .then(() => light(2000, green))
    .then(() => light(1000, yellow))
    .then(() => trafficlight());
};

trafficlight();
