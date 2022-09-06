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

function charCheck(char) {
  /* char : {
        variableDependent : nama variable
        len : panjang karakter
        value : nilai variable
      tuple : cek variabel apakah ada pada array ? 
    }
    
    
    */

  if (char.len) {
    pesan +=
      value.length != char.len
        ? `Isian ${char.variabelDependent} panjangnya harus ${char.len} karakter`
        : "";
    return pesan;
  }
  if (char.tuple) {
    pesan += char.tuple.includes(value)
      ? `Isian ${char.variabelDependent} harus bernilai ${arrayToString(
          char.tuple
        )}`
      : "";
    return pesan;
  }
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

    }
    value : nilai variable,
    */
  pesan = "";
  console.log({ tipe: typeof value });
  //cek apakah bertipe numeric

  if (numeric.format_number) {
    // coba format ke number
    value_converted = Number(value);
    //jika nan maka return error
    if (String(Number(value_converted)).toLowerCase() == "nan") {
      pesan += `Isian ${numeric.variabelDependent} harus berisikan angka`;
      return pesan;
    }
  }

  //cek min

  //periksa bulan dan tahun
  if (numeric.program == true) {
    //case lebih dari  oktober 2022
    if ((value == 2022 && numeric.bulan > 10) || value > 2022) {
      pesan += `Isian Waktu Penerimaan Program lebih dari Periode yang telah ditetapkan (Oktober 2022)`;
      return pesan;
    } else if ((value == 2021 && numeric.bulan < 10) || value < 2021) {
      pesan += `Isian Waktu Penerimaan Program kurang dari Periode yang telah ditetapkan (Oktober 2022)`;
      return pesan;
    }
  }
  pesan +=
    value < numeric.min
      ? `Isian ${numeric.variabelDependent} tidak boleh kurang dari ${numeric.min}`
      : "";

  //cek max jika nilai max lebih dari 0
  if (numeric.max > 0) {
    pesan +=
      value > numeric.max
        ? `Isian ${numeric.variabelDependent} tidak boleh lebih dari ${numeric.max}`
        : "";
  }
  return pesan;
}

function isFilledProcessor({ filled, objek, variableDependent }) {
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
  console.log(
    `Checking error for ${variableDependent} value : ${objek[variableDependent]}`
  );
  let list_pesan = [];
  let isRequired = false;
  let isBlank = true;

  if (filled.type == 0) {
    console.log("masuk");
    //untuk case boolean atau 0

    // Jika panjanganya kurang dari 1 atau undefined
    isRequired = true;
    isBlank =
      String(objek[variableDependent]).length < 1 ||
      objek[variableDependent] == null;
    if (isRequired && isBlank) {
      console.log("truee");
      pesan = `Isian ${variableDependent} harus diisi`;
      list_pesan.push(pesan);
    }
  } else if (filled.type == 1) {
    //untuk case single atau multiple
    // untuk setiap constraint
    console.log("masuk advanced constraint ;))");
    for (i in filled.constraint) {
      let constraint = filled.constraint[i];
      //jika equally
      if (constraint.operator == "=") {
        isRequired = constraint.blok4
          ? constraint.value == objek["blok4"][constraint.variableIndependent]
          : constraint.value == objek[constraint.variableIndependent];
        isBlank =
          !String(objek[variableDependent]).length ||
          objek[variableDependent] == null;
        console.log({ isRequired, isBlank });
        if (isRequired && isBlank) {
          //jika required maka cek apakah blank ?
          pesan = `Isian ${variableDependent} harus terisi karena isian ${constraint.variableIndependent} bernilai ${constraint.value}`;
          list_pesan.push(pesan);
        } else if (!isRequired && !isBlank) {
          pesan = `Isian ${variableDependent} harus kosong karena isian ${constraint.variableIndependent} bernilai bukan ${constraint.value}`;
          list_pesan.push(pesan);
        }
      } else if (constraint.operator == "in") {
        console.log("masuk in chekcing.. ");
        isRequired = constraint.blok4
          ? constraint.value.includes(
              objek["blok4"][constraint[variableIndependent]]
            )
          : constraint.value.includes(objek[constraint.variableIndependent]);

        isBlank =
          !String(objek[variableDependent]).length ||
          objek[variableDependent] == null;
        console.log({ isRequired, isBlank });
        if (isRequired && isBlank) {
          pesan = `Isian ${variableDependent} harus terisi karena isian ${constraint.variableIndependent} bernilai  ${constraint.value}`;
          list_pesan.push(pesan);
        } else if (!isRequired && !isBlank) {
          pesan = `Isian ${variableDependent} harus kosong karena isian ${constraint.variableIndependent} bernilai bukan  ${constraint.value}`;
          list_pesan.push(pesan);
        }
      } else if (constraint.operator == ">") {
        let cek = constraint.blok4
          ? constraint.value < objek["blok4"][constraint[variableIndependent]]
          : constraint.value < objek[constraint.variableIndependent];
        if (!cek) {
          pesan = `Isian ${variableDependent} harus terisi karena isian ${constraint.variableIndependent} bernilai tidak lebih dari ${constraint.value}`;
          list_pesan.push(pesan);
        }
      } else if (constraint.operator == "<") {
        let cek = constraint.blok4
          ? constraint.value > objek["blok4"][constraint[variableIndependent]]
          : constraint.value > objek[constraint.variableIndependent];
        if (!cek) {
          pesan = `Isian ${variableDependent} harus terisi karena isian ${constraint.variableIndependent} bernilai tidak kurang dari ${constraint.value}`;
          list_pesan.push(pesan);
        }
      }
    }
  }
  return { list_pesan, isRequired, isBlank };
}

function getErrorList(obj, cons) {
  /*
    obj merupakan variabel untuk mempresentasikan Objek kuesioner K yang berisikan nilai-nilai
    cons merupakan variabel berisi batasan-batasan variabel
    */
  let error_list = [];
  // loop constraint
  for (prop in cons) {
    //cek apakah termasuk blok 4
    console.log({ prop });
    if (prop == "blok_4") {
      console.log("sampe di blok 4");
    }
    //cek Filled
    let { list_pesan, isRequired, isBlank } = isFilledProcessor({
      filled: cons[prop]["filled"],
      objek: obj,
      variableDependent: prop,
    });
    console.log({ list_pesan });
    if (list_pesan.length > 0) {
      console.log("push");
      for (i in list_pesan) {
        error_list.push(list_pesan[i]);
      }
    }

    if (!isRequired || isBlank) {
      console.log("skip");

      continue;
    }

    //cek numeric const
    let hasilNumeric = numCheck(
      {
        variabelDependent: prop,
        min: cons[prop]["min"] ?? 0,
        max: cons[prop]["max"] ?? 0,
        format_number: cons[prop]["format_number"] ?? false,
        program: cons[prop]["program"] ?? false,
        bulan: obj[cons[prop]["bulan"]] ?? 1,
      },
      obj[prop]
    );
    if (hasilNumeric.length > 0) {
      error_list.push(hasilNumeric);
    }
    // // cek char
    // let hasilChar = charCheck({
    //   variableDependent: prop,
    //   len: cons[prop]["length"] ?? 1,
    //   value: obj[prop],
    //   tuple: cons[prop]["tuple"] ?? false,
    // });
    // if (hasilChar.length > 0) {
    //   error_list.push(hasilChar);
    // }
  }
  console.log({ error_list });

  return error_list;
}
