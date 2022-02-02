function pairElement(str) {
  let pairedArr = [];                         
  let search = function (char) {
    switch (char) {
      case "A":
        pairedArr.push(["A", "T"]);
        break;
      case "T":
        pairedArr.push(["T", "A"]);
        break;
      case "G":
        pairedArr.push(["G", "C"]);
        break;
      case "C":
        pairedArr.push(["C", "G"]);
        break;
    }
  };
  for (let i = 0; i < str.length; i++) {
    search(str[i]);
  }     
  return pairedArr;
}

console.log(pairElement("GCG"));
