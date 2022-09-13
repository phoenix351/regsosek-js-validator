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

const isAlphabetString = (kata) => /^[a-zA-Z\s]+$/.test(kata);
const isBlankChar = (char) => String(char).length < 1 || char == null;

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

  if (char.len && String(char.value).length != char.len) {
    pesan += `Isian ${char.variableDependent} panjangnya harus ${char.len} karakter`;
    return pesan;
  } else if (char.alphabet_only && !isAlphabetString(char.value)) {
    pesan += `Isian ${char.variableDependent}  hanya boleh berisi alphabet dan spasi `;
    return pesan;
  } else if (char.tuple && char.tuple.includes(char.value)) {
    pesan += `Isian ${char.variableDependent} harus bernilai ${arrayToString(
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
        allowNullAs99 : false

    }
    value : nilai variable,
    */

  let pesan = "";
  //cek apakah bertipe numeric

  if (numeric.format_number) {
    // coba format ke number
    value_converted = Number(value);

    //jika nan maka return error
    if (String(Number(value_converted)).toLowerCase() == "nan") {
      pesan += `Isian ${numeric.variableDependent} harus berisikan angka`;
      return pesan;
    }
  }

  //cek min

  //periksa bulan dan tahun
  if (numeric.program == true) {
    //case lebih dari  oktober 2022
    if ((value == 2022 && numeric.bulan > 10) || value > 2022) {
      pesan += `Isian ${numeric.variableDependent} lebih dari periode yang telah ditetapkan (Oktober 2022)`;
      return pesan;
    } else if ((value == 2021 && numeric.bulan < 10) || value < 2021) {
      pesan += `Isian ${numeric.variableDependent} kurang dari periode yang telah ditetapkan (Oktober 2021)`;
      return pesan;
    }
  }

  // cek min jika min > 0
  if (numeric.min > 0) {
    if (value < numeric.min) {
      pesan += `Isian ${numeric.variableDependent} tidak boleh kurang dari ${numeric.min}`;
      return pesan;
    }
  }

  //cek max jika nilai max lebih dari 0

  if (numeric.max > 0) {
    if (value > numeric.max && !(value == 99 && numeric.allowNullAs99)) {
      pesan += `Isian ${numeric.variableDependent} tidak boleh lebih dari ${numeric.max}`;
      return pesan;
    }
  }

  // cek apakah ada variable tuple ?
  if (numeric.tuple_num) {
    let tupleString = numeric.tuple_num.map((val) => String(val));
    let valueString = String(value);
    let logika = !tupleString.includes(valueString);
    console.log({ tupleString, valueString, logika });
    if (logika) {
      pesan += `Isian ${
        numeric.variableDependent
      } tidak bernilai ${arrayToString(tupleString)}`;
      return pesan;
    }
  }

  //cek apakah butuh listrik namun tidak ada listrik di r307
  let listrik_cek = numeric.butuh_listrik && numeric.nilai_listrik == 4;
  if (listrik_cek) {
    pesan += `Isian ${numeric.variableDependent} bernilai 1 maka isian r307 tidak boleh bernilai 4`;
    return pesan;
  }

  // kasus gas >= 5,5 kg

  if (numeric.variableDependent == "r502a") {
    //cek kasus
    if (value == 1 && ![2, 3].includes(numeric.nilai_gas)) {
      // kasus 1 ; r502 = 1 namun r308 bukan 2 atau 3
      pesan += `Isian r502a bernilai 1 namun r308 bukan 2 atau 3`;
    } else if (value != 1 && [2, 3].includes(numeric.nilai_gas)) {
      // kasus 2; r308 2 atau 3 namun r502 != 1
      pesan += `Isian r502a tidak bernilai 1 namun r308 bernilai 2 atau 3`;
    }
  }

  return pesan;
}
function handleSpecialConstraint(constraintName, constraintObject) {
  let errorList = [];
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
      return errorList;
    } else if (isDifable && !isBlank) {
      return errorList;
    }

    if (r407 >= 60 && isBlank) {
      let message = "R407 lebih dari 60, Namun r429 kosong";
      let error_var = "R429";
      errorList.push({ error_var, message });
    } else if (r407 < 60 && !isBlank) {
      let message = "R407 kurang dari 60, Namun r429 terisi";
      let error_var = "R429";
      errorList.push({ error_var, message });
    }

    if (isDifable && isBlank) {
      let message = `${lastPropDifable} bernilai 1 atau 2 , Namun r429 kosong`;
      let error_var = "R429";
      errorList.push({ error_var, message });
    } else if (!isDifable && !isBlank) {
      let message = `R428a-R428j tidak ada yang bernilai 1 atau 2 , Namun r429 terisi`;
      let error_var = "R429";
      errorList.push({ error_var, message });
    }
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
    let isFertile = r407 > 9 && r407 < 54;
    let isMarried = [2, 3, 4].includes(r408);
    let is410Blank = String(r410).length < 1 || r410 == null;

    if (isWomen && isFertile && isMarried && is410Blank) {
      let error_var = "r410";
      let message =
        "R405 Wanita dengan R407 berada dalam range 10-54 tahun, dan R408 pernah kawin, Namun isian R410 Kosong";
      errorList.push({ error_var, message });
    } else if ((!isWomen || !isFertile || !isMarried) && !is410Blank) {
      // jika salah satu tidak terpenuhi namun tidak blank
      if (!isWomen) {
        let message = "R405 bukan wanita, Namun R410 terisi";
        let error_var = "R405";
        errorList.push({ error_var, message });
      }
      if (!isFertile) {
        let message = "R407 diluar range 10-54 tahun, Namun R410 terisi";
        let error_var = "R407";
        errorList.push({ error_var, message });
      }
      if (!isMarried) {
        let message = "R408 belum pernah menikah, Namun R410 terisi";
        let error_var = "R408";
        errorList.push({ error_var, message });
      }
    }
  }
  return errorList;
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

  let list_pesan = [];
  let isRequired = false;
  let isBlank = true;

  if (filled.type == 0) {
    //untuk case boolean atau 0

    // Jika panjanganya kurang dari 1 atau undefined
    isRequired = true;
    isBlank = isBlankChar(objek[variableDependent]);

    if (isRequired && isBlank) {
      pesan = `Isian ${variableDependent} tidak boleh kosong atau blank`;
      list_pesan.push(pesan);
    }
  } else if (filled.type == 1) {
    //untuk case single atau multiple

    //case pengasuh

    // untuk setiap constraint
    for (i in filled.constraint) {
      let constraint = filled.constraint[i];
      isBlank =
        !String(objek[variableDependent]).length ||
        objek[variableDependent] == null;
      //jika equally
      if (constraint.operator == "=") {
        isRequired = constraint.blok4
          ? constraint.value == objek[constraint.variableIndependent]
          : constraint.value == objek[constraint.variableIndependent];

        if (isRequired && isBlank) {
          //jika required maka cek apakah blank ?
          pesan = `Isian ${variableDependent} harus terisi karena isian ${constraint.variableIndependent} bernilai ${constraint.value}`;
          list_pesan.push(pesan);
        } else if (!isRequired && !isBlank) {
          pesan = `Isian ${variableDependent} harus kosong karena isian ${constraint.variableIndependent} bernilai bukan ${constraint.value}`;
          list_pesan.push(pesan);
        }
      } else if (constraint.operator == "in") {
        let tupleString = constraint.value.map((val) => String(val));
        let valueString = String(objek[constraint.variableIndependent]);
        isRequired = constraint.blok4
          ? tupleString.includes(valueString)
          : tupleString.includes(valueString);
        console.log({ tupleString, valueString, isRequired });
        if (isRequired && isBlank) {
          pesan = `Isian ${variableDependent} harus terisi karena isian ${
            constraint.variableIndependent
          } bernilai  ${arrayToString(constraint.value)}`;
          list_pesan.push(pesan);
        } else if (!isRequired && !isBlank) {
          pesan = `Isian ${variableDependent} harus kosong karena isian ${
            constraint.variableIndependent
          } bernilai bukan  ${arrayToString(constraint.value)}`;
          list_pesan.push(pesan);
        }
      } else if (constraint.operator == ">") {
        isRequired = constraint.blok4
          ? objek[constraint.variableIndependent] > constraint.value
          : objek[constraint.variableIndependent] > constraint.value;

        if (isRequired && isBlank) {
          pesan = `Isian ${variableDependent} harus terisi karena isian ${constraint.variableIndependent} bernilai lebih dari ${constraint.value}`;
          list_pesan.push(pesan);
        } else if (!isRequired && !isBlank) {
          pesan = `Isian ${variableDependent} terisi tetapi isian ${constraint.variableIndependent} bernilai kurang dari ${constraint.value}`;
          list_pesan.push(pesan);
        }
      } else if (constraint.operator == "<") {
        isRequired = constraint.blok4
          ? constraint.value < objek[constraint.variableIndependent]
          : constraint.value < objek[constraint.variableIndependent];
        if (isRequired && isBlank) {
          pesan = `Isian ${variableDependent} harus terisi karena isian ${constraint.variableIndependent} bernilai tidak kurang dari ${constraint.value}`;
          list_pesan.push(pesan);
        } else if (!isRequired && !isBlank) {
          pesan = `Isian ${variableDependent} terisi, namun isian ${constraint.variableIndependent} lebih dari ${constraint.value}`;
          list_pesan.push(pesan);
        }
      } else if (constraint.operator == "minMax") {
        let variableIndependent = objek[constraint.variableIndependent];
        let { min, max } = constraint.value;
        isRequired = variableIndependent >= min && variableIndependent <= max;

        if (isRequired && isBlank) {
          pesan = `Isian ${variableDependent} harus terisi karena isian ${variableIndependent} berada dalam range ${min}-${max}`;
          list_pesan.push(pesan);
        } else if (!isRequired && !isBlank) {
          pesan = `Isian ${variableDependent} terisi namun isian ${variableIndependent} tidak berada dalam range ${min}-${max}`;
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
          let error_410 = handleSpecialConstraint(
            constraintName,
            constraintObject
          );
          if (error_410.length > 0) {
            for (i in error_410) {
              list_pesan.push(error_410[i].message);
            }
          }
        }
      }
    }
  }
  return { list_pesan, isRequired, isBlank };
}

function getErrorList(obj, cons, nomor_urut_art = 0, max_art = 0) {
  /*
    obj merupakan variable untuk mempresentasikan Objek kuesioner K yang berisikan nilai-nilai
    cons merupakan variable berisi batasan-batasan variable
    nomor_urut_art,
    */
  let error_list = [];
  // loop constraint
  for (prop in cons) {
    //cek apakah termasuk blok 4
    if (prop == "blok_4") {
      // cek apakah jumlah blok 4 = 112
      if (obj["blok_4"].length != Number(obj["r112"])) {
        error_list.push("Jumlah ART pada blok 4 tidak sama dengan  isian r112");
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
        let error_art = getErrorList(
          objek_blok_4,
          blok_4_const,
          Number(obj["blok_4"][blok_4_i]["r401"]),
          obj["r112"]
        );
        if ([1, 2].includes(obj["blok_4"][blok_4_i]["r409"])) {
          jumlah_krt += obj["blok_4"][blok_4_i]["r409"] == 1 ? 1 : 0;
          jumlah_suami_istri += obj["blok_4"][blok_4_i]["r409"] == 2 ? 1 : 0;
        }

        if (jumlah_krt > 1) {
          pesan = `Jumlah kepala keluarga tidak boleh lebih dari 1`;
          error_list.push(pesan);
        }
        if (jumlah_suami_istri > 1) {
          pesan = `Jumlah suami/istri tidak boleh lebih dari 1`;
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

    if (constraintSpecial) {
      let { list_pesan } = isFilledProcessor({
        filled: cons[prop]["filled"],
        objek: obj,
        variableDependent: prop,
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
      });
      if (list_pesan.length > 0) {
        for (i in list_pesan) {
          error_list.push(list_pesan[i]);
        }
      }
      if (!isRequired || isBlank) {
        continue;
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
      butuh_listrik: cons[prop]["butuh_listrik"] ?? false,
      nilai_listrik: obj["r307a"],
      nilai_gas: obj["r308"],
      tuple_num: cons[prop]["tuple_num"] ?? false,
      allowNullAs99: cons[prop]["allowNullAs99"] ?? false,
    };

    if (numeric.max.length > 0 && typeof numeric.max != "number") {
      numeric.max = max_art;
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
    });

    if (hasilChar.length > 0) {
      error_list.push(hasilChar);
    }
  }
  if (nomor_urut_art > 0) {
    error_list = error_list.map(
      (p) => `ART nomor urut : ${nomor_urut_art} ${p}`
    );
  }

  console.log({ error_list });

  return error_list;
}
