const CONSTRAINT = {
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
    max: 3,
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
    min: 0,
    max: 2,
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
  r501f: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
  },
  r501g: {
    filled: {
      type: 0,
    },
    min: 1,
    max: 2,
    format_number: true,
  },

  r501a_bln: {
    filled: { type: false },
    min: 1,
    max: 12,
    nullValue: 98,
    format_number: true,
  },
  r501a_thn: {
    filled: { type: false },
    min: 2021,
    max: 2022,
    format_number: true,
    program: true,
    bulan: "r501a_bln",
  },
  r501b_bln: {
    filled: { type: false },
    min: 1,
    max: 12,
    nullValue: 98,
    format_number: true,
  },
  r501b_thn: {
    filled: { type: false },
    min: 2021,
    max: 2022,
    format_number: true,
    program: true,
    bulan: "r501b_bln",
  },
  r501c_bln: {
    filled: { type: false },
    min: 1,
    max: 12,
    nullValue: 98,
    format_number: true,
  },
  r501c_thn: {
    filled: { type: false },
    min: 2021,
    max: 2022,
    format_number: true,
    program: true,
    bulan: "r501c_bln",
  },
  r501d_bln: {
    filled: {
      type: "1",
      constraint: [
        {
          variableIndependent: "r307b1",
          value: 1,
          operator: "=",
          blok4: false,
        },
      ],
    },
    min: 1,
    max: 12,
    nullValue: 98,
    format_number: true,
  },
  r501d_thn: {
    filled: {
      type: "1",
      constraint: [
        {
          variableIndependent: "r307b1",
          value: 1,
          operator: "=",
          blok4: false,
        },
      ],
    },
    min: 2021,
    max: 2022,
    format_number: true,
    program: true,
    bulan: "r501d_bln",
  },
  r501e_bln: {
    filled: { type: false },
    min: 1,
    max: 12,
    nullValue: 98,
    format_number: true,
  },
  r501e_thn: {
    filled: { type: false },
    min: 2021,
    max: 2022,
    format_number: true,
    program: true,
    bulan: "r501e_bln",
  },
  r501f_bln: {
    filled: { type: false },
    min: 1,
    max: 12,
    nullValue: 98,
    format_number: true,
  },
  r501f_thn: {
    filled: { type: false },

    min: 2021,
    max: 2022,
    format_number: true,
    program: true,
    bulan: "r501f_bln",
  },
  r501g_bln: {
    filled: { type: false },
    min: 1,
    max: 12,
    nullValue: 98,
    format_number: true,
  },
  r501g_thn: {
    filled: { type: false },
    min: 2021,
    max: 2022,
    format_number: true,
    program: true,
    bulan: "r501g_bln",
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
    max: 4,
    format_number: true,
  },
  pengeluaran: {
    filled: {
      type: "1",
      constraint: [
        {
          variableIndependent: "r111",
          value: [1, 2],
          operator: "in",
          blok4: false,
        },
      ],
    },
    min: 1000,
    format_number: true,
  },

  //blok 4
  blok_4: {
    // Keterangan Demografi

    // Nomor urut anggota keluarga
    r401: {
      blok4: true,
      filled: {
        type: 0,
      },
      min: 1,
      format_number: true,
    },
    //nama anggota keluarga
    r402: {
      blok4: true,
      filled: {
        type: 0,
        blok4: true,
      },
      alphabet_only: true,
    },
    //nik
    r403: {
      blok4: true,
      filled: {
        type: 0,
      },
      length: 16,
      format_number: true,
    },
    //keterangan keberadaan anggota keluarga
    r404: {
      blok4: true,
      filled: {
        type: 0,
      },
      min: 1,
      max: 6,
      format_number: true,
    },
    //jenis kelamin
    r405: {
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 31,
      nullValue: 98,
      format_number: true,
    },
    //bulan lahir
    r406bln: {
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 12,
      nullValue: 98,
      format_number: true,
    },
    //tahun lahir
    r406thn: {
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
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
      blok4: true,
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
        ],
      },
      min: 0,
      max: 5,
      format_number: true,
    },

    // B. Pendidikan

    //partisipasi sekolah

    r412: {
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 3,
      format_number: true,
    },
    //jenjang tertinggi yang pernah diduduki
    r413: {
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
          {
            variableIndependent: "r412",
            value: [2, 3],
            operator: "in",
            blok4: true,
          },
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
          {
            variableIndependent: "r412",
            value: [2, 3],
            operator: "in",
            blok4: true,
          },
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
      format_number: true,
    },
    //ijazah tertinggi
    r415: {
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
          {
            variableIndependent: "r412",
            value: [2, 3],
            operator: "in",
            blok4: true,
          },
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 2,
      format_number: true,
    },
    // jam kerja
    r416b: {
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
            blok4: true,
          },
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
            blok4: true,
          },
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

    r417_desk: {
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
            blok4: true,
          },
          {
            variableIndependent: "r416a",
            value: 1,
            operator: "=",
            blok4: true,
          },
        ],
      },
    },
    //status pekerjaan utama
    r418: {
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
            blok4: true,
          },
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 2,
      format_number: true,
    },
    //lapangan usaha dari usaha
    r421: {
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
            blok4: true,
          },
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
    r421_desk: {
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
            blok4: true,
          },
          {
            variableIndependent: "r420",
            value: 1,
            operator: "=",
            blok4: true,
          },
        ],
      },
    },
    //jumlah pekerja dibayar
    r422: {
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
            blok4: true,
          },
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
            blok4: true,
          },
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
            blok4: true,
          },
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
            blok4: true,
          },
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
          {
            variableIndependent: "r407",
            value: 4,
            operator: ">",
            blok4: true,
          },
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
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
      blok4: true,
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
      max: 3,
      format_number: true,
    },

    // r429: {
    //   blok4: true,
    //   filled: {
    //     type: "or",
    //     constraint: [
    //       {
    //         variableIndependent: "r407",
    //         value: 59,
    //         operator: ">",
    //         blok4: true,
    //       },
    //       {
    //         variableIndependent: "r428a",
    //         value: [1, 2],
    //         operator: "in",
    //         blok4: true,
    //       },
    //       {
    //         variableIndependent: "r428b",
    //         value: [1, 2],
    //         operator: "in",
    //         blok4: true,
    //       },
    //       {
    //         variableIndependent: "r428c",
    //         value: [1, 2],
    //         operator: "in",
    //         blok4: true,
    //       },
    //       {
    //         variableIndependent: "r428d",
    //         value: [1, 2],
    //         operator: "in",
    //         blok4: true,
    //       },
    //       {
    //         variableIndependent: "r428e",
    //         value: [1, 2],
    //         operator: "in",
    //         blok4: true,
    //       },
    //       {
    //         variableIndependent: "r428f",
    //         value: [1, 2],
    //         operator: "in",
    //         blok4: true,
    //       },
    //       {
    //         variableIndependent: "r428g",
    //         value: [1, 2],
    //         operator: "in",
    //         blok4: true,
    //       },
    //       {
    //         variableIndependent: "r428h",
    //         value: [1, 2],
    //         operator: "in",
    //         blok4: true,
    //       },
    //       {
    //         variableIndependent: "r428i",
    //         value: [1, 2],
    //         operator: "in",
    //         blok4: true,
    //       },
    //       {
    //         variableIndependent: "r428j",
    //         value: [1, 2],
    //         operator: "in",
    //         blok4: true,
    //       },
    //     ],
    //   },
    //   min: 1,
    //   max: 2,
    //   format_number: true,
    // },

    //penyakit kronis/menahun
    r430: {
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
        ],
      },
      min: 1,
      max: 18,
      format_number: true,
    },

    //jaminan kesehatan
    r431a: {
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
        ],
      },
      min: 0,
      max: 15,
      nullValue: 99,
      format_number: true,
    },
    // prakerja
    r431b: {
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
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
      blok4: true,
      filled: {
        type: "1",
        constraint: [
          {
            variableIndependent: "r404",
            value: [1, 5],
            operator: "in",
            blok4: true,
          },
          {
            variableIndependent: "r407",
            value: 14,
            operator: ">",
            blok4: true,
          },
        ],
      },
      min: 0,
      max: 31,
      nullValue: 99,
      format_number: true,
    },
  },
};
function arrayToString(ar) {
  pesan = "";
  if (ar.length > 0) {
    for (let x in ar) {
      if (x == 0) {
        pesan = pesan + String(ar[x]);
      } else if (x == ar.length - 1) {
        pesan = pesan + ` atau ${String(ar[x])}`;
      } else {
        pesan = pesan + ` , ${String(ar[x])}`;
      }
    }
  }
  return pesan;
}
const goToAnggotaKeluargaVariable = (id) => {
  openModal(`./index.php?r=krt/updateart&id=${id}`);
  //setTimeOut(document.getElementById(variableName).scrollIntoView(), 0);
  return 0;
};
const isAlphabetString = (kata) => /^[a-zA-Z\s]+$/.test(kata);
const isBlankChar = (char) => String(char).length < 1 || char == null;
// const setLink = (namaVar) => `<a href="#${namaVar}">${namaVar}</a>`;
const setLink = (variableName, id = 0, art = false, href = "") => {
  let variableLink = "";
  if (href.length > 0) {
    variableLink = `<a href="#${href}">${variableName}</a>`;

    return variableLink;
  }
  if (!art) {
    variableLink = `<a href="#${variableName}">${variableName}</a>`;
    return variableLink;
  } else {
    variableLink = `<a href="#" onClick="goToAnggotaKeluargaVariable('${id}')">${variableName}</a>`;
    return variableLink;
  }
};
function charCheck(char) {
  /* char : {
        variableDependent : nama variable
        len : panjang karakter
        value : nilai variable
        alphabet_only : apakah hanya berisi alphabet
        tuple : cek variable apakah ada pada array ? 
    }
    
    
    */
  let pesan = "";
  let variableDependentLink = setLink(char.variableDependent, char.id);

  if (char.len && String(char.value).length != char.len) {
    pesan += `Isian ${variableDependentLink} panjangnya harus ${char.len} karakter`;
    return pesan;
  } else if (char.alphabet_only && !isAlphabetString(char.value)) {
    pesan += `Isian ${variableDependentLink}  hanya boleh berisi alphabet dan spasi `;
    return pesan;
  } else if (char.tuple && char.tuple.includes(char.value)) {
    pesan += `Isian ${variableDependentLink} harus bernilai ${arrayToString(
      char.tuple
    )}`;
  }
  return pesan;
}

