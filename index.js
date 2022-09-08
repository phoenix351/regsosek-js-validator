const constraint = {
  r101: {
    filled: {
      type: 0,
    },
    min: 1,
    format_number: true,
  },
  r102: {
    filled: {
      type: 0,
    },
    min: 1,
    format_number: true,
  },
  r103: {
    filled: {
      type: 0,
    },
    min: 1,
    format_number: true,
  },
  r104: {
    filled: {
      type: 0,
    },
    min: 1,
    format_number: true,
  },
  r105: {
    filled: {
      type: 0,
    },
    min: 1,
    format_number: true,
  },
  r106: {
    filled: {
      type: 0,
    },
  },
  r108: {
    filled: {
      type: 0,
    },
    alphabet_only: true,
  },
  r110: {
    filled: {
      type: 0,
    },
    min: 1,
    format_number: true,
  },
  r111: {
    filled: {
      type: 0,
    },
    min: 1,
    format_number: true,
  },
  r112: {
    filled: {
      type: 0,
    },
    min: 1,
    format_number: true,
  },
  r114: {
    filled: {
      type: 0,
    },
    length: 16,
    format_number: true,
  },
  r115: {
    filled: {
      type: 0,
    },
    format_number: true,
  },
  r301a: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 5,
    format_number: true,
  },
  r301b: {
    filled: {
      type: "1",
      constraint: [
        {
          variableIndependent: "r301a",
          value: 1,
          operator: "=",
          blok4: false,
        },
      ],
    },
    min: 1,
    max: 6,
    format_number: true,
  },
  r302: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 997,
    format_number: true,
  },
  r303: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 9,
    format_number: true,
  },
  r304: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 7,
    format_number: true,
  },
  r305: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 8,
    format_number: true,
  },
  r306a: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 11,
    format_number: true,
  },
  r306b: {
    filled: {
      type: "1",
      constraint: [
        {
          variableIndependent: "r306a",
          value: [4, 5, 6, 7, 8],
          operator: "in",
          blok4: false,
        },
      ],
    },
    min: 1,
    max: 8,
    format_number: true,
  },
  r307a: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 4,
    format_number: true,
  },
  r307b1: {
    filled: {
      type: "1",
      constraint: [
        {
          variableIndependent: "r307a",
          value: 1,
          operator: "=",
          blok4: false,
        },
      ],
    },
    min: 1,
    max: 5,
    format_number: true,
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
    format_number: true,
  },
  r308: {
    filled: {
      type: 0,
    },
    min: 0,
    max: 11,
    format_number: true,
  },
  r309a: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 6,
    format_number: true,
  },
  r309b: {
    filled: {
      type: "1",
      constraint: [
        {
          variableIndependent: "r309a",
          value: [1, 2, 3],
          operator: "in",
          blok4: false,
        },
      ],
    },
    min: 1,
    max: 4,
    format_number: true,
  },
  r310: {
    filled: {
      type: "1",
      constraint: [
        {
          variableIndependent: "r309a",
          value: [1, 2, 3],
          operator: "in",
          blok4: false,
        },
      ],
    },
    min: 1,
    max: 6,
    format_number: true,
  },
  r501a: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
  },
  r501b: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
  },
  r501c: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
  },
  r501d: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
  },
  r501e: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
  },
  r501a_bln: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 12,
    format_number: true,
  },
  r501a_thn: {
    filled: {
      type: 0,
    },
    min: 2021,
    max: 2022,
    format_number: true,
    program: true,
    bulan: "r501a_bln",
  },
  r501b_bln: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 12,
    format_number: true,
  },
  r501b_thn: {
    filled: {
      type: 0,
    },
    min: 2021,
    max: 2022,
    format_number: true,
    program: true,
    bulan: "r501b_bln",
  },
  r501c_bln: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 12,
    format_number: true,
  },
  r501c_thn: {
    filled: {
      type: 0,
    },
    min: 2021,
    max: 2022,
    format_number: true,
    program: true,
    bulan: "r501c_bln",
  },
  r501d_bln: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 12,
    format_number: true,
  },
  r501d_thn: {
    filled: {
      type: 0,
    },
    min: 2021,
    max: 2022,
    format_number: true,
    program: true,
    bulan: "r501d_bln",
  },
  r501e_bln: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 12,
    format_number: true,
  },
  r501e_thn: {
    filled: {
      type: 0,
    },
    min: 2021,
    max: 2022,
    format_number: true,
    program: true,
    bulan: "r501e_bln",
  },

  r502a: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
  },
  r502b: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
    butuh_listrik: true,
  },
  r502c: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
    butuh_listrik: true,
  },
  r502d: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
    butuh_listrik: true,
  },
  r502e: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
  },
  r502f: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
    butuh_listrik: true,
  },
  r502g: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
  },
  r502h: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
    butuh_listrik: true,
  },
  r502i: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
  },
  r502j: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
  },
  r502k: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
  },
  r502l: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
  },
  r502m: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
  },
  r502n: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
  },
  r503a: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
  },
  r503b: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
  },

  r504a: {
    filled: {
      type: 0,
    },
    min: 0,
    max: 999,
    format_number: true,
  },
  r504a: {
    filled: {
      type: 0,
    },
    min: 0,
    max: 999,
    format_number: true,
  },
  r504a: {
    filled: {
      type: 0,
    },
    min: 0,
    max: 999,
    format_number: true,
  },
  r504a: {
    filled: {
      type: 0,
    },
    min: 0,
    max: 999,
    format_number: true,
  },
  r504a: {
    filled: {
      type: 0,
    },
    min: 0,
    max: 999,
    format_number: true,
  },
  r505: {
    filled: {
      type: 0,
    },
    min: 0,
    max: 3,
    format_number: true,
  },
  r506: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
  },

  //blok 4
  blok_4: {
    r401: {
      filled: {
        type: 0,
      },
      min: 1,
      max: "r112",
      format_number: true,
    },
    r402: {
      filled: {
        type: 0,
      },
      alphabet_only: true,
    },
    r403: {
      filled: {
        type: 0,
      },
      length: 16,
      format_number: true,
    },
    r404: {
      filled: {
        type: 0,
      },
      min: 1,
      max: 5,
      format_number: true,
    },
    r405: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 4],
            operator: "in",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 2,
      format_number: true,
    },
    r406tgl: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 4],
            operator: "in",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 31,
      format_number: true,
    },
    r406bln: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 4],
            operator: "in",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 12,
      format_number: true,
    },
    r406thn: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 4],
            operator: "in",
            blok4: true,
          },
        ],
      },
      min: 1900,
      max: 2023,
      format_number: true,
    },
    r407: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 4],
            operator: "in",
            blok4: true,
          },
        ],
      },
      min: 0,
      max: 98,
      format_number: true,
    },
    r408: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 4],
            operator: "in",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 4,
      format_number: true,
    },
    r409: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 4],
            operator: "in",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 8,
      format_number: true,
    },
    //wanita alias r405 = 2
    //usia 10-54 alias 10 < r407 < 55
    //408 = [2,3,4]
    r410: {
      filled: "wanita_produktif",
      min: 1,
      max: 2,
    },
    r411: {
      filled: {
        type: 0,
      },
      min: 0,
      max: 5,
    },
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
  r301b: 1,
  r302: 1400,
  r303: 2,
  r304: 2,
  r305: 2,
  r306a: 12,
  r306b: 1,
  r307a: 4,
  r307b1: 1,
  r307b2: null,
  r307b3: null,
  r308: 4,
  r309a: 6,
  r309b: 1,
  r310: 1,
  blok_4: [
    {
      r401: "1",
      r402: "Muhammad Putr",
      r403: "7103091912880021",
      r404: 1,
      r405: 2,
      r406tgl: 19,
      r406bln: 12,
      r406thn: 1988,
      r407: 33,
      r408: 2,
      r409: 1,
      r411: 5,
    },
    {
      r401: "2",
      r402: "Aisyah Putri",
      r403: "",
      r404: 7,
      r405: 7,
      r406tgl: 13,
      r406bln: 12,
      r406thn: 1998,
      r407: 23,
      r408: 2,
      r409: 1,
      r410: 1,
      r411: 5,
    },
  ],
  r501a: 1,
  r501b: 1,
  r501c: 1,
  r501d: 1,
  r501e: 1,

  r501a_bln: 11,
  r501b_bln: 9,
  r501c_bln: 10,
  r501d_bln: 10,
  r501e_bln: 10,

  r501a_thn: 2022,
  r501b_thn: 2021,
  r501c_thn: 2022,
  r501d_thn: 2022,
  r501e_thn: 2022,

  r502a: 1,
  r502b: 1,
  r502c: 1,
  r502d: 2,
  r502e: 1,
  r502f: 2,
  r502g: 1,
  r502h: 2,
  r502i: 1,
  r502j: 1,
  r502k: 1,
  r502l: 1,
  r502m: 2,
  r502n: 2,

  r503a: 1,
  r503b: 1,

  r504a: 34,
  r504b: 0,
  r504c: 35,
  r504d: 99,
  r504e: 23,

  r505: 1,

  r506: 1,
};
const isian_2 = {};

console.log(getErrorList(isian, constraint));
