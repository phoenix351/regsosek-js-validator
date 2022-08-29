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
  let error_list = [];
  // loop constraint
  for (const prop in cons) {
    //cek apakah filled bernilai true
    if (cons[prop]["filled"] === true) {
      //cek isian
      let cek_filled = isBlank(obj[prop], prop);
      if (!cek_filled.status) {
        // tambahkan ke error list
        error_list.push(cek_filled.message);
      }

      //jika terisi maka cek apakaah ada constrain minmax
      if (cons[prop]["min"] || cons[prop]["max"]) {
        let min = cons[prop]["min"] || 0;
        let max = cons[prop]["max"] || 0;

        let error = minMaxCheck(obj[prop], prop, min, max);

        if (error.length > 5) {
          error_list.push(error);
        }
      }
    } else if (cons[prop]["filled"]) {
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
