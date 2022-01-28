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
resultsContainer.style.background = "yellow";

//Question 7

function catsList(list) {
  for (i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

catsList(cats);

//Question 8

function createCats(cats) {
  var catContainer = document.querySelector(".cat-container");
  for (i = 0; i < cats.length; i++) {
    if (typeof cats[i].age === "undefined") {
      catContainer.innerHTML +=
        "<div><h5>" +
        "Name: " +
        cats[i].name +
        "</h5><p>" +
        "Age: Age unknown</p></div>";
    } else {
      catContainer.innerHTML +=
        "<div><h5>" +
        "Name: " +
        cats[i].name +
        "</h5><p>" +
        "Age: " +
        cats[i].age +
        "</p></div>";
    }
  }
}

createCats(cats);
