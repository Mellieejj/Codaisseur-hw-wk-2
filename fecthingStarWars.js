const lukeSkywalker = () => {
  fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    .then(dataLuke => {
      console.log("data Luke: ", dataLuke);
      const lukeId = document.getElementById("luke");
      for (y in dataLuke) {
        lukeId.innerHTML += y + ": " + dataLuke[y] + "<br />";
      }
    })
    .catch(err => {
      console.log("Error Message: ", err);
    });
};
lukeSkywalker();

const darthVader = () => {
  fetch("https://swapi.co/api/people/4/")
    .then(responseDarthVader => responseDarthVader.json())
    .then(dataDarthVader => {
      console.log("data Darth Vader: ", dataDarthVader);

      const darthVader = document.getElementById("darthVader");
      for (x in dataDarthVader) {
        darthVader.innerHTML += x + ": " + dataDarthVader[x] + "<br />";
      }
    })
    .catch(error => {
      console.log("Error Message: ", error);
    });
};

// var myObj, x;
// myObj = { name: "John", age: 30, car: null };
// for (x in myObj) {
//   document.getElementById("demo").innerHTML += x + ": " + myObj[x] + "<br />";
// }
