/* 1. Create an array that contains three strings.*/

const bike = [ "BmW", "honda FireBlade", "Yamaha R1"];

/* 2. Create an array that contains one string, one number and one boolean.*/

const boo = ["May", 25, true];

/*3. Create an array hat contains three empty arrays.*/
const empty = [[], [], []];
/* 4. Create an empty object.*/

const emptyObject = {};

/* 5. Create an object with three properties: id, email, password.*/

const user = {
  id: "Passport",
  email: "Heloo@hotmail.com",
  password: "Dontlook",
};

/* 6. Create an array that contains three objects. All objects should have a width and a height property.*/

const newHexagon = [
  { width: 5, height: 5}, 
  { width: 5, height: 5},
  { width: 5, height: 5},
  { width: 5, height: 5},
  { width: 5, height: 5},
]

/*7. Create an object that contains three properties: a string, an array and an object. Invent your own property names and values.*/

const user1 = {
  userName: "Steve Jobs",
  companies: ["Apple", "Pinxar", "Next"],
  date: { year: 1984, year: 1986, year: 1997, },
}

/*8. Print the `type` of a variable that has an array value.*/
console.log(typeof newHexagon);

/*9. Print the `type` of a variable that has an object value.*/

console.log(typeof user1);

/*10. Create an array with five random values.*/

const Array1 = ["UserName", true, [1, 2, 3, 4], { Football: "Mancity", lastplace : "Liverpool" }, 5]
  ;

/*10.1.Add one value to the end of the array.*/
Array1.push("value add to the end ");

/*10.2.Add one thing to the beginning of the array.*/
Array1.unshift(" value add to the start");


/*10.3.Take out one thing from the end of the array.*/
  Array1.pop();

/*10.4.Print the length of the array.*/
  console.log(Array1.length);

/*10.5.Take out one thing from the end of the array.*/

const removeValueofArray = Array1.pop()


/*10.6.Take out one the 2nd thing from the array.*/
  remove2ndValueofArray = Array1.splice(1,1);