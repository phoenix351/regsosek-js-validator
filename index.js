const constraint = {
  r101: {
    filled: true,
  },
  r102: {
    filled: true,
  },
  r103: {
    filled: true,
  },
  r104: {
    filled: true,
  },
  r105: {
    filled: true,
  },
  r106: {
    filled: true,
  },
  r108: {
    filled: true,
  },
  r110: {
    filled: true,
  },
  r111: {
    filled: true,
  },
  r112: {
    filled: true,
  },
  r115: {
    filled: true,
    length: 16,
  },
  r115: {
    filled: true,
  },
  r301a: {
    filled: true,
  },
  r301b: {
    filled: { r301a: [1] },
    min: 1,
    max: 6,
  },
  r302: {
    filled: true,
    min: 1,
    max: 997,
  },
  r303: {
    filled: true,
    min: 1,
    max: 9,
  },
  r304: {
    filled: true,
    min: 1,
    max: 7,
  },
  r305: {
    filled: true,
    min: 1,
    max: 8,
  },
  r306a: {
    filled: true,
    min: 1,
    max: 11,
  },
  r306b: {
    filled: { r306a: [4, 5, 6, 7, 8] },
    min: 1,
    max: 8,
  },
  r307a: {
    filled: true,
    min: 1,
    max: 4,
  },
  r307b1: {
    filled: { r307a: [1] },
    min: 1,
    max: 5,
  },
  r307b2: {
    filled: false,
    min: 1,
    max: 5,
  },
  r307b3: {
    filled: false,
    min: 1,
    max: 5,
  },
  r308: {
    filled: true,
    min: 0,
    max: 11,
  },
  r309a: {
    filled: true,
    min: 1,
    max: 6,
  },
  r309b: {
    filled: { r309a: [1, 2, 3] },
    min: 1,
    max: 4,
  },
  r310: {
    filled: { r309a: [1, 2, 3] },
    min: 1,
    max: 6,
  },
};
const isian = {
  r101: "71",
  r102: "71",
  r103: "010",
  r104: "100",
  r105: "000001",
  r106: "Lingkungan 4",
  r108: "Safe Care",
  r110: "010",
  r111: 1,
  r112: 7,
  r301a: 2,
  r301b: 2,
  r302: 1400,
  r303: 2,
  r304: 2,
  r305: 2,
  r306a: 10,
  r306b: 10,
  r307a: 1,
  r307b1: undefined,
  r307b2: null,
  r307b3: null,
  r308: 3,
  r309a: 5,
  r309b: 2,
  r310: 3,
};
const isian_2 = {};

console.log(getErrorList(isian, constraint));