function numCheck(numeric, value) {
  /*
    numeric : {
        variableDependent : nama variable
        
        min : minimal,
        max : maksimal,
        format_number : true
        program:true
        bulan: berapa
        butuh_listrik: false,
        nilai_listrik: 4,
        nilai_gas : 1
        tuple_num : false
        nullValue : false

    }
    value : nilai variable,
    */

  let pesan = "";
  let variableDependentLink = setLink(numeric.variableDependent, numeric.id);
  let r308Link = setLink("r308");

  //cek apakah bertipe numeric

  if (numeric.format_number) {
    // coba format ke number
    value_converted = Number(value);

    //jika nan maka return error
    if (String(Number(value_converted)).toLowerCase() == "nan") {
      pesan += `Isian ${variableDependentLink} harus berisikan angka`;
      return pesan;
    }
  }

  //cek min

  //periksa bulan dan tahun
  if (numeric.program == true) {
    //case lebih dari  oktober 2022
    if ((value == 2022 && numeric.bulan > 10) || value > 2022) {
      pesan += `Isian ${variableDependentLink} lebih dari periode yang telah ditetapkan (Oktober 2022)`;
      return pesan;
    } else if ((value == 2021 && numeric.bulan < 10) || value < 2021) {
      pesan += `Isian ${variableDependentLink} kurang dari periode yang telah ditetapkan (Oktober 2021)`;
      return pesan;
    }
  }

  // cek min jika min > 0
  if (numeric.min > 0) {
    if (value < numeric.min) {
      pesan += `Isian ${variableDependentLink} tidak boleh kurang dari ${numeric.min}`;
      return pesan;
    }
  }

  //cek max jika nilai max lebih dari 0

  if (numeric.max > 0) {
    let isMoreThanMax = value > numeric.max;
    let isEqualsWithNullValue = value == numeric.nullValue;
    let isNullValue = numeric.nullValue;
    if (isMoreThanMax && !(isEqualsWithNullValue && isNullValue)) {
      pesan += `Isian ${variableDependentLink} tidak boleh lebih dari ${numeric.max}`;
      return pesan;
    }
  }

  // cek apakah ada variable tuple ?
  if (numeric.tuple_num) {
    let tupleString = numeric.tuple_num.map((val) => String(val));
    let valueString = String(value);
    let logika = !tupleString.includes(valueString);
    if (logika) {
      pesan += `Isian ${variableDependentLink} tidak bernilai ${arrayToString(
        tupleString
      )}`;
      return pesan;
    }
  }

  //cek apakah butuh listrik namun tidak ada listrik di r307
  let listrik_cek = numeric.butuh_listrik && numeric.nilai_listrik == 4;
  if (listrik_cek) {
    pesan += `Isian ${variableDependentLink} bernilai 1 maka isian ${setLink(
      "r307"
    )} tidak boleh bernilai 4`;
    return pesan;
  }

  // kasus gas >= 5,5 kg

  if (numeric.variableDependent == "r502a") {
    // console.log({ value, gas: numeric.nilai_gas });
    //cek kasus
    if (value != 1 && [2, 3].includes(Number(numeric.nilai_gas))) {
      // kasus 2; r308 2 atau 3 namun r502 != 1
      pesan += `Isian ${variableDependentLink} tidak bernilai 1 namun ${r308Link} bernilai 2 atau 3`;
    }
  }

  return pesan;
}
function handleSpecialConstraint(constraintName, constraintObject, id = 0) {
  let errorList = [];
  let isRequired = false;

  if (constraintName == "elderOrDifable") {
    /*
    constraintObject : {
      r407
      428 a- j
      r429

    }
    */
    let {
      r407,
      r428a,
      r428b,
      r428c,
      r428d,
      r428e,
      r428f,
      r428g,
      r428h,
      r428i,
      r428j,
      r429,
      variableDependent,
    } = constraintObject;
    const isBlank = isBlankChar(r429);
    let isDifable = false;
    let lastPropDifable = "";
    let r407Link = setLink("r407", id);
    let r429Link = setLink("r429", id);
    for (prop in constraintObject) {
      if (prop.slice(0, 4) == "r428") {
        isDifable = [1, 2].includes(constraintObject[prop]) ? true : false;
        if (isDifable) {
          lastPropDifable = prop;
          break;
        }
      }
    }

    if (r407 >= 60 && !isBlank) {
      return { isRequired, errorList };
    } else if (isDifable && !isBlank) {
      return { isRequired, errorList };
    }

    if (r407 >= 60 && isBlank) {
      let message = `Isian ${r429Link} harus terisi, karena isian ${r407Link} lebih dari 60 tahun`;
      let error_var = "R429";
      errorList.push({ error_var, message });
    } else if (r407 < 60 && !isBlank) {
      let message = `Isian ${r429Link} terisi, namun isian ${r407Link} kurang dari 60 tahun`;
      let error_var = "R429";
      errorList.push({ error_var, message });
    }

    if (isDifable && isBlank) {
      let message = `Isian ${r429Link} harus terisi, karena isian ${setLink(
        lastPropDifable,
        id
      )} bernilai 1 atau 2`;
      let error_var = "R429";
      errorList.push({ error_var, message });
    } else if (!isDifable && !isBlank) {
      let message = `Isian ${r429Link} terisi, namun isian R428a-R428j tidak ada yang bernilai 1 atau 2 `;
      let error_var = "R429";
      errorList.push({ error_var, message });
    }
    // console.log(errorList);

    isRequired = isDifable || Number(r407) >= 60;
    // console.log({ errorList, isRequired, constraintName, isBlank, isDifable });
  }
  if (constraintName == "wanita fertil") {
    /*
    constraintObject : {
      r405
      r407
      r408
      r410
    }
    return list of pesan error jika ada

    */
    // case 1 syarat terpenuhi namun, tidak terisi
    let { r405, r407, r408, r410 } = constraintObject;
    let isWomen = r405 == 2;
    let isFertile = r407 > 9 && r407 < 55;
    let isMarried = [2, 3, 4].includes(r408);
    let is410Blank = String(r410).length < 1 || r410 == null;
    let r405Link = setLink("r405", id);
    let r407Link = setLink("r407", id);
    let r408Link = setLink("r408", id);
    let r410Link = setLink("r410", id);
    isRequired = isWomen && isFertile && isMarried;

    if (isWomen && isFertile && isMarried && is410Blank) {
      let error_var = "r410";
      let message = `${r405Link} Wanita dengan ${r407Link} berada dalam range 10-54 tahun, dan ${r408Link} pernah kawin, Namun isian ${r410Link} Kosong`;
      errorList.push({ error_var, message });
    } else if ((!isWomen || !isFertile || !isMarried) && !is410Blank) {
      // jika salah satu tidak terpenuhi namun tidak blank
      if (!isWomen) {
        let message = `${r405Link} bukan wanita, Namun ${r410Link} terisi`;
        let error_var = "R405";
        errorList.push({ error_var, message });
      }
      if (!isFertile) {
        let message = `${r407Link} diluar range 10-54 tahun, Namun ${r410Link} terisi`;
        let error_var = "R407";
        errorList.push({ error_var, message });
      }
      if (!isMarried) {
        let message = `${r408Link} belum pernah menikah, Namun ${r410Link} terisi`;
        let error_var = "R408";
        errorList.push({ error_var, message });
      }
    }
  }
  return { isRequired, errorList };
}
const generateErrorMessage = (isRequired, isBlank) => {};
function isFilledProcessor({ filled, objek, variableDependent, id = 0 }) {
  /*
    Filled merupakan objek dengan isi
    {
        type : 0/1 0 = boolean, 1 = single/multiple
        constraints: [
            { 
                operator: '=',
                value : [1,2,3],
                blok4 : true
                variableIndependent 
            }
        ]        
    }
    
    Objek merupakan objek yang berisikan isian kuesioner
    
    */

  let list_pesan = [];
  let isRequired = false;
  let isBlank = true;
  let variableDependentLink = setLink(variableDependent, id);
  let variableIndependentLink = "";
  let required = true;

  if (filled.type === 0) {
    //untuk case boolean atau 0

    // Jika panjanganya kurang dari 1 atau undefined
    isRequired = true;
    isBlank = isBlankChar(objek[variableDependent]);

    if (isRequired && isBlank) {
      pesan = `Isian ${variableDependentLink} tidak boleh kosong atau blank`;
      list_pesan.push(pesan);
    }
  } else if (filled.type == 1) {
    //untuk case single atau multiple

    //case pengasuh

    // untuk setiap constraint
    for (i in filled.constraint) {
      let constraint = filled.constraint[i];

      try {
        variableIndependentLink = setLink(constraint.variableIndependent, id);
      } catch {
        variableIndependentLink = "";
      }

      // let variableIndependentLink = setLink(constraint.variableIndependent);
      // let variableDependentLink = setLink(variableDependent);
      isBlank =
        !String(objek[variableDependent]).length ||
        objek[variableDependent] == null;
      //jika equally
      if (constraint.operator == "=") {
        isRequired = constraint.value == objek[constraint.variableIndependent];

        // aku pengen pindah kerjaan :(

        if (isRequired && isBlank) {
          //jika required maka cek apakah blank ?
          pesan = `Isian ${variableDependentLink} harus terisi karena isian ${variableIndependentLink} bernilai ${constraint.value}`;
          list_pesan.push(pesan);
        } else if (!isRequired && !isBlank) {
          pesan = `Isian ${variableDependentLink} harus kosong karena isian ${variableIndependentLink} bernilai bukan ${constraint.value}`;
          list_pesan.push(pesan);
        }
      } else if (constraint.operator == "in") {
        let tupleString = constraint.value.map((val) => String(val));
        let valueString = String(objek[constraint.variableIndependent]);
        isRequired = tupleString.includes(valueString);
        let valueAsString = arrayToString(constraint.value);
        if (isRequired && isBlank) {
          pesan = `Isian ${variableDependentLink} harus terisi karena isian ${variableIndependentLink} bernilai  ${valueAsString}`;
          list_pesan.push(pesan);
        } else if (!isRequired && !isBlank) {
          pesan = `Isian ${variableDependentLink} harus kosong karena isian ${variableIndependentLink} bernilai bukan  ${valueAsString}`;
          list_pesan.push(pesan);
        }
      } else if (constraint.operator == ">") {
        isRequired = objek[constraint.variableIndependent] > constraint.value;

        if (isRequired && isBlank) {
          pesan = `Isian ${variableDependentLink} harus terisi karena isian ${variableIndependentLink} bernilai lebih dari ${constraint.value}`;
          list_pesan.push(pesan);
        } else if (!isRequired && !isBlank) {
          pesan = `Isian ${variableDependentLink} terisi tetapi isian ${variableIndependentLink} bernilai kurang dari ${constraint.value}`;
          list_pesan.push(pesan);
        }
      } else if (constraint.operator == "<") {
        isRequired = objek[constraint.variableIndependent] < constraint.value;

        if (isRequired && isBlank) {
          pesan = `Isian ${variableDependentLink} harus terisi karena isian ${variableIndependentLink} bernilai kurang dari ${constraint.value}`;
          list_pesan.push(pesan);
        } else if (!isRequired && !isBlank) {
          // console.log({ objek, isRequired, isBlank });
          pesan = `Isian ${variableDependentLink} terisi, namun isian ${variableIndependentLink} lebih dari ${constraint.value}`;
          list_pesan.push(pesan);
        }
      } else if (constraint.operator == "minMax") {
        let variableIndependent = constraint.variableIndependent;
        let variableIndependentValue = objek[constraint.variableIndependent];
        let { min, max } = constraint.value;
        let cekMin = variableIndependentValue >= min;
        let cekMax = variableIndependentValue <= max;
        isRequired = cekMin && cekMax;

        if (isRequired && isBlank) {
          pesan = `Isian ${variableDependentLink} harus terisi karena isian ${variableIndependentLink} berada dalam range ${min}-${max}`;
          list_pesan.push(pesan);
        } else if (!isRequired && !isBlank) {
          pesan = `Isian ${variableDependentLink} terisi namun isian ${variableIndependentLink} tidak berada dalam range ${min}-${max}`;
          list_pesan.push(pesan);
        }
      } else if (constraint.operator == "special") {
        let constraintObject = {};

        {
          if (constraint.nama == "wanita fertil") {
            constraintObject = {
              r405: objek["r405"],
              r407: objek["r407"],
              r408: objek["r408"],
              r410: objek["r410"],
            };
          } else if (constraint.nama == "elderOrDifable") {
            constraintObject = (({
              r407,
              r428a,
              r428b,
              r428c,
              r428d,
              r428e,
              r428f,
              r428g,
              r428h,
              r428i,
              r428j,
              r429,
            }) => ({
              r407,
              r428a,
              r428b,
              r428c,
              r428d,
              r428e,
              r428f,
              r428g,
              r428h,
              r428i,
              r428j,
              r429,
            }))(objek);
          }
          constraintObject["variableDependent"] = variableDependent;
          let constraintName = constraint.nama;
          let { isRequired, errorList } = handleSpecialConstraint(
            constraintName,
            constraintObject
          );

          required = isRequired;
          isRequired = isRequired;

          if (errorList.length > 0) {
            for (i in errorList) {
              list_pesan.push(errorList[i].message);
            }
          }
        }
      }

      required = required * isRequired;
    }
    isRequired = Boolean(required);
    if (variableDependent == "r429") {
      // console.log({ required, isBlank });
    }
    if (!required && isBlank) {
      list_pesan = [];
    }
  } else {
    isBlank = String(objek[variableDependent]).length > 0 ? false : true;
  }

  return { list_pesan, isRequired, isBlank };
}
const hitungAnggotaTinggalBersama = (blok4) =>
  blok4.reduce((jumlahAnggota, anggota) => {
    return [1, 5].includes(Number(anggota["r404"]))
      ? jumlahAnggota + 1
      : jumlahAnggota;
  }, 0);
