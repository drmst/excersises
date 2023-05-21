const newQuoteButton = document.getElementById("new-quote")
let quote = document.getElementById("quote-text")
const randomColor = document.getElementsByClassName("random-color")
const randomTextColor = document.querySelector("#quote-text")



newQuoteButton.addEventListener("click", function () {
    let randomColorTextforR = Math.floor(Math.random() * 256);
    let randomColorTextforG = Math.floor(Math.random() * 256);
    let randomColorTextforB = Math.floor(Math.random() * 256);
    let randomRGB = "rgb(" + randomColorTextforR + "," + randomColorTextforG + "," + randomColorTextforB + ")"



    const quoteText = [" Deadlines just aren't real to me until I'm staring one in the face.", " A deadline is negative inspiration. Still, it's better than no inspiration at all.", " I don't need time, I need a deadline.", " Dreams don't have timelines, deadlines, and aren't always in straight lines.", " Normally I miss deadlines like a storm trooper misses Jedi.", " There's nothing an artist needs more - even more than excellent tools and stamina - than a deadline.", " There’s no getting out alive, but you hope to avoid a deadline.", " Respect your deadline like it’s a field marshal.", " Deadline-induced quality issues: a problem all over the galaxy.", " I do however like to tell people, especially regarding writing and deadlines: Don't be perfect, just be done."]

    let randomQuoteTextNumber = Math.floor(Math.random() * quoteText.length)
    quote.innerHTML = quoteText[randomQuoteTextNumber]

    for (let i = 0; i < randomColor.length; i++) {
        randomColor[i].style.backgroundColor = randomRGB
    }

    randomTextColor.style.color = randomRGB

    document.body.appendChild(quote.innerHTML);
})

