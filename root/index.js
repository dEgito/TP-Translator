// function copy(){
//   const text = document.getElementById("output").value;
//   navigator.clipboard.readText(text)
//   console.log(text)
// }


function convert() {
  const input = document.getElementById("input").value;
  let output = "";

  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);
    let translatedChar = char;

    switch (char.toUpperCase()) {
      // ## T para P
      case "T":
        translatedChar = "P";
        break;
      case "E":
        translatedChar = "O";
        break;
      case "N":
        translatedChar = "L";
        break;
      case "I":
        translatedChar = "A";
        break;
      case "S":
        translatedChar = "R";
        break;

      //## P para T
      case "P":
        translatedChar = "T";
        break;
      case "O":
        translatedChar = "E";
        break;
      case "L":
        translatedChar = "N";
        break;
      case "A":
        translatedChar = "I";
        break;
      case "R":
        translatedChar = "S";
        break;

      // ## CASOS ESPECIAIS
      // # AGUDO
      case "Á":
        translatedChar = "Í";
        break;
      case "É":
        translatedChar = "Ó";
        break;
      case "Í":
        translatedChar = "Á";
        break;
      case "Ó":
        translatedChar = "É";
        break;

      // # CIRCUNFLEXO
      case "Â":
        translatedChar = "Î";
        break;
      case "Ê":
        translatedChar = "Ô";
        break;
      case "Î":
        translatedChar = "Â";
        break;
      case "Ô":
        translatedChar = "Ê";
        break;

      // # TIL
      // - Não existe acentuação com til para as letras E e I
      // - Por este motivo não será possível retornar o Ã e Õ
      case "Ã":
        translatedChar = "I";
        break;
      case "Õ":
        translatedChar = "E";
        break;
      case "Ñ":
        translatedChar = "L";
        break;
    }

    output += translatedChar;
  }

  document.getElementById("output").textContent = output;
}
