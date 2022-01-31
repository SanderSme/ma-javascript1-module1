const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

//Question 1

const cat = {
  mood: complain,
};
function complain() {
  console.log("Meow!");
}
complain();

//Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//Question 3

heading.style.fontSize = "2em";

//Question 4

heading.classList.add("subheading");

//Question 5

const paragraphs = document.querySelectorAll("p");
for (i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

//Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

//Question 7

function catsList(list) {
  for (i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

catsList(cats);

//Question 8

// function createCats(cats) {
//   var catContainer = document.querySelector(".cat-container");
//   for (i = 0; i < cats.length; i++) {
//     if (typeof cats[i].age === "undefined") {
//       catContainer.innerHTML +=
//         "<div><h5>" +
//         "Name: " +
//         cats[i].name +
//         "</h5><p>" +
//         "Age: Age unknown</p></div>";
//     } else {
//       catContainer.innerHTML +=
//         "<div><h5>" +
//         "Name: " +
//         cats[i].name +
//         "</h5><p>" +
//         "Age: " +
//         cats[i].age +
//         "</p></div>";
//     }
//   }
// }

// createCats(cats);

//question 8 . 2

// Question 8:

// Create a function called createCats. The function will have one parameter called cats.

// Inside the function loop through the value passed in as cats and create HTML for each object in the array.

// Wrap each item in a div, each name property in an h5 tag and each age property in a p tag.

// If the age property is missing, it should display “Age unknown” instead.

// Return the HTML from the function.

// Call the function and pass in the cats array as the argument.

// Assign the return value of the function to the innerHTML property of the element on the HTML page with a class of cat-container.

function createCats(cats) {
  let myCatItem = "";
  for (i = 0; i < cats.length; i++) {
    myCatItem =
      myCatItem +
      `<div>
    <h5>${cats[i].name}</h5>
    <p>${cats[i].age ? cats[i].age : "Age unknown"}</p>
    </div>`;
  }
  return myCatItem;
}

const myCats = createCats(cats);

const myCatsContainer = document.querySelector(".cat-container");

myCatsContainer.innerHTML = myCats;

//ekstra

const background = document.querySelector("body");

background.style.background = "grey";
