const groupAdultsByAgeRange = arrayOfObjects => {
  const olderThan18 = arrayOfObjects.filter(object => {
    return object.age >= 18;
  });
  // console.log(olderThan18); works
};

groupAdultsByAgeRange([
  { name: "pete", age: 10 },
  { name: "dove", age: 17 },
  { name: "dave", age: 18 },
  { name: "hall", age: 19 }
]);
module.exports = { groupAdultsByAgeRange };

//array of Objects
// objects resprents people with name and age range
//group every person over 18 into age ranges
// - `20 and younger`
// reduce tot een object met array bij elke property
-`21-30` - `31-40` - `41-50` - `51 and older`;
