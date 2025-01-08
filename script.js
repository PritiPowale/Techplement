const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
copyBtn = document.querySelector(".copy");

// random quote function
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    // fetching random quotes/data from the API and parsing it into JavaScript object
    fetch("http://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Quote";
    });

}

copyBtn.addEventListener("click", ()=>{
    // copying the quote text on copyBtn click
    // writeText() property writes the specified text string to the system clipboard.
    navigator.clipboard.writeText(quoteText.innerText);
})

quoteBtn.addEventListener("click", randomQuote);