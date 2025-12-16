function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "There once was a man from Nantucket",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
