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
    // Keterangan Demografi

    // Nomor urut anggota keluarga
    r401: {
      filled: {
        type: 0,
      },
      min: 1,
      max: "r112",
      format_number: true,
    },
    //nama anggota keluarga
    r402: {
      filled: {
        type: 0,
      },
      alphabet_only: true,
    },
    //nik
    r403: {
      filled: {
        type: 0,
      },
      length: 16,
      format_number: true,
    },
    //keterangan keberadaan anggota keluarga
    r404: {
      filled: {
        type: 0,
      },
      min: 1,
      max: 5,
      format_number: true,
    },
    //jenis kelamin
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
    //tanggal lahir
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
    //bulan lahir
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
    //tahun lahir
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
    //umur
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
    //status perkaawinan
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
    //status hubungan dengan kepala keluarga
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

    //status kehamilan
    r410: {
      filled: {
        type: "1",
        constraint: [
          {
            nama: "wanita fertil",
            operator: "special",
            blok4: true,
          },
        ],

        min: 1,
        max: 2,
        format_number: true,
      },
    },
    // kartu identitas
    r411: {
      filled: {
        type: 0,
      },
      min: 0,
      max: 5,
      format_number: true,
    },

    // B. Pendidikan

    //partisipasi sekolah

    r412: {
      filled: {
        type: 0,
      },
      min: 1,
      max: 3,
      format_number: true,
    },
    //jenjang tertinggi yang pernah diduduki
    r413: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r412",
            value: [2, 3],
            operator: "in",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 23,
      format_number: true,
    },
    // kelas tertinggi
    r414: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r412",
            value: [2, 3],
            operator: "in",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 8,
      format_number: true,
    },
    //ijazah tertinggi
    r415: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r412",
            value: [2, 3],
            operator: "in",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 23,
      format_number: true,
    },
    //C. Ketenagakerjaan

    //apakah bekerja/membantu ?
    r416a: {
      filled: {
        type: 0,
      },
      min: 1,
      max: 2,
      format_number: true,
    },
    // jam kerja
    r416b: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r416a",
            value: 1,
            operator: "=",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 99,
      format_number: true,
    },
    //lapangan usaha
    r417: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r416a",
            value: 1,
            operator: "=",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 26,
      format_number: true,
    },
    //status pekerjaan utama
    r418: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r416a",
            value: 1,
            operator: "=",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 8,
      format_number: true,
    },
    //punya npwp ?
    r419: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r416a",
            value: 1,
            operator: "=",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 3,
      format_number: true,
    },
    // D. Kepemilikan usaha

    //apakah memliki ?
    r420: {
      filled: {
        type: 0,
      },
      min: 1,
      max: 2,
      format_number: true,
    },
    //lapangan usaha dari usaha
    r421: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r420",
            value: 1,
            operator: "=",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 26,
      format_number: true,
    },
    //jumlah pekerja dibayar
    r422: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r420",
            value: 1,
            operator: "=",
            blok4: true,
          },
        ],
      },
      min: 0,
      max: 999,
      format_number: true,
    },
    //jumlah pekerja tidak dibayar
    r423: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r420",
            value: 1,
            operator: "=",
            blok4: true,
          },
        ],
      },
      min: 0,
      max: 99,
      format_number: true,
    },
    //kepemilikan perizinan usaha
    r424: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r420",
            value: 1,
            operator: "=",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 12,
      format_number: true,
    },
    //omzet
    r425: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r420",
            value: 1,
            operator: "=",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 7,
      format_number: true,
    },
    //penggunaan internet  dalam usaha
    r426: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r420",
            value: 1,
            operator: "=",
            blok4: true,
          },
        ],
      },
      min: 0,
      max: 32,
      format_number: true,
    },

    // E. Kesehatan

    //status gizi anak
    r427: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r407",
            value: 5,
            operator: "<",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 8,
      format_number: true,
    },
    //melihat
    r428a: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r407",
            value: 1,
            operator: ">",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 4,
      format_number: true,
    },
    //mendengar
    r428b: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r407",
            value: 1,
            operator: ">",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 4,
      format_number: true,
    },
    //mobilitas
    r428c: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r407",
            value: 1,
            operator: ">",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 4,
      format_number: true,
    },
    //motorik halus
    r428d: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r407",
            value: 1,
            operator: ">",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 4,
      format_number: true,
    },
    //belajar
    r428f: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r407",
            value: 1,
            operator: ">",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 4,
      format_number: true,
    },
    //komunikasi
    r428g: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 4,
      format_number: true,
    },
    // mengurus diri sendiri
    r428h: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 4,
      format_number: true,
    },
    //mengingat/konsentrasi
    r428i: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 4,
      format_number: true,
    },
    //kesedihan dan depresi
    r428j: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 4,
      format_number: true,
    },

    //apakah ada pengasuh ?
    r429: {
      filled: {
        type: "1",
        constraint: [
          {
            nama: "elderOrDifable",
            operator: "special",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 2,
      format_number: true,
    },
    //penyakit kronis/menahun
    r430: {
      filled: {
        type: 0,
      },
      min: 1,
      max: 18,
      format_number: true,
    },

    //jaminan kesehatan
    r431a: {
      filled: {
        type: "0",
      },
      min: 1,
      max: 15,
      allowNullAs99: true,
      format_number: true,
    },
    // prakerja
    r431b: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 8,
      tuple_num: [1, 2, 8],
      format_number: true,
    },
    //kur
    r431c: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 8,
      tuple_num: [1, 2, 8],
      format_number: true,
    },
    //pembiayaan umi
    r431d: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 8,
      tuple_num: [1, 2, 8],
      format_number: true,
    },
    //pip
    r431e: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r407",
            value: { min: 5, max: 30 },
            operator: "minMax",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 8,
      tuple_num: [1, 2, 8],
      format_number: true,
    },
    // jaminan ketenagakerjaan
    r431f: {
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r407",
            value: 14,
            operator: ">",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 31,
      allowNullAs99: true,
      format_number: true,
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
  r114: 3020811310980001,
  r115: 1,
  r301a: 1,
  r301b: 1,
  r302: 400,
  r303: 2,
  r304: 2,
  r305: 2,
  r306a: 7,
  r306b: 1,
  r307a: 1,
  r307b1: 1,
  r307b2: null,
  r307b3: null,
  r308: 4,
  r309a: 1,
  r309b: 1,
  r310: 1,

  blok_4: [
    {
      id: 1,
      r401: 1,
      r402: "Muhammad Putra",
      r403: 7103091912880021,
      r404: 1,
      r405: 2,
      r406tgl: 19,
      r406bln: 12,
      r406thn: 1988,
      r407: 29,
      r408: 2,
      r409: 4,
      r410: undefined,
      r411: 4,
      r412: 3,
      r413: 19,
      r414: 8,
      r415: 19,
      r416a: 1,
      r416b: 30,
      r417: 23,
      r418: 1,
      r419: 1,
      r420: 1,
      r421: 23,
      r422: 231,
      r423: 10,
      r424: 3,
      r425: 3,
      r426: 32,
      r427: 3,
      r428a: 4,
      r428b: 4,
      r428c: 1,
      r428d: 4,
      r428e: 4,
      r428f: 4,
      r428g: 4,
      r428h: 4,
      r428i: 4,
      r428j: 4,
      r429: 1,
      r430: 1,
      r431a: 8,
      r431b: 1,
      r431c: 1,
      r431d: 2,
      r431e: 1,
      r431f: 99,
    },
    {
      id_art: 2,
      r401: "2",
      r402: "Aisyah Putri",
      r403: 3302081310980001,
      r404: 1,
      r405: 1,
      r406tgl: 13,
      r406bln: 12,
      r406thn: 1990,
      r407: 20,
      r408: 1,
      r409: 1,
      r410: null,
      r411: 1,
      r412: 3,
      r413: 19,
      r414: 8,
      r415: 19,
      r416a: 1,
      r416b: 30,
      r417: 23,
      r418: 1,
      r419: 1,
      r420: 1,
      r421: 23,
      r422: 231,
      r423: 10,
      r424: 10,
      r425: 3,
      r426: 32,
      r427: 3,
      r428a: 4,
      r428b: 4,
      r428c: 4,
      r428d: 4,
      r428e: 4,
      r428f: 4,
      r428g: 4,
      r428h: 2,
      r428i: 4,
      r428j: 4,
      r429: 2,
      r430: 1,
      r431a: 8,
      r431b: 1,
      r431c: 1,
      r431d: 2,
      r431e: undefined,
      r431f: 20,
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

  r501a_thn: 2021,
  r501b_thn: 2022,
  r501c_thn: 2022,
  r501d_thn: 2022,
  r501e_thn: 2022,

  r502a: 2,
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
