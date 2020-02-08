const groupAdultsByAgeRange = arrayOfObjects => {
  const olderThan18 = arrayOfObjects.filter(object => {
    // console.log("Ages older than 18: ", object.age);
    return object.age >= 18;
  });

  if (olderThan18.length === 0) {
    return {};
  }

  const groupsAdult = olderThan18.reduce((group, currentPerson) => {
    if (currentPerson.age <= 20) {
      if (group["20 and younger"] === undefined) {
        group["20 and younger"] = [currentPerson];
      } else {
        group["20 and younger"].push(currentPerson);
      }
    }
    if (currentPerson.age > 20 && currentPerson.age <= 30) {
      if (group["21-30"] === undefined) {
        group["21-30"] = [currentPerson];
      } else {
        group["21-30"].push(currentPerson);
      }
    } else if (currentPerson.age >= 31 && currentPerson.age <= 40) {
      if (group["31-40"] === undefined) {
        group["31-40"] = [currentPerson];
      } else {
        group["31-40"].push(currentPerson);
      }
    } else if (currentPerson.age >= 41 && currentPerson.age <= 50) {
      if (group["41-50"] === undefined) {
        group["41-50"] = [currentPerson];
      } else {
        group["41-50"].push(currentPerson);
      }
    } else if (currentPerson.age >= 51) {
      if (group["51 and older"] === undefined) {
        group["51 and older"] = [currentPerson];
      } else {
        group["51 and older"].push(currentPerson);
      }
    }
    return group;
  }, {});
  return groupsAdult;
};

// groupAdultsByAgeRange([
//   { name: "pete", age: 10 },
//   { name: "dove", age: 17 },
//   { name: "dave", age: 18 },
//   { name: "hall", age: 19 },
//   { name: "donn", age: 20 },
//   { name: "trey", age: 21 },
//   { name: "hann", age: 29 },
//   { name: "chew", age: 30 },
//   { name: "cloe", age: 31 },
//   { name: "dart", age: 39 },
//   { name: "this", age: 40 },
//   { name: "dame", age: 41 },
//   { name: "henk", age: 49 },
//   { name: "anna", age: 50 },
//   { name: "olga", age: 51 },
//   { name: "bert", age: 52 },
//   { name: "oldd", age: 120 }
// ]);
module.exports = { groupAdultsByAgeRange };

//array of Objects
// objects resprents people with name and age range
//group every person over 18 into age ranges
// - `20 and younger`
// reduce tot een object met array bij elke property
// - `20 and younger`
// - `21-30`
// - `31-40`
// - `41-50`
// - `51 and older`