const cekJumlahArt = (blok4, r112) => {
  const jumlahAnggotaTinggalBersama = hitungAnggotaTinggalBersama(blok4);
  // console.log({ jumlahAnggotaTinggalBersama, blok4, r112 });
  return Number(jumlahAnggotaTinggalBersama) == Number(r112) ? true : false;
};
function getErrorList(
  obj,
  cons = CONSTRAINT,
  nomorUrutArt = 0,
  max_art = 0,
  id_db = -1
) {
  /*
    obj merupakan variable untuk mempresentasikan Objek kuesioner K yang berisikan nilai-nilai
    cons merupakan variable berisi batasan-batasan variable
    nomorUrutArt,
    */
  let error_list = [];
  let isBlok4 = false;
  // loop constraint
  let arr_prop = [];
  for (prop in cons) {
    if (prop == "variableDependent") {
      break;
    }
    arr_prop.push(prop);
    //cek apakah termasuk blok 4
    if (prop == "blok_4") {
      // cek apakah jumlah blok 4 = 112
      if (!cekJumlahArt(obj["blok_4"], obj["r112"])) {
        error_list.push(
          `Jumlah Anggota keluarga yang tinggal bersama pada ${setLink(
            "blok_4"
          )} tidak sama dengan isian ${setLink("r112")}`
        );
      }
      //loooping objek
      let { blok_4_const, jumlah_krt, jumlah_suami_istri } = {
        blok_4_const: cons["blok_4"],
        jumlah_krt: 0,
        jumlah_suami_istri: 0,
      };

      for (blok_4_i in obj["blok_4"]) {
        let objek_blok_4 = obj["blok_4"][blok_4_i];
        // panggil get error list untuk blok 4
        let id_db = objek_blok_4["id"] ?? -1;
        // console.log({ id_db });
        let error_art = getErrorList(
          objek_blok_4,
          blok_4_const,
          Number(obj["blok_4"][blok_4_i]["r401"]),
          obj["r112"],
          id_db
        );

        if ([1, 2].includes(obj["blok_4"][blok_4_i]["r409"])) {
          jumlah_krt += obj["blok_4"][blok_4_i]["r409"] == 1 ? 1 : 0;
          jumlah_suami_istri += obj["blok_4"][blok_4_i]["r409"] == 2 ? 1 : 0;
        }
        // PR
        if (jumlah_krt > 1) {
          pesan = `Jumlah ${setLink(
            "Kepala Keluarga",
            0,
            false,
            "blok_4"
          )} tidak boleh lebih dari satu`;
          error_list.push(pesan);
        }
        if (jumlah_suami_istri > 1) {
          pesan = `Jumlah ${setLink(
            "Suami/istri",
            0,
            false,
            "blok_4"
          )} tidak boleh lebih dari satu`;
          error_list.push(pesan);
        }
        //push jika error art lebih dari 1 alias ada
        if (error_art.length > 0) {
          for (i in error_art) {
            error_list.push(error_art[i]);
          }
        }
      }
      continue;
    }
    //cek Filled

    let constraintSpecial = false;

    try {
      constraintSpecial = cons[prop]["filled"]["constraint"]["nama"]
        ? true
        : false;
    } catch {
      constraintSpecial = false;
    }
    let before_after = [prop];
    try {
      let k = cons[prop]["min"] ?? 0;
    } catch (error) {
      before_after.push(prop);

      prop = before_after[0];
    }
    if (constraintSpecial) {
      let { list_pesan } = isFilledProcessor({
        filled: cons[prop]["filled"],
        objek: obj,
        variableDependent: prop,
        id: nomorUrutArt,
      });
      if (list_pesan.length > 0) {
        for (i in list_pesan) {
          error_list.push(list_pesan[i].message);
        }
      }
    } else {
      let { list_pesan, isRequired, isBlank } = isFilledProcessor({
        filled: cons[prop]["filled"],
        objek: obj,
        variableDependent: prop,
        id: nomorUrutArt,
      });

      if (prop == "variableDependent") {
      }
      if (list_pesan.length > 0) {
        for (i in list_pesan) {
          error_list.push(list_pesan[i]);
        }
      }

      if (!isRequired && isBlank) {
        continue;
      }
      try {
        let k = cons[prop]["min"] ?? 0;
      } catch (error) {
        before_after.push(prop);
        // console.log({ before_after, constraintSpecial, cons });

        prop = before_after[0];
      }
    }

    //cek numeric const

    let numeric = {
      variableDependent: prop,
      min: cons[prop]["min"] ?? 0,
      max: cons[prop]["max"] ?? 0,
      format_number: cons[prop]["format_number"] ?? false,
      program: cons[prop]["program"] ?? false,
      bulan: obj[cons[prop]["bulan"]] ?? 1,
      butuh_listrik: (cons[prop]["butuh_listrik"] && obj[prop] == 1) ?? false,
      nilai_listrik: obj["r307a"],
      nilai_gas: obj["r308"],
      tuple_num: cons[prop]["tuple_num"] ?? false,
      nullValue: cons[prop]["nullValue"] ?? false,
      id: nomorUrutArt,
    };

    if (prop == "r416b") {
      if ([1, 2, 3, 4, 5].includes(Number(obj["r418"]) ?? 0)) {
        numeric.min = 0;
      }
    }

    if (prop == "r307b1") {
      if (obj[prop] == 1 && (isBlankChar(obj["r501d"]) || obj["r501d"] == 2)) {
        error_list.push(
          `Isian ${setLink(
            "r501d"
          )} Tidak sama dengan 1, Padahal isian ${setLink("r307b1")} bernilai 1`
        );
      }
    }

    if (numeric.max.length > 0 && typeof numeric.max != "number") {
      numeric.max = Number(max_art);
    }

    let hasilNumeric = numCheck(numeric, obj[prop]);

    if (hasilNumeric.length > 0) {
      error_list.push(hasilNumeric);
    }
    // cek char

    let hasilChar = charCheck({
      variableDependent: prop,
      len: cons[prop]["length"] ?? 0,
      alphabet_only: cons[prop]["alphabet_only"] ?? false,
      value: obj[prop],
      tuple: cons[prop]["tuple"] ?? false,
      id: nomorUrutArt,
    });

    if (hasilChar.length > 0) {
      error_list.push(hasilChar);
    }
  }

  if (id_db >= 0) {
    nomorUrutArt = nomorUrutArt > 0 ? nomorUrutArt : "(blank)";
    // console.log({ nomorUrutArt });
    let ArtLink = setLink(
      `Anggota keluarga nomor urut : ${nomorUrutArt}`,
      obj["id"],
      true
    );
    error_list = error_list.map((error) => `${ArtLink} ${error}`);
  }

  //console.log({ error_list });

  return error_list;
}
