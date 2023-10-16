function shareOnWhatsApp() {
    const currentQuote = quote.textContent;
    const currentAuthor = author.textContent;
  
    // Construct the WhatsApp share URL with the quote and author
    const whatsappURL = `whatsapp://send?text=${encodeURIComponent(
      `"${currentQuote}" - ${currentAuthor}`
    )}`;
  
    // Open the WhatsApp share URL
    window.location.href = whatsappURL;
  }


  const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getquote() {
  const response = await fetch(api_url);
  const data = await response.json();

  // Update the HTML elements with the fetched data
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}


// Attach the getquote function to the button's click event
const newQuoteButton = document.getElementById("newQuoteButton");
newQuoteButton.addEventListener("click", function () {
  getquote();
});


