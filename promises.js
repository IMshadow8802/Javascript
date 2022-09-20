// Given as inputs to the getLastNames() function

//     A string representing a first name, firstName.

//     An Array of person objects with properties, "firstName" and “lastName”


// Return a JavaScript Promise which is either

//     rejected with a message "Invalid" if none of the person objects “firstName” property matches the input first name, firstName

//     resolved with an sorted Array of "lastName" property values of objects whose “firstName” property matches the given first name, firstName
function getLastNames(firstName, people) {
  return new Promise(function (resolve, reject) {
    let matchingPeople = people.filter((obj) => {
      return obj.firstName === firstName;
    });

    if (matchingPeople.length === 0) {
      reject("Invalid");
    } else {
      let unsortedLastnameArray = [];
      for (let i = 0; i < matchingPeople.length; i++) {
        let lastName = matchingPeople[i].lastName;
        unsortedLastnameArray.push(lastName);
      }
      unsortedLastnameArray.sort();
      resolve(unsortedLastnameArray);
    }
  });
}