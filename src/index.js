function displayPoem(response) {
  console.log("Poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "a40e3f3828575o8b16908tcfde6a3bd2";
  let context =
    "You are a funny poem expert and love to write limericks. Your mission is to generate a funny limerick in basic HTML. Do not write HTML at the start. It does not need a title. Make sure to follow the user instructions. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the limerick.";
  let prompt = `User instructions: Generate a funny limerick about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating limerick about ${instructionsInput.value}...</div>`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
