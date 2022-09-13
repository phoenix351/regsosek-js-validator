function isBlank(elem = "", nama_var) {
  let pesan = { status: true, message: "" };
  if (String(elem).length < 1 || typeof elem == "object") {
    pesan.status = false;
    pesan.message = `Isian ${nama_var} harus diisi`;
  }
  return pesan;
}

function minMaxCheck(val, prop, min = 0, max = 0) {
  pesan = "";
  //cek min
  pesan += val < min ? `Isian ${prop} tidak boleh kurang dari ${min}` : "";
  //cek max jika nilai max lebih dari 0

  if (max > 0) {
    console.log("pengen");
    pesan += val > max ? `Isian ${prop} tidak boleh lebih dari ${max}` : "";
  }
  return pesan;
}

function arrayToString(ar) {
  pesan = "";
  if (ar.length > 0) {
    for (let x in ar) {
      if (x == 0) {
        pesan = pesan + String(ar[x]);
      } else {
        pesan = pesan + ` atau ${String(ar[x])} `;
      }
    }
  }
  return pesan;
}

function getErrorList(obj, cons) {
  /*
  obj merupakan variabel untuk mempresentasikan Objek kuesioner K yang berisikan nilai-nilai
  cons merupakan variabel berisi batasan-batasan variabel
  */
  let error_list = [];
  // loop constraint
  for (const prop in cons) {
    //cek apakah termasuk blok 4
    if (prop == "blok_4") {
    }
    //cek apakah filled bernilai true
    if (cons[prop]["filled"] === true) {
      //cek isian
      let cek_filled = isBlank(obj[prop], prop);
      if (!cek_filled.status) {
        // tambahkan ke error list
        error_list.push(cek_filled.message);
      } else {
        //Cek panjangnya apakah sudah sesuai ?
        if (cons[prop]["length"]) {
          if (String(obj[prop].length != cons[prop["length"]])) {
            error_list.push(
              `Isian ${prop} Harus diisi tepat sebanyak ${cons[prop]["length"]} karakter`
            );
          }
        }

        //jika terisi maka cek apakaah ada constrain minmax
        if (cons[prop]["min"] || cons[prop]["max"]) {
          let min = cons[prop]["min"] || 0;
          let max = cons[prop]["max"] || 0;
          /*
          Cek apakah bertipe string, apabila bertipe string maka nilai max sama dengan
          nilai properti tersebut.
          */
          max = typeof max == "string" ? obj[max] : max;

          let error = minMaxCheck(obj[prop], prop, min, max);

          if (error.length > 5) {
            error_list.push(error);
          }
        }
      }
    } else if (cons[prop]["filled"] == "wanita_produktif") {
      /* jika persayaratan adalah untuk wanita produktif
        Yaitu berjenis kelamin wanita (R405 = 1)
        Berusia antara 10 dan 54 tahun (R407>9 && R407 < 55)
        Berstatus Sudah kawin (R408 = 2,3,4) 
      */
      //cek apakah memenuhi kriteria sebagai wanita produktif ?
      cons[prop]["filled"] =
        obj["r405"] == 2 &&
        obj["r407"] >= 10 &&
        obj["r407"] < 55 &&
        [2, 3, 4].includes(obj["r408"])
          ? true
          : false;

      //cek apakah isian kosong ?
      let cek_filled = isBlank(obj[prop], prop);
      // apabila memenuhi kriteria sebagai wanita produktif maka
      if (cons[prop]["filled"]) {
        //cek dulu apakah blank ?
        if (!cek_filled.status) {
          // kalau blank maka tambahkan ke error list
          error_list.push(
            `${cek_filled.message} harus diisi karena ART berkategori wanita produktif
            `
          );
          //kalaupun tidak masih dicek lagi apakah keberadaan ART 1 atau 4
        } else if (![1, 4].includes(obj["r404"])) {
          //kalau tidak maka tambahkan error list
          error_list.push(
            `${cek_filled.message} harus kosong, karena Keberadaan tidak ada (2,3,atau 5)
              `
          );
        }
        //Jika bukan wanita produktif akan tetapi terisi
      } else if (cek_filled) {
        // maka tambahkan error
        error_list.push(
          `${cek_filled.message} Harus Kosong karena ART tidak berkategori wanita produktif, Cek R405 = 2, 10<R407<54 tahun, dan R408 Pernah Kawin (2,3 atau 4)
          `
        );
      }
    }
    if (cons[prop]["filled"]) {
      // untuk yang bergantung pada rincian lain
      for (let prop_2 in cons[prop]["filled"]) {
        //cek variable terkait
        if (cons[prop]["filled"][prop_2].includes(obj[prop_2])) {
          // cek is blank
          let cek_filled = isBlank(obj[prop], prop);
          if (!cek_filled.status) {
            // tambahkan ke error list
            error_list.push(
              `${cek_filled.message} karena ${prop_2} bernilai ${arrayToString(
                cons[prop]["filled"][prop_2]
              )}`
            );
          }
        } else if (
          obj[prop] != null &&
          !cons[prop]["filled"][prop_2].includes(obj[prop_2])
        ) {
          error_list.push(
            `Isian  ${prop} harus kosong, karena ${prop_2} tidak bernilai ${arrayToString(
              cons[prop]["filled"][prop_2]
            )}`
          );
        }
      }
    }
  }
  return error_list;
}
