const newQuoteButton = document.getElementById("new-quote");
let quote = document.getElementById("quote-text");
const elementThatChangeColor = document.getElementsByClassName("random-color");
const quoteParagraph = document.querySelector("#quote-text");

const quoteTexts = [
  "Deadlines just aren't real to me until I'm staring one in the face.",
  "A deadline is negative inspiration. Still, it's better than no inspiration at all.",
  "I don't need time, I need a deadline.",
  "Dreams don't have timelines, deadlines, and aren't always in straight lines.",
  "Normally I miss deadlines like a storm trooper misses Jedi.",
  "There's nothing an artist needs more - even more than excellent tools and stamina - than a deadline.",
  "There’s no getting out alive, but you hope to avoid a deadline.",
  "Respect your deadline like it’s a field marshal.",
  "Deadline-induced quality issues: a problem all over the galaxy.",
  "I do however like to tell people, especially regarding writing and deadlines: Don't be perfect, just be done.",
  "Not for nothing are they called deadlines. By the time you reach the final line, sir, you are indeed dead.",
  "A hammer made of deadlines is the surest tool for crushing writer's block.",
  "One of these days, I won't have a painful deadline! That's a lie, I probably always will.",
];

newQuoteButton.addEventListener("click", function () {
  const randomRedColor = Math.floor(Math.random() * 256);
  const randomGreenColor = Math.floor(Math.random() * 256);
  const randomBlueColor = Math.floor(Math.random() * 256);
  const randomRGB =
    "rgb(" +randomRedColor + "," + randomGreenColor + "," + randomBlueColor + ")";

  let randomQuoteTextNumber = Math.floor(Math.random() * quoteTexts.length);
  quote.innerHTML = quoteTexts[randomQuoteTextNumber];

  for (let i = 0; i < elementThatChangeColor.length; i++) {
    elementThatChangeColor[i].style.backgroundColor = randomRGB;
  }

  quoteParagraph.style.color = randomRGB;

  document.body.appendChild(quote.innerHTML);
});
