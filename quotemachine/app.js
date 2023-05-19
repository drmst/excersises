const newQuoteButton = document.getElementById("new-quote")
let quote = document.getElementById("quote-text")
const randomColor = document.getElementsByClassName("random-color")
console.log(randomColor);
newQuoteButton.addEventListener("click", function () {
    const randomColorText = Math.random()
    console.log(randomColorText);
    if (randomColorText <= 0.1) {
        quote.innerHTML = " Deadlines just aren't real to me until I'm staring one in the face."
        
        for(let i=0;i<randomColor.length;i++){
            randomColor[i].style.backgroundColor="red"
            
        }
        
        document.body.appendChild(quote.innerHTML);
    }
    else if (0.1<randomColorText <= 0.2) {
        quote.innerHTML = " A deadline is negative inspiration. Still, it's better than no inspiration at all."
        
        for(let i=0;i<randomColor.length;i++){
            randomColor[i].style.backgroundColor="green"
        }
        
        document.body.appendChild(quote.innerHTML);
    }
    else if (0.2<randomColorText <= 0.3) {
        quote.innerHTML = " I don't need time, I need a deadline."
        
        for(let i=0;i<randomColor.length;i++){
            randomColor[i].style.backgroundColor="blue"
        }
        
        document.body.appendChild(quote.innerHTML);
    }
    else if (0.3<randomColorText <= 0.4) {
        quote.innerHTML = " Dreams don't have timelines, deadlines, and aren't always in straight lines."
        
        for(let i=0;i<randomColor.length;i++){
            randomColor[i].style.backgroundColor="grey"
        }
        
        document.body.appendChild(quote.innerHTML);
    }
    else if (0.4<randomColorText <= 0.5) {
        quote.innerHTML = " Normally I miss deadlines like a storm trooper misses Jedi."
        
        for(let i=0;i<randomColor.length;i++){
            randomColor[i].style.backgroundColor="orange"
        }
        
        document.body.appendChild(quote.innerHTML);
    }
    else if (0.5<randomColorText <= 0.6) {
        quote.innerHTML = " There's nothing an artist needs more - even more than excellent tools and stamina - than a deadline."
        
        for(let i=0;i<randomColor.length;i++){
            randomColor[i].style.backgroundColor="brown"
        }
        
        document.body.appendChild(quote.innerHTML);
    }
    else if (0.6<randomColorText <= 0.7) {
        quote.innerHTML = " There’s no getting out alive, but you hope to avoid a deadline."
        
        for(let i=0;i<randomColor.length;i++){
            randomColor[i].style.backgroundColor="DarkSlateBlue"
        }
        
        document.body.appendChild(quote.innerHTML);
    }
    else if (0.7<randomColorText <= 0.8) {
        quote.innerHTML = " Respect your deadline like it’s a field marshal."
        
        for(let i=0;i<randomColor.length;i++){
            randomColor[i].style.backgroundColor="Fuchsia"
        }
        
        document.body.appendChild(quote.innerHTML);
    }
    else if (0.8<randomColorText <= 0.9) {
        quote.innerHTML = " Deadline-induced quality issues: a problem all over the galaxy."
        
        for(let i=0;i<randomColor.length;i++){
            randomColor[i].style.backgroundColor="MediumSlateBlue"
        }
        
        document.body.appendChild(quote.innerHTML);
    }
    else if (0.9<randomColorText <= 1) {
        quote.innerHTML = " I do however like to tell people, especially regarding writing and deadlines: Don't be perfect, just be done."
        
        for(let i=0;i<randomColor.length;i++){
            randomColor[i].style.backgroundColor="Salmon"
        }
        
        document.body.appendChild(quote.innerHTML);
    }
})


