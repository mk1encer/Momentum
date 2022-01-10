const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall",
    author: "Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing",
    author: "Walt Disney",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Life is what happens when you're busy making other plans",
    author: "John Lennon",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light",
    author: "Aristotle",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayquote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayquote.quote;
author.innerText = todayquote.author;
