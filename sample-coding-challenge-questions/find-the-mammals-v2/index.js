const allAnimals = [...document.querySelector(".all-animals").children];
const onlyMammalsSection = document.querySelector("#only-mammals");

const mammals = allAnimals.filter((animal) => {
  return animal.children[1].children[0].innerHTML === "true";
});

mammals.forEach((mammal) => {
  onlyMammalsSection.appendChild(mammal);
});
