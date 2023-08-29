const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    authorPhoto: "img/1.jfif",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    authorPhoto: "img/2.jpg",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    authorPhoto: "img/3.jpg",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    authorPhoto: "img/5.jpg",
  },
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const authorPhotoElement = document.getElementById("author-photo");
const newQuoteButton = document.getElementById("new-quote-button");

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayRandomQuote() {
  const randomQuote = getRandomQuote();
  quoteElement.textContent = `"${randomQuote.quote}"`;
  authorElement.textContent = `- ${randomQuote.author}`;
  authorPhotoElement.src = randomQuote.authorPhoto;
}

newQuoteButton.addEventListener("click", displayRandomQuote);

displayRandomQuote();
